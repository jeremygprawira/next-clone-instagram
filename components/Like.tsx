"use client";

import { PostWithExtras } from "@/lib/definitions";
import { Like } from "@prisma/client";
import React, { useOptimistic } from "react";
import ActionIcon from "./ActionIcon";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { likePost } from "@/lib/actions";

function LikeButton({
  post,
  userId,
}: {
  post: PostWithExtras;
  userId?: string;
}) {
  // function that will accept a single like
  const predicate = (like: Like) =>
    like.userId === userId && like.postId === post.id;
  // addOptimisticLike: server action
  const [optismisticLikes, addOptismisticLike] = useOptimistic<Like[]>( // useOptiomistic<Like[]>: Define type of the optismistic that we gonna use
    post.likes,
    // @ts-ignore
    (state: Like[], newLike: Like) =>
      // Check whether the like is already exist, if it is alr exist = delete
      state.some(predicate)
        ? state.filter((like) => like.userId !== userId)
        : [...state, newLike]
  );
  return (
    <div className="flex flex-col">
      <form
        action={async (formData: FormData) => {
          const postId = formData.get("postId");
          addOptismisticLike({ postId, userId });
          await likePost(postId);
        }}
      >
        <input type="hidden" name="postId" value={post.id} />
        <ActionIcon>
          <Heart
            className={cn("h-6 w-6", {
              "text-red-500 fill-red-500": optismisticLikes.some(predicate),
            })}
          />
        </ActionIcon>
      </form>
      {optismisticLikes.length > 0 && (
        <p className="text-sm font-bold dark:text-white">
          {optismisticLikes.length}{" "}
          {optismisticLikes.length === 1 ? "like" : "likes"}
        </p>
      )}
    </div>
  );
}

export default LikeButton;
