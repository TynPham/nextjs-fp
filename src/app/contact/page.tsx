/* eslint-disable react/no-unescaped-entities */
import Button from "@/components/button/Button";
import Image from "next/image";
import * as React from "react";
import styles from "./contact.module.css";
import { Metadata } from "next";

export interface ContactProps {}

export const metadata: Metadata = {
  title: "Contact page",
  description: "This is a contact page",
};

export default function Contact(props: ContactProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" alt="" fill={true} className={styles.image} priority />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea className={styles.textArea} placeholder="message" cols={30} rows={10}></textarea>
          <Button href="#" text="Send" />
        </form>
      </div>
    </div>
  );
}
