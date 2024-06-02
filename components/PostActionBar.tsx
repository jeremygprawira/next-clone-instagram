import { PostWithExtras } from "@/lib/definitions";
import { cn } from "@/lib/utils";
import React from "react";
import LikeButton from "./Like";

function PostActionBar({
  post,
  userId,
  className,
}: {
  post: PostWithExtras;
  userId?: string;
  className?: string;
}) {
  return (
    <div className={cn("relative flex items-center w-full gap-x-2", className)}>
      <LikeButton post={post} userId={userId} />
    </div>
  );
}

export default PostActionBar;
