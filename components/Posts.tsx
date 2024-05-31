import { fetchPosts } from "@/lib/data";
import React from "react";

async function Posts() {
  const post = await fetchPosts();
  console.log(post);
  // Todo: Implement data fetching logic
  return <>{/* Map through post */}</>;
}

export default Posts;
