import * as React from "react";
import { Navbar } from "../navbar/Navbar";
import styles from "./header.module.css";

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
  return (
    <div className={styles.header}>
      <h1 className={styles.name}>Iamamia</h1>
      <Navbar />
    </div>
  );
}
