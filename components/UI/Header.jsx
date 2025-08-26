"use client";

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const Header = () => {
  const currentUrl = usePathname();

  useEffect(() => {
    console.log(currentUrl);
  }, [currentUrl]);

  return (
    <header className="bg-slate-500 h-20 text-xl flex justify-between items-center px-6 gap-6 text-white">
      <div className="flex gap-4">
        <SignedOut>
          <SignInButton />
          <SignUpButton>
            <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton/>
        </SignedIn>
      </div>
      <div className="flex gap-4">
        <Link
          href="/"
          className={`${
            currentUrl === "/" && "underline text-orange-500"
          } underline-offset-2`}
        >
          Home
        </Link>
        <Link
          className={`${
            currentUrl === "/subpage" && "underline"
          } underline-offset-2`}
          href="/subpage"
        >
          SubPage
        </Link>
        <Link
          className={`${
            currentUrl === "/deeppage" && "underline"
          } underline-offset-2`}
          href="/deeppage"
        >
          DeepPage
        </Link>
           <Link
          href="/databaseData"
          className={`${
            currentUrl === "/" && "underline text-orange-500"
          } underline-offset-2`}
        >
          CRUD
        </Link>
      </div>
    </header>
  );
};
