import * as React from "react";
import styles from "./blog.module.css";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

export interface BlogProps {}

export interface Data {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    notFound();
  }
  return res.json();
}

export default async function Blog(props: BlogProps) {
  const data: Data[] = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((post) => (
        <Link href={`/blog/${post.id}`} className={styles.container} key={post.id}>
          <div className={styles.imageContainer}>
            <Image
              src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>Desc</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
