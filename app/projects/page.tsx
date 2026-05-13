import OurProjects from "../portfolio"
import { Murecho } from "next/font/google"
import Link from "next/link";

const fjalla = Murecho({
  weight: "400",
  subsets: ["latin"],
})


export default function Home() {
  return <div className="bg-[#fcfcff] text-[#4f7b86]">
            <div className="h-80 place-content-center text-center">
            <div className={`${fjalla.className} text-5xl`}>OUR PROJECTS</div>
        </div>
      <div className="py-10 bg-[#4f7b86] text-[#fcfcff] max-w-300 mx-auto lg:pb-20">
    <OurProjects />
    </div>
    <div className={`${fjalla.className} h-80 place-content-center `}>
      <div className="lg:w-300 mx-4 lg:mx-auto justify-items-center px-4">
      <div className="md:flex justify-items-center ">
      <div className="md:w-3/4 text-5xl text-center md:text-left">READY TO GET THE SITE YOU ALWAYS WANTED?</div>
      <div className="md:w-1/4">
        <Link href="/contact">
        <div className="flex justify-center">
      <button className="mt-5 mr-5 box-border bg-[#00b2b8] hover:bg-white hover:text-[#00b2b8] hover:border text-white rounded-full rounded-base shadow-xs px-4 py-2.5 border-rounded font-bold">GET STARTED</button>
      </div></Link></div>
      </div>
</div>
       </div>

  </div>
}
