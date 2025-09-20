import Link from "next/link";

export default function SemiFooter() {
  return (
    <footer className="w-full border-t px-6 py-10 text-center text-sm">
      <div className="mb-4 font-medium">Got questions?</div>
      <p className="text-gray-600">
        You can find frequently asked questions and answers on our{" "}
        <Link
          href="/customer-service"
          className="text-blue-600 hover:underline"
        >
          Customer Service
        </Link>{" "}
        page.
      </p>
    </footer>
  );
}
