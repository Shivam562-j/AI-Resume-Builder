import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const SignInPage = () => {
  return (
    <div className='h-screen flex justify-center items-center overflow-y-auto my-2'>
      <SignIn />
    </div>
  )
}

export default SignInPage;