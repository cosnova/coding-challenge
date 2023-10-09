import Image from "next/image"
import Link from "next/link"

export const NavBar = () => {
    return (
        <nav className="flex
            items-center
            justify-between
            bg-height
            bg-white
            w-4/5 p-4">
            <Image src="https://www.cosnova.com/svg/cosnova-logo-carnal.svg" alt="logo" height="60" width="200"/>
            <Link href={"/list"} className="
                text-cosnova-red
                font-bold
                hover:underline
                text-xl">
                    Products
            </Link>
        </nav>
    )
}