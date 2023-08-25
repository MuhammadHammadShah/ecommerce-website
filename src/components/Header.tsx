"use client";
import React from "react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
const Header = () => {
  const { isSignedIn } = useAuth();
  console.log(isSignedIn);
  return (
    <div className="flex justify-between">
      {!isSignedIn && (
        <SignInButton mode="modal">
          <button className="bg-blue-700 text-white">Sign In</button>
        </SignInButton>
      )}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Header;
