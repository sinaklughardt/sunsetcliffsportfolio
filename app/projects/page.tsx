import OurProjects from "../portfolio"
import Link from "next/link";
import { Fjalla_One } from "next/font/google"
import sunset from "../Media/sunset.jpeg"
import Image from "next/image";

const fjalla = Fjalla_One({
  weight: "400",
  subsets: ["latin"],
})


export default function Home() {
  return <div>
            <div className="h-[300px] place-content-center text-center ">
            <div className={`${fjalla.className} text-5xl`}>OUR PROJECTS</div>
        </div>
      <div className="py-10 bg-[#2F3B4A]">
    <OurProjects />
    </div>
  </div>
}
