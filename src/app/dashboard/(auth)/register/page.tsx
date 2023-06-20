"use client";
import { useState } from "react";
import styles from "./register.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export interface RegisterProps {}

export default function Register(props: RegisterProps) {
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = ((e.target as HTMLFormElement)[0] as HTMLInputElement).value;
    const email = ((e.target as HTMLFormElement)[1] as HTMLInputElement).value;
    const password = ((e.target as HTMLFormElement)[2] as HTMLInputElement).value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 && router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create an Account</h1>
      <h2 className={styles.subtitle}>Please sign up to see the dashboard.</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" placeholder="Username" required className={styles.input} />
        <input type="text" placeholder="Email" required className={styles.input} />
        <input type="password" placeholder="Password" required className={styles.input} />
        <button className={styles.button}>Register</button>
        {error && "Something went wrong!"}
      </form>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/dashboard/login">
        Login with an existing account
      </Link>
    </div>
  );
}
