import { PostWithExtras } from "@/lib/definitions";
import { cn } from "@/lib/utils";
import React from "react";
import LikeButton from "./Like";
import Link from "next/link";
import ActionIcon from "./ActionIcon";
import { MessageCircle } from "lucide-react";
import ShareButton from "./ShareButton";

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
      <Link href={`/dashboard/p/${post.id}`}>
        <ActionIcon>
          <MessageCircle className={"h-6 w-6"}/>
        </ActionIcon>
      </Link>
      <ShareButton postId={post.id}/>
    </div>
  );
}

export default PostActionBar;
