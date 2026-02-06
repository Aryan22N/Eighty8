"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <button
        onClick={() => router.push("/formrut")}
        className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
      >
        Go to Brochure Form
      </button>
    </div>
  );
}
