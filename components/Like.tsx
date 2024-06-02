"use client";

import { PostWithExtras } from "@/lib/definitions";
import { Like } from "@prisma/client";
import React, { useOptimistic } from "react";

function LikeButton({
  post,
  userId,
}: {
  post: PostWithExtras;
  userId?: string;
}) {
  // function that will accept a single like
  const predicate = (like: Like) =>
    like.userId === userId && like.userId === post.id;
  // addOptimisticLike: server action
  const [optismisticLikes, addOptismisticLike] = useOptimistic<Like[]>( // useOptiomistic<Like[]>: Define type of the optismistic that we gonna use
    post.likes,
    // @ts-ignore
    (state: Like[], newLike: Like) =>
      state.some(predicate)
        ? state.filter((like) => like.userId !== userId)
        : [...state, newLike]
  );
  return <div>LikeButton</div>;
}

export default LikeButton;
