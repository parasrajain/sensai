// import React from 'react'
// import {SignIn} from '@clerk/nextjs'

// const Page = () => {
//   return (
//     <SignIn />
//   )
// }

// export default Page

import React from 'react'
import { SignIn } from '@clerk/nextjs' // ✅ Correct import

export default function Page() {
  return <SignIn />
}
