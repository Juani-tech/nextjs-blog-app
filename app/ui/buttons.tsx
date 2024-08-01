"use client";

import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { deleteBlog, likeBlog } from "../lib/actions";

interface LikeButtonProps {
  blogId: number;
}

export function LikeButton({ blogId }: LikeButtonProps) {
  const onClickLike = async () => {
    await likeBlog(blogId);
  };
  return (
    <button onClick={onClickLike}>
      <HandThumbUpIcon className="w-5"></HandThumbUpIcon>
    </button>
  );
}

interface DeleteButtonProps {
  blogId: number;
}

export function DeleteButton({ blogId }: DeleteButtonProps) {
  const onDelete = async () => {
    await deleteBlog(blogId);
  };

  return <button onClick={onDelete}>Delete</button>;
}
