import { SignUp } from '@clerk/nextjs';
import Head from 'next/head';

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Head>
        <title>Sign Up | Furniro</title>
      </Head>
      <SignUp 
        path="/sign-up" 
        routing="path" 
        signInUrl="/sign-in"
        afterSignUpUrl="/"
        appearance={{
          elements: {
            formButtonPrimary: "bg-[#B88E2F] hover:bg-[#9a7627] text-sm normal-case",
            footerActionLink: "text-[#B88E2F] hover:text-[#9a7627]"
          }
        }}
      />
    </div>
  );
}