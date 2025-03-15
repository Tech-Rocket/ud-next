import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="p-5">
        <h1>Official Homepage</h1>
      </div>

      <p>
        <Link href="/meals">Meals</Link>
      </p>
      <p>
        <Link href="/meals/share">Share Meals</Link>
      </p>
      <p>
        <Link href="/community">Community</Link>
      </p>
    </>
  );
}
