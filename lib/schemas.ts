import { z } from "zod";

export const PostSchema = z.object({
  id: z.string(),
  file: z.string().url(),
  caption: z.string().optional(),
});
