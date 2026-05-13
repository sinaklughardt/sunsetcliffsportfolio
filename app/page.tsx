import Image from "next/image";
import logo from "./Media/puter.svg"
import { Murecho } from "next/font/google"
import OurProjects from "./portfolio";
import Link from "next/link";

const fjalla = Murecho({
  weight: "400",
  subsets: ["latin"],
})

export default function Home() {


  return (
<div className="bg-[#fcfcff]">

  <div className="md:flex h-auto justify-center pt-15 md:py-30 text-[#4f7b86]">
    <div className="md:w-1/2 max-w-[600px] mx-5 justify-end flex items-center">
    <div>

    <div className={`${fjalla.className} antialiased`}>
      <p className="text-[#00b2b8] mb-2.5 font-bold ">Handcrafted unique websites</p>
      <h1 className="text-6xl">CREATING WEBSITES THAT WORK FOR YOU</h1>
      </div>
      <p className="text-xl text-gray-700">100% handcrafted and designed to the needs of your business</p>
      <div className={`${fjalla.className} antialiased flex justify-start`}>
        <Link href="/contact">
        <button className="mt-5 mr-5 box-border bg-[#00b2b8] hover:bg-white hover:text-[#00b2b8] hover:border text-white rounded-full rounded-base shadow-xs px-4 py-2.5 border-rounded font-bold">GET STARTED</button>
        </Link>
        <Link href="/aboutus">
        <button className="mt-5 box-border   hover:text-[#00b2b8] hover:border rounded-full font-bold border rounded-base shadow-xs px-4 py-2.5  border-rounded">ABOUT US</button>
        </Link>
      </div>
      </div>
      </div>
    <div className="md:w-1/2 pl-20 justify-start flex max-w-[600px]">
    <Image src={logo} alt="sunset" width={800} height={200} className="w-[400px] h-[300px] rounded-full "/>
    </div>

  </div>

  <div className="bg-[#4f7b86] text-[#fcfcff] max-w-300 mx-auto ">
  <div className="text-center max-w-[600px] mx-auto text-white py-20">
    <p className={`${fjalla.className} text-[#00b2b8] mb-2.5`}>OUR SERVICES</p>
    <h1 className={`${fjalla.className} antialiased text-5xl  mb-2.5`}>LET US HANDLE YOUR DIGITAL STRATEGY</h1>
<div className="">We'll take care of online so you can stay focused on running your business</div>
<Link href="/contact">
  <button className={`${fjalla.className} hover:border-[#00b2b8] mt-5 box-border bg-gray-200 text-[#4f7b86] hover:bg-[#00b2b8] hover:text-white rounded-full rounded-base shadow-xs px-5 py-2.5 border-rounded font-bold`}>GET STARTED</button>
</Link>
</div></div>

{/* Portfolio */}
<div className="bg-[#fcfcff] text-[#4f7b86] py-30">
<OurProjects />
</div>
<div className="bg-[#4f7b86] text-[#fcfcff] max-w-300 mx-auto ">
            <div className={`${fjalla.className} h-80 place-content-center`}>
      <div className="lg:max-w-300 mx-4 lg:mx-auto justify-items-center text-white">
      <div className="md:flex justify-items-center px-4">
      <div className="md:w-3/4 text-5xl text-center md:text-left">READY TO GET THE SITE YOU ALWAYS WANTED?</div>
      <div className="md:w-1/4">
        <Link href="/contact">
        <div className="flex justify-center">
      <button className="mt-5 md:mt-0 box-border bg-gray-200 text-[#4f7b86] hover:bg-[#00b2b8] hover:text-white rounded-full rounded-base shadow-xs px-5 py-2.5 border-rounded">GET IN CONTACT</button>
      </div></Link></div>
      </div>
</div></div>
       </div>

</div>
  );
}
