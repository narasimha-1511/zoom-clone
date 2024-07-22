import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <main className="h-screen flex w-full justify-center items-center">
      <SignIn />
    </main>
  );
};

export default SignInPage;
