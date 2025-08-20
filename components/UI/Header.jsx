"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const Header = () => {
  const currentUrl = usePathname();

  useEffect(() => {
    console.log(currentUrl);
  }, [currentUrl]);

  return (
    <header className="bg-slate-500 h-20 text-xl flex justify-end items-center px-6 gap-6 text-white">
      <Link
        href="/"
        className={`${
          currentUrl === "/" && "underline text-orange-500"
        } underline-offset-2`}>
        Home
      </Link>
      <Link
        className={`${
          currentUrl === "/subpage" && "underline"
        } underline-offset-2`}
        href="/subpage">
        SubPage
      </Link>
      <Link
        className={`${
          currentUrl === "/deeppage" && "underline"
        } underline-offset-2`}
        href="/deeppage">
        DeepPage
      </Link>
      
      <Link
        className={`${
          currentUrl === "/animals" && "underline"
        } underline-offset-2`}
        href="/animals">
        Animals
      </Link>

      <Link
        className={`${
          currentUrl === "/magicProducts" && "underline"
        } underline-offset-2`}
        href="/magicProducts">
        MagicProducts
      </Link>
    </header>
  );
};
