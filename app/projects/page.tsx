import OurProjects from "../portfolio"
import Link from "next/link";
import { Fjalla_One } from "next/font/google"

const fjalla = Fjalla_One({
  weight: "400",
  subsets: ["latin"],
})


export default function Home() {
  return <div className="bg-gradient-to-r from-[#000000] to-[#002147]">
            <div className="h-100 place-content-center text-center">
            <div className={`${fjalla.className} text-5xl`}>OUR PROJECTS</div>
        </div>
      <div className="py-10 bg-[#2F3B4A] pb-20">
    <OurProjects />
    </div>

  </div>
}
