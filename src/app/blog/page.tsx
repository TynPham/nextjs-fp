import * as React from "react";
import styles from "./blog.module.css";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Post } from "@/models/Post";

export interface BlogProps {}

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts");
  if (!res.ok) {
    notFound();
  }
  return res.json();
}

export default async function Blog(props: BlogProps) {
  const data: Post[] = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((post) => (
        <Link href={`/blog/${post._id}`} className={styles.container} key={post._id}>
          <div className={styles.imageContainer}>
            <Image src={post.img} alt="" width={400} height={250} className={styles.image} />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
