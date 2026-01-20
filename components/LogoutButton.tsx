"use client";

import { signOut } from "firebase/auth";
import { useUI } from "@firebase-oss/ui-react";

export default function LogoutButton() {
  const ui = useUI();

  async function handleSignOut() {
    try {
      await signOut(ui.auth);
    } catch {
      // ignore
    }
  }

  return (
    <button
      type="button"
      onClick={handleSignOut}
      className="text-sm sm:text-base md:text-lg text-white font-medium transition-colors px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 hover:bg-black/70"
    >
      Sign out
    </button>
  );
}

