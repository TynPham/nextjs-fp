import Link from "next/link";
import * as React from "react";
import styles from "./button.module.css";

export interface ButtonProps {
  href: string;
  text: string;
}

export default function Button({ href, text }: ButtonProps) {
  return (
    <Link href={href}>
      <button className={styles.button}>{text}</button>
    </Link>
  );
}
