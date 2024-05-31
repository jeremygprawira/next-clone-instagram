"use server";

import prisma from "@/lib/prisma";
import { getUserId } from "./utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { CreatePost } from "./schemas";

export async function createPost(values: z.infer<typeof CreatePost>) {
  const userId = await getUserId();

  const validatedFields = CreatePost.safeParse(values);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing mandatory fields. Failed to create post.",
    };
  }

  const { fileUrl, caption } = validatedFields.data;

  try {
    await prisma.post.create({
      data: {
        caption,
        fileUrl,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  } catch (error) {
    return {
      message: "Database Error. Failed to Create Post.",
    };
  }

  revalidatePath("/dashboard");
  redirect("/dashboard");
}
