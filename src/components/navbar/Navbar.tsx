"use client";
import Link from "next/link";
import * as React from "react";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import DarkMode from "../darkMode/DarkMode";

const navLink = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    id: 3,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 4,
    name: "About",
    path: "/about",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
  {
    id: 6,
    name: "Dashboard",
    path: "/dashboard",
  },
];

export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  const pathname = usePathname().split("/")[1];
  return (
    <div className={styles.container}>
      <DarkMode />
      {navLink.map((link) => (
        <Link href={link.path} key={link.id} className={`${styles.link} ${link.path === "/" + pathname ? styles.active : ""}`}>
          {link.name}
        </Link>
      ))}
    </div>
  );
}
