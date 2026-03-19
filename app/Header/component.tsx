"use client"
import Link from 'next/link'
import logo from "../Media/Sunset cliffs.png"
import Image from 'next/image'
import { Fjalla_One } from "next/font/google"
import { usePathname } from 'next/navigation'

const fjalla = Fjalla_One({
  weight: "400",
  subsets: ["latin"],
})



export function Header() {
    const links = [
    { href: "/", label: "HOME" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/aboutus", label: "ABOUT US" },
    { href: "/contact", label: "CONTACT" },
  ]
  const pathname = usePathname()

  return (
    <>
    <div className={`${fjalla.className} antialiased flex justify-between mx-auto  md:pr-4 md:pl-4`}>
      <div className="flex items-center space-x-5" id="navbar-default">
        <Link href="/">
        <Image src={logo} alt="logo" width={200} height={300} className="rounded h-[80px] w-[80px]"/>
        </Link>
          </div>



    <ul className="flex items-center space-x-5 ml-auto mask-t-from-50% ">
      {links.map((link) => {
        const isActive = pathname === link.href
        return (
          <li
            key={link.href}
            className={`hover:underline hover:decoration-[#00CEC8] hover:decoration-3 hover:underline-offset-[8px]
              ${isActive ? "underline decoration-[#00CEC8] decoration-3 underline-offset-[8px]" : ""}`}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        )
      })}
    </ul>

    </div>
    </>
  )
}
