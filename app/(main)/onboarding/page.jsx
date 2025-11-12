import { getUserOnboardingStatus } from '@/actions/user'
// import { redirect } from 'next/dist/server/api-utils';
import { redirect } from 'next/navigation';
import React from 'react'
import OnboardingForm from './_components/onboarding-form';
import { industries } from '@/data/industries';
import { checkUser } from '@/lib/checkUser';

const OnboardingPage = async () => {
  // Ensure user exists in database before checking onboarding status
  await checkUser();
  const { isOnboarded } = await getUserOnboardingStatus();
  if (isOnboarded) {
    // Redirect to the dashboard or another page if already onboarded
    redirect('/dashboard');
  }
  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  )
}

export default OnboardingPage