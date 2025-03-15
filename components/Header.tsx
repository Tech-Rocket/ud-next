"use client";

import Link from "next/link";
import HeaderLogo from "@/assets/logo.png";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Specify weights you need
  display: "swap",
});

export default function Header() {
  const pathname = usePathname();

  console.log("current pathname:", pathname);
  return (
    <header
      className={`${poppins.className} flex items-center justify-between py-8 px-[1rem] md:px-[10%]`}
    >
      <Link
        href="/"
        className="text-3xl font-bold flex gap-5 items-center tracking-wide"
      >
        <img src={HeaderLogo.src} alt="header logo" className="w-18 h-18" />
        NextLevel Food
      </Link>

      <nav className="">
        <ul className="list-none m-0 p-0 flex gap-[1.5rem] font-[1.5rem]">
          <li
            className={` duration-200 transform  border-white text-[#ddd6cb] py-2 font-bold px-4 ${
              pathname === "/meals" ? "border  rounded-sm" : ""
            }`}
          >
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li
            className={` duration-200 transform  text-[#ddd6cb] py-2 font-bold px-4 ${
              pathname === "/community" ? " border border-white rounded-sm" : ""
            }`}
          >
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
