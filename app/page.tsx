import Image from "next/image";
import logo from "./Media/puter.png"
import { Fjalla_One } from "next/font/google"
import OurProjects from "./portfolio";

const fjalla = Fjalla_One({
  weight: "400",
  subsets: ["latin"],
})

export default function Home() {


  return (
<div className="bg-gradient-to-r from-[#000000] to-[#002147]">

  <div className="md:flex h-auto justify-center py-30 bg-[#2F3B4A]">
    <div className="md:w-1/2 max-w-[600px] mx-5 justify-end flex items-center">
    <div>
    <div className={`${fjalla.className} antialiased`}>
      <h1 className="text-6xl">WE ARE CODING CODE</h1>
      </div>
      <p className="text-xl">heres a short description on why you should hire us</p>
      <div className={`${fjalla.className} antialiased flex justify-start`}>
        <button className="mt-5 mr-5 box-border bg-gray-200 text-gray-900 hover:bg-[#00b2b8] rounded-full border rounded-base shadow-xs px-4 py-2.5 border-rounded">GET STARTED</button>
        <button className="mt-5 box-border hover:border-[#00b2b8] hover:text-[#00b2b8] rounded-full hover:bg-gray-900 border rounded-base shadow-xs px-4 py-2.5  border-rounded">ABOUT US</button>
      </div>
      </div>
      </div>
    <div className="md:w-1/2 pl-20 justify-start flex max-w-[600px]">
    <Image src={logo} alt="sunset" width={800} height={200} className="w-[300px] h-[300px]"/>
    </div>

  </div>
  <div className="text-center max-w-[600px] mx-auto my-30 ">
    <h1 className={`${fjalla.className} antialiased mt-20 text-5xl`}>DON'T WORRY BE HAPPY</h1>
<div className="">never a single need to worry again because we will save your
  life and the lives of your grandchildren and neighbors.
  I hope you are readysjkdaljskjaskl</div>
  <button className={`${fjalla.className} antialiased hover:border-[#00b2b8] hover:text-[#00b2b8] mt-5 box-border rounded-full border rounded-base shadow-xs px-4 py-2.5 border-rounded`}>PRESS ME</button>
</div>

{/* Portfolio */}
<div className="bg-[#2F3B4A] py-30">
<OurProjects />
</div>

</div>
  );
}
