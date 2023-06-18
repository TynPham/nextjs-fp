import Link from "next/link";
import * as React from "react";
import styles from "./navbar.module.css";

const navLink = [
  {
    id: 1,
    name: "Home",
    path: "/home",
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
  return (
    <div className={styles.container}>
      {navLink.map((link) => (
        <Link href={link.path} key={link.id} className={styles.link}>
          {link.name}
        </Link>
      ))}
    </div>
  );
}
