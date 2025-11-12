const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function deleteAllUsers() {
  try {
    console.log('Starting user deletion process...');

    // Delete related records first (due to foreign key constraints)
    const deletedAssessments = await prisma.assessment.deleteMany({});
    console.log(`✓ Deleted ${deletedAssessments.count} assessments`);

    const deletedResumes = await prisma.resume.deleteMany({});
    console.log(`✓ Deleted ${deletedResumes.count} resumes`);

    const deletedCoverLetters = await prisma.coverLetter.deleteMany({});
    console.log(`✓ Deleted ${deletedCoverLetters.count} cover letters`);

    // Finally delete all users
    const deletedUsers = await prisma.user.deleteMany({});
    console.log(`✓ Deleted ${deletedUsers.count} users`);

    console.log('\n✅ Successfully deleted all user data from the database!');
  } catch (error) {
    console.error('❌ Error deleting users:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

deleteAllUsers();
