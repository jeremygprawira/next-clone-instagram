import React from "react";
import { auth } from "@/auth";
import UserAvatar from "./UserAvatar";
import Image from "next/image";
import Link from "next/link";
import { PostWithExtras } from "@/lib/definitions";
import { Card } from "./ui/card";
import Timestamp from "./Timestamp";

// Async is used bc we use react-server component, not using use client
async function Post({ post }: { post: PostWithExtras }) {
  const session = await auth();
  const userId = session?.user?.id;
  const username = post.user.username;

  if (!session?.user) return null;

  return (
    <div className="flex flex-col space-y-2.5">
      <div className="flex items-center justify-between px-3 sm:px-0">
        <div className="flex space-x-3 items-center">
          <UserAvatar user={post.user} />
          <div className="text-sm">
            <p className="space-x-1">
              <span className="font-semibold">{username}</span>
              <span className="font-medium text-neutral-500 dark:text-neutral-400 text-xs">
                •
              </span>
              <Timestamp createdAt={post.createdAt} />
            </p>
            <p className="text-xs text-black dark:text-white font-medium">
              Jakarta, Indonesia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
