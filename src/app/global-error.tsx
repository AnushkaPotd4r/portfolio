'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-[#14213D] p-8">
        <h2 className="text-xl font-bold">Something went wrong</h2>
        <button
          onClick={() => reset()}
          className="mt-4 px-4 py-2 bg-[#2563EB] text-white rounded-lg"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
