import Link from "next/link";
import Image from "next/image";
import HeaderLogo from "@/assets/logo.png";

export default function Header() {
  return (
    <header>
      <h1>Header Components </h1>
      <Link href="/">
        <img src={HeaderLogo.src} alt="header logo" width={20} height={20} />
        NextLevel Food
      </Link>

      <nav>
        <ul>
          <li>
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
