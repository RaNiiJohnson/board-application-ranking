import { prisma } from "@/db/prisma";
import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";

export default async function LayoutBoard({
  params,
  children,
}: PropsWithChildren<{
  params: { boardId: string };
}>) {
  const boardId = Number(params.boardId);

  if (isNaN(boardId)) {
    return notFound();
  }

  const board = await prisma.board.findUniqueOrThrow({
    where: {
      id: boardId,
    },
  });
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-4xl font-bold">{board.title}</h2>
      <div>{children}</div>
    </div>
  );
}
