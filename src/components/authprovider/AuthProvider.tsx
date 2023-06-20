"use client";
import { SessionProvider } from "next-auth/react";
import * as React from "react";

export interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
