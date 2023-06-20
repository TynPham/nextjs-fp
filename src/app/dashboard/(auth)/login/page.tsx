"use client";
import * as React from "react";
import styles from "./login.module.css";
import { signIn } from "next-auth/react";

export interface LoginProps {}

export default function Login(props: LoginProps) {
  return (
    <div className={styles.container}>
      <button onClick={() => signIn("google")}>Login with google</button>
    </div>
  );
}
