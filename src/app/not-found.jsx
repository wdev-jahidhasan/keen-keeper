"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-base-100 px-4">
      
      <div className="text-center max-w-md w-full p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="mx-auto mb-3 w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white text-2xl">🧭</div>
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent text-transparent bg-clip-text leading-none">404</h1>
        <h2 className="mt-2 text-xl font-semibold">
          Page Not Found
        </h2>
        <p className="mt-2 text-sm opacity-70">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>
        <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => router.back()}
            className="btn btn-outline btn-primary w-full sm:w-auto"
          >
            ⬅ Go Back
          </button>

          <button
            onClick={() => router.push("/")}
            className="btn btn-outline btn-primary w-full sm:w-auto"
          >
            🏠 Home
          </button>
        </div>
      </div>
    </div>
  );
}