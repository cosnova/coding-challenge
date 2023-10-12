import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
  return (
    <nav
      className="flex
            flex-col
            gap-6
            items-center
            justify-between
            bg-height
            bg-white
            w-4/5 p-4
            md:flex-row
            "
    >
      <Image
        src="https://www.cosnova.com/svg/cosnova-logo-carnal.svg"
        alt="logo"
        height="60"
        width="200"
      />
      <div className="flex gap-6">
        <Link
          href={"/"}
          className="
                text-cosnova-red
                font-bold
                hover:underline
                text-xl"
        >
          Home
        </Link>
        <Link
          href={"/list"}
          className="
                text-cosnova-red
                font-bold
                hover:underline
                text-xl"
        >
          Products
        </Link>
      </div>
    </nav>
  );
};
