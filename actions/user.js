"use server"
import { auth } from "@clerk/nextjs/server";
// // import { db } from "@/lib/db";
// // import { clerkClient } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";
import { err } from "inngest/types";
import { generateAIInsights } from "./dashboard";


export async function updateUser(data) {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("User not authenticated");
  }
  const user = await db.user.findUnique({

    where: { clerkUserId: userId },
  });
  if (!user) throw new Error("User not found");
  try {
    const result = db.$transaction(
      async (tx) => {

        // if industry exist
        let industryInsight = await tx.industryInsight.findUnique({
          where: { industry: data.industry },
        });
        // if not then create it
         if (!industryInsight) {
          const insights = await generateAIInsights(data.industry);
          const demandLevel = insights.demandLevel.toUpperCase(); // "HIGH", "MEDIUM", "LOW"
          const marketOutlook = insights.marketOutlook.toUpperCase(); // "POSITIVE", "NEUTRAL", "NEGATIVE"

          industryInsight = await db.industryInsight.create({
            data: {
              industry: data.industry,
              ...insights,
              demandLevel,
              marketOutlook,
              nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            },
          });
        }
        //  update the user
        const updatedUser = await tx.user.update({
          where: {
            id: user.id,
          },
          data: {
            industry: data.industry,
            experience: data.experience,
            bio: data.bio,
            skills: data.skills,
          },
        });
        return { updatedUser, industryInsight };

      },
      {
        timeout: 10000, // 10 seconds timeout
      }
    )
    // revalidatePath("/");
    return { success: true, user: result.updatedUser };
  }
  catch (error) {
    console.error("Error updating user:", error);
    throw new Error("Failed to update user" + error.message);
  }
}

export async function getUserOnboardingStatus() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  try {
    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
      select: {
        industry: true,
      },
    });

    return {
      isOnboarded: !!user?.industry,
    };
  } catch (error) {
    console.error("Error checking onboarding status:", error);
    throw new Error("Failed to check onboarding status");
  }
}

