import React from 'react'
import Link from 'next/link'
import logo from "../Media/Sunset cliffs.png"
import Image from 'next/image'



export function Header() {
  return (
    <>
    <div className="flex justify-between mx-auto  md:pr-4 md:pl-4">
      <div className="flex items-center space-x-5" id="navbar-default">
        <Link href="/">
        <Image src={logo} alt="logo" width={200} height={300} className="rounded h-[80px] w-[80px]"/>
        </Link>
          </div>
      <ul className="flex items-center space-x-5 ml-auto mask-t-from-50% ">
        <li>
          <Link href="/" >Home</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/aboutus">About Us</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
    </>
  )
}
