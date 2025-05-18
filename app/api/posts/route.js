import posts from "@/data/posts.json";
import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json(posts);
};