"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { createUser } from "./data";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const BlogFormSchema = z.object({
  id: z.string(),
  title: z
    .string({
      invalid_type_error: "Title is required",
    })
    .min(2),
  url: z
    .string({
      invalid_type_error: "Url is required",
    })
    .min(4),
  likes: z.number(),
  description: z
    .string({
      invalid_type_error: "Description is required",
    })
    .min(10),
});

const CreateBlog = BlogFormSchema.omit({ id: true, likes: true });

export type CreateBlogState = {
  errors?: {
    title?: string[];
    url?: string[];
    description?: string[];
  };
  message?: string | null;
};

export async function createBlog(
  prevState: CreateBlogState,
  formData: FormData
) {
  console.log("🚀 ~ formData:", formData);
  const validatedFields = CreateBlog.safeParse({
    title: formData.get("title"),
    url: formData.get("url"),
    description: formData.get("description"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields, Failed to create Blog.",
    };
  }

  const session = await auth();
  const userId = session?.userId;
  console.log("🚀 auth ~ userId:", userId);

  if (!userId) {
    return {
      message: "User not authenticated",
    };
  }

  const { title, url, description } = validatedFields.data;

  try {
    const id = Number(userId);

    await prisma.blog.create({
      data: {
        title,
        url,
        description,
        userId: id,
      },
    });
  } catch (error) {
    console.log("🚀 ~ error):", error);
    return {
      message: "Database error. Failed to create Blog.",
    };
  }

  revalidatePath("/blogs");
  redirect("/blogs");
}

export async function likeBlog(blogId: number) {
  try {
    await prisma.blog.update({
      where: {
        id: blogId,
      },
      data: {
        likes: { increment: 1 },
      },
    });
  } catch (error) {
    return {
      message: "Error updating blog",
    };
  }
  revalidatePath("/blogs");
}

export async function deleteBlog(blogId: number) {
  try {
    await prisma.blog.delete({
      where: {
        id: blogId,
      },
    });
  } catch (error) {
    return {
      message: `Error deleting the blog, ${error}`,
    };
  }
  revalidatePath("/blogs");
}

// User

const UserFormSchema = z.object({
  id: z.string(),
  username: z.string({
    invalid_type_error: "Username is required",
  }),
  password: z.string({
    invalid_type_error: "password is required",
  }),
});

const CreateUser = UserFormSchema.omit({ id: true });

export type CreateUserState = {
  errors?: {
    username?: string[];
    password?: string[];
  };
  message?: string | null;
};

export async function createNewUser(
  prevState: CreateUserState,
  formData: FormData
) {
  const validatedFields = CreateUser.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields, Failed to sign up.",
    };
  }

  const { username, password } = validatedFields.data;

  try {
    await createUser(username, password);
    console.log("User created");
  } catch (error) {
    return {
      message: "Database error. Failed to create Blog.",
    };
  }

  revalidatePath("/blogs");
  redirect("/blogs");
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
