import type { Comment, Like, Post, SavedPost, User } from "@prisma/client";

export type CommentWithExtras = Comment & { user: User };
export type LikesWithExtras = Like & { user: User };

export type PostWithExtras = Post & {
  comments: CommentWithExtras[];
  likes: LikesWithExtras[];
  savedBy: SavedPost[];
  user: User;
};
