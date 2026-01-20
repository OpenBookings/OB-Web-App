"use client";

import { useState, useEffect } from "react";
import { FirebaseUIProvider } from "@firebase-oss/ui-react";
import { getOrCreateFirebaseUI } from "@/lib/firebase";
import type { FirebaseUIStore } from "@firebase-oss/ui-core";

export function FirebaseUIProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ui, setUi] = useState<FirebaseUIStore | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getOrCreateFirebaseUI()
      .then(setUi)
      .catch((e) => setError(e instanceof Error ? e.message : String(e)));
  }, []);

  if (error) {
    return (
      <div className="flex min-h-[200px] items-center justify-center p-4 text-destructive">
        {error}
      </div>
    );
  }

  if (!ui) {
    return null;
  }

  return <FirebaseUIProvider ui={ui}>{children}</FirebaseUIProvider>;
}
