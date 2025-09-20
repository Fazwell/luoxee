"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function BackButton({ label = "Back" }: { label?: string }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/account/overview")}
      className="flex items-center gap-2 text-blue-600 hover:underline mb-4"
    >
      <ArrowLeftIcon className="h-5 w-5" />
      <span>{label}</span>
    </button>
  );
}
