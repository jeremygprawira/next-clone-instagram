"use client";

// import Error from "@/components/Error";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useMount from "@/hooks/useMount";
// import { createPost } from "@/lib/actions";
// import { CreatePost } from "@/lib/schemas";
// import { UploadButton } from "@/lib/uploadthing";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

function CreatePage() {
  const pathname = usePathname();
  const isCreatePage = pathname === "/dashboard/create";
  const router = useRouter();
  const mount = useMount();

  if (!mount) return null;

  return (
    <div>
      <Dialog
        open={isCreatePage}
        onOpenChange={(open) => !open && router.back()}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create a new post</DialogTitle>
          </DialogHeader>

          {/* <Form>
            <form></form>
          </Form> */}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreatePage;
