import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const LandingPage = () => {
  return (
    <>
      <h1>Landing Page</h1>
      <Link href="/sign-in">
        <Button>Login</Button>
      </Link>
      <Link href="/sign-up">
        <Button>Sign Up</Button>
      </Link>
      <UserButton afterSignOutUrl="/" />
    </>
  );
};

export default LandingPage;
