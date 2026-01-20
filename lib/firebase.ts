import type { FirebaseUIStore } from "@firebase-oss/ui-core";

export type FirebaseConfig = {
  apiKey: string;
  authDomain?: string;
  projectId?: string;
  storageBucket?: string;
  messagingSenderId?: string;
  appId?: string;
};

let uiInstance: FirebaseUIStore | null = null;

export function getFirebaseConfig(): FirebaseConfig | null {
  // NEXT_PUBLIC_ prefix required: Firebase init runs in the client ("use client" component)
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  if (!apiKey) return null;
  return {
    apiKey,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };
}

/**
 * Initializes Firebase App and Firebase UI on the client. Safe to call multiple times;
 * returns the same UI store after the first successful init.
 */
export async function getOrCreateFirebaseUI(): Promise<FirebaseUIStore> {
  if (typeof window === "undefined") {
    throw new Error("Firebase UI must be initialized on the client.");
  }
  if (uiInstance) return uiInstance;

  const config = getFirebaseConfig();
  if (!config?.apiKey) {
    throw new Error(
      "Missing Firebase config. Set NEXT_PUBLIC_FIREBASE_API_KEY (and other NEXT_PUBLIC_FIREBASE_* env vars) in .env.local"
    );
  }

  const { initializeApp, getApp } = await import("firebase/app");
  const { initializeUI } = await import("@firebase-oss/ui-core");

  let app;
  try {
    app = getApp();
  } catch {
    app = initializeApp(config);
  }

  uiInstance = initializeUI({ app });
  return uiInstance;
}
