"use client";
import React from "react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/Logo.webp";
import { ShoppingCart } from "lucide-react";
const Header = () => {
  const { isSignedIn } = useAuth();
  console.log(isSignedIn);
  return (
    <div>
      <div className="max-w-full">
        <div className="flex justify-between items-center py-6 px-8">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="logo"
              width={400}
              height={400}
              className="w-40"
            />
          </Link>
          <ul className="flex gap-x-10">
            <li className="text-lg font-extrabold">
              <Link href={""}>Male</Link>
            </li>
            <li className="text-lg font-extrabold">
              <Link href={""}>Female</Link>
            </li>
            <li className="text-lg font-extrabold">
              <Link href={""}>Kids</Link>
            </li>
            <li className="text-lg font-extrabold">
              <Link href={""}>All Products</Link>
            </li>
          </ul>
          {/* <input type="text" /> */}
          <div className="flex justify-evenly items-center gap-x-12">
            <div className="h-10 w-10 rounded-full    ">
              <Link href={"/cart"}>
                <ShoppingCart className="h-6 w-6 mt-3 ml-[20px]" />
              </Link>
            </div>
            <div className="flex ">
              {!isSignedIn && (
                <SignInButton mode="modal">
                  <button className="bg-blue-500 text-white rounded-full p-4">
                    Sign In
                  </button>
                </SignInButton>
              )}
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
