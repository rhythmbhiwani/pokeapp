import Image from "next/image";
import Logo from "../../public/logo.png";
import Link from "next/link";

function Header() {
  return (
    <nav className="">
      <Link
        href="/"
        className="py-5 px-2 flex flex-row items-center justify-center"
      >
        <Image width={200} src={Logo} alt="Logo" />
      </Link>
    </nav>
  );
}

export default Header;
