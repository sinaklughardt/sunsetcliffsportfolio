import Image from "next/image";
import logo from "./Media/puter.png"
import { Fjalla_One } from "next/font/google"
import OurProjects from "./portfolio";
import Link from "next/link";

const fjalla = Fjalla_One({
  weight: "400",
  subsets: ["latin"],
})

export default function Home() {


  return (
<div className="bg-gradient-to-r from-[#000000] to-[#002147]">

  <div className="md:flex h-auto justify-center pt-15 pb-10 md:py-30 bg-[#2F3B4A]">
    <div className="md:w-1/2 max-w-[600px] mx-5 justify-end flex items-center">
    <div>

    <div className={`${fjalla.className} antialiased`}>
      <p className="text-[#00b2b8] mb-2">Handcrafted unique websites</p>
      <h1 className="text-6xl">CREATING WEBSITES THAT WORK FOR YOU</h1>
      </div>
      <p className="text-xl">100% handcrafted and designed to the needs of your business</p>
      <div className={`${fjalla.className} antialiased flex justify-start`}>
        <Link href="/contact">
        <button className="mt-5 mr-5 box-border bg-gray-200 text-gray-900 hover:bg-[#00b2b8] rounded-full border rounded-base shadow-xs px-4 py-2.5 border-rounded">GET STARTED</button>
        </Link>
        <Link href="/aboutus">
        <button className="mt-5 box-border hover:border-[#00b2b8] hover:text-[#00b2b8] rounded-full hover:bg-gray-900 border rounded-base shadow-xs px-4 py-2.5  border-rounded">ABOUT US</button>
        </Link>
      </div>
      </div>
      </div>
    <div className="md:w-1/2 pl-20 justify-start flex max-w-[600px]">
    <Image src={logo} alt="sunset" width={800} height={200} className="w-[300px] h-[300px]"/>
    </div>

  </div>
  <div className="text-center max-w-[600px] mx-auto my-30 mt-20 ">
    <p className={`${fjalla.className} text-[#00b2b8] mb-2`}>OUR SERVICES</p>
    <h1 className={`${fjalla.className} antialiased text-5xl`}>LET US HANDLE YOUR DIGITAL STRATEGY</h1>
<div className="">We'll take care of online so you can stay focused on running your business</div>
<Link href="/contact">
  <button className={`${fjalla.className} antialiased hover:border-[#00b2b8] hover:text-[#00b2b8] mt-5 box-border rounded-full border rounded-base shadow-xs px-4 py-2.5 border-rounded`}>GET STARTED</button>
</Link>
</div>

{/* Portfolio */}
<div className="bg-[#2F3B4A] py-30">
<OurProjects />
</div>
            <div className={`${fjalla.className} h-80 place-content-center`}>
      <div className="lg:max-w-300 mx-4 lg:mx-auto justify-items-center">
      <div className="md:flex justify-items-center px-4">
      <div className="md:w-3/4 text-5xl text-center md:text-left">READY TO GET THE SITE YOU ALWAYS WANTED?</div>
      <div className="md:w-1/4">
        <Link href="/contact">
        <div className="flex justify-center">
      <button className=" box-border bg-gray-200 text-gray-900 hover:bg-[#00b2b8] rounded-full border rounded-base shadow-xs px-5 py-2.5 border-rounded">GET IN CONTACT</button>
      </div></Link></div>
      </div>
</div>
       </div>

</div>
  );
}
