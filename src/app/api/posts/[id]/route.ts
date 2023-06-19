import post from "@/models/Post";
import connectDb from "@/utils/db";
import { NextResponse } from "next/server";

interface Params {
  params: {
    id: string;
  };
}

export async function GET(request: Request, { params }: Params) {
  const { id } = params;
  try {
    await connectDb();
    const posts = await post.findById(id);
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
