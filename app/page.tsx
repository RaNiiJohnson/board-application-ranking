import { BoardCard } from "@/components/board/BoardCard";
import { prisma } from "@/db/prisma";
import { BoardForm } from "./boards/new/BoardForm";

export default async function Home() {
  const boards = await prisma.board.findMany();

  return (
    <div className="flex flex-col gap-4">
      <BoardForm />
      <h1 className="text-5xl font-bold">Board list</h1>

      <ul className="flex flex-col gap-2">
        {boards.map((board) => (
          <BoardCard key={board.id} board={board} />
        ))}
      </ul>
    </div>
  );
}
