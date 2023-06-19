"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import styles from "./darkMode.module.css";

export interface DarkModeProps {}

export default function DarkMode(props: DarkModeProps) {
  const { mode, toggleMode } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggleMode}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div className={styles.ball} style={mode === "light" ? { left: "2px" } : { right: "2px" }} />
    </div>
  );
}
