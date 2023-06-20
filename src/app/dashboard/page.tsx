"use client";
import * as React from "react";
import styles from "./dashboard.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";

export interface DashBoardProps {}

export default function DashBoard(props: DashBoardProps) {
  const session = useSession();
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher);
  return <div>dashboard</div>;
}
