"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="border-red-700 bg-red-900 p-4 border-2">
      <h2>Something went wrong in board</h2>
      <button
        className="px-4 py-2 bg-red-600 hover:bg-red-600"
        onClick={
          //Attempt to recever by trying to re-render
          () => reset()
        }
      >
        try again
      </button>
    </div>
  );
}
