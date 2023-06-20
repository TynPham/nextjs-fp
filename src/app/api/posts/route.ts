import Post from "@/models/Post";
import connectDb from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    await connectDb();
    const posts = await Post.find();
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
