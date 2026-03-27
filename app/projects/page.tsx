import OurProjects from "../portfolio"
import { Fjalla_One } from "next/font/google"
import Link from "next/link";

const fjalla = Fjalla_One({
  weight: "400",
  subsets: ["latin"],
})


export default function Home() {
  return <div className="bg-gradient-to-r from-[#000000] to-[#002147]">
            <div className="h-80 place-content-center text-center">
            <div className={`${fjalla.className} text-5xl`}>OUR PROJECTS</div>
        </div>
      <div className="py-10 bg-[#2F3B4A] lg:pb-20">
    <OurProjects />
    </div>
    <div className={`${fjalla.className} h-80 place-content-center`}>
      <div className="lg:w-300 mx-4 lg:mx-auto justify-items-center">
      <div className="md:flex justify-items-center ">
      <div className="md:w-3/4 text-5xl text-center md:text-left">READY TO GET THE SITE YOU ALWAYS WANTED?</div>
      <div className="md:w-1/4">
        <Link href="/contact">
      <button className="mt-5 box-border bg-gray-200 text-gray-900 hover:bg-[#00b2b8] rounded-full border rounded-base shadow-xs px-5 py-2.5 border-rounded">GET STARTED</button>
      </Link></div>
      </div>
</div>
       </div>

  </div>
}
