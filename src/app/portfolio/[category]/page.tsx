import * as React from "react";
import { Items, items } from "./data";
import { notFound } from "next/navigation";
import styles from "./category.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";

export interface CategoryProps {
  params: {
    category: string;
  };
}

export default function Category({ params: { category } }: CategoryProps) {
  const getData = (cat: keyof Items) => {
    const data = items[cat];

    if (data) {
      return data;
    }

    return notFound();
  };
  const data = getData(category as keyof Items);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{category}</h1>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" href="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} fill={true} src={item.image} alt="" priority />
          </div>
        </div>
      ))}
    </div>
  );
}
