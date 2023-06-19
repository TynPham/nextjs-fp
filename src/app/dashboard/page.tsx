"use client";
import * as React from "react";
import styles from "./dashboard.module.css";
import useSWR from "swr";

export interface DashBoardProps {}

export default function DashBoard(props: DashBoardProps) {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher);
  console.log(data, error, isLoading);
  return <div>dashboard</div>;
}
