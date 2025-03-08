import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="p-5">
        <h1>Official Homepage</h1>
        <p className="mt-2">
          <Link href="/about" className="border-2 border-black  py-2 px-3">
            Link to the about page
          </Link>
        </p>
      </div>
    </>
  );
}
