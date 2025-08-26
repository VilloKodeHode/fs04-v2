"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function UserOnboarding() {
  const { isSignedIn, isLoaded, user } = useUser();

  useEffect(() => {
    if (isSignedIn && isLoaded) {
      fetch("/api/user/create", { method: "POST", body: JSON.stringify(user) },);
    }
  }, [isSignedIn]);

  return null;
}
