import React from 'react'
import Link from 'next/link'
import logo from "../Media/Sunset cliffs.png"
import Image from 'next/image'
import { Fjalla_One } from "next/font/google"

const fjalla = Fjalla_One({
  weight: "400",
  subsets: ["latin"],
})



export function Header() {
  return (
    <>
    <div className={`${fjalla.className} antialiased flex justify-between mx-auto  md:pr-4 md:pl-4`}>
      <div className="flex items-center space-x-5" id="navbar-default">
        <Link href="/">
        <Image src={logo} alt="logo" width={200} height={300} className="rounded h-[80px] w-[80px]"/>
        </Link>
          </div>
      <ul className="flex items-center space-x-5 ml-auto mask-t-from-50% ">
        <li>
          <Link href="/" >HOME</Link>
        </li>
        <li>
          <Link href="/projects">PROJECTS</Link>
        </li>
        <li>
          <Link href="/aboutus">ABOUT US</Link>
        </li>
        <li>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
    </>
  )
}
