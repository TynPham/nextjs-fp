import * as React from "react";

export interface BlogIdProps {
  params: {
    id: string;
  };
}

export default function BlogId({ params: { id } }: BlogIdProps) {
  return <div></div>;
}
