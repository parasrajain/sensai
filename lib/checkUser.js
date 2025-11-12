import { currentUser } from "@clerk/nextjs/server"
import { db } from "./prisma";    

export const checkUser = async (userId) => {
    const user = await currentUser();
    if (!user) {
        return null;
    }
    try{
        const name = `${user.firstName} ${user.lastName}`;
        const email = user.emailAddresses[0].emailAddress;

        // Use upsert to handle race conditions - creates if not exists, updates if exists
        const dbUser = await db.user.upsert({
            where: {
                clerkUserId: user.id,
            },
            update: {
                name,
                imageUrl: user.imageUrl,
                email,
            },
            create: {
                clerkUserId: user.id,
                name,
                imageUrl: user.imageUrl,
                email,
            },
        });
        return dbUser;
    } catch (error) {
        console.error("Error in checkUser:", error);

        // If there's a unique constraint error on email, try to find the user by email
        if (error.code === 'P2002') {
            try {
                const existingUser = await db.user.findUnique({
                    where: {
                        email: user.emailAddresses[0].emailAddress,
                    },
                });

                if (existingUser) {
                    // Update the existing user with the new clerk ID
                    const updatedUser = await db.user.update({
                        where: {
                            email: user.emailAddresses[0].emailAddress,
                        },
                        data: {
                            clerkUserId: user.id,
                            name: `${user.firstName} ${user.lastName}`,
                            imageUrl: user.imageUrl,
                        },
                    });
                    return updatedUser;
                }
            } catch (retryError) {
                console.error("Error in retry logic:", retryError);
            }
        }

        return null;
    }
}