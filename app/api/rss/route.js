import allPosts from "@/data/posts.json";
import { generateRSSFeed } from "@/libs/functions/rss";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const posts = Array.isArray(allPosts) ? allPosts : await allPosts;
    const rss = generateRSSFeed(posts);

    return new NextResponse(rss, {
      headers: {
        "Content-Type": "application/rss+xml",
        "Cache-Control": "s-maxage=3600, stale-while-revalidate", // (cache for 1 hour)
      },
    });
  } catch (error) {
    console.error("Error generating RSS feed:", error.message, error.stack);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
