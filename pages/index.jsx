import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">School Information Portal</h1>
      <div className="space-x-4">
        <Link
          href="/addSchool"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg"
        >
          Add School
        </Link>
        <Link
          href="/showSchool"
          className="bg-green-500 text-white px-6 py-3 rounded-lg"
        >
          Show Schools
        </Link>
      </div>
    </div>
  );
}
