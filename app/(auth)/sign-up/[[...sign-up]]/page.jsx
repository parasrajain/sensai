import React from 'react'
import {  SignUp } from '@clerk/nextjs' // ✅ Correct import

export default function Page() {
  return (
    <SignUp
      forceRedirectUrl="/onboarding"
      signInUrl="/sign-in"
    />
  )
}