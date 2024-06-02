import React from "react";
import { auth } from "@/auth";
import UserAvatar from "./UserAvatar";
import Image from "next/image";
import Link from "next/link";
import { PostWithExtras } from "@/lib/definitions";
import { Card } from "./ui/card";
import Timestamp from "./Timestamp";
import PostOptions from "./PostOptions";
import PostActionBar from "./PostActionBar";

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
        <PostOptions post={post} userId={post.userId} />
      </div>

      <Card className="relative h-[450px] w-full overflow-hidden rounded-none sm:rounded-md">
        <Image
          src={post.fileUrl}
          alt=""
          fill
          className="sm:rounded-md object-cover"
        />
      </Card>

      <PostActionBar post={post} userId={userId} className="px-3 sm:px-0" />

      {post.caption && (
        <div className="text-sm leading-none flex items-center space-x-2 font-medium px-3 sm:px-0">
          <Link href={`/dashboard/${username}`} className="font-bold">
            {username}
          </Link>
          <p>{post.caption}</p>

          {/* <Comments
            postId={post.id}
            comments={post.comments}
            user={session?.user}
          /> */}
        </div>
      )}
    </div>
  );
}

export default Post;
