"use client";

import { Input } from "@/components/form/Input";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export const BoardForm = () => {
  const router = useRouter();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const title = String(formData.get("title"));

    fetch("/api/boards", {
      method: "POST",
      body: JSON.stringify({
        title,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        router.refresh();
      });
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input label="Title" name="title" />
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
        type="submit"
      >
        Create board
      </button>
    </form>
  );
};
