import Link from "next/link";
import Image from "next/image";
import HeaderLogo from "@/assets/logo.png";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-8 px-[1rem] md:px-[10%]">
      <Link href="/" className="text-2xl font-bold flex gap-5 items-center ">
        <img src={HeaderLogo.src} alt="header logo" className="w-18 h-18" />
        NextLevel Food
      </Link>

      <nav>
        <ul className="list-none m-0 p-0 flex gap-[1.5rem] font-[1.5rem]">
          <li className="text-[#ddd6cb] font-bold py-[0.5rem] px-4 rounded-md">
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
