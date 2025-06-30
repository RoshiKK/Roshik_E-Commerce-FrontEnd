import { SignIn } from '@clerk/nextjs';
import Head from 'next/head';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Head>
        <title>Sign In | Furniro</title>
      </Head>
      <SignIn 
        path="/sign-in" 
        routing="path" 
        signUpUrl="/sign-up"
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