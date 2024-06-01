import { fetchPosts } from "@/lib/data";
import React from "react";
import Post from "./Post";

async function Posts() {
  const posts = await fetchPosts();
  // Todo: Implement data fetching logic
  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default Posts;
