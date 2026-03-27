import { Fjalla_One } from "next/font/google"
import sunset from "../Media/sunset.jpeg"
import sinaprofile from "../Media/sina.jpg"
import Image from "next/image";


const fjalla = Fjalla_One({
  weight: "400",
  subsets: ["latin"],
})

export default function Home() {
  return <div className="bg-gradient-to-r min-h-screen from-[#000000] to-[#002147] pb-40">
            <div className="h-80 place-content-center text-center ">
            <div className={`${fjalla.className} text-5xl`}>MEET THE TEAM</div>
        </div>
        <div className="h-100 text-center max-w-300 mx-auto">
          <div className="md:grid md:grid-cols-3 md:gap-5 ">
{/*
            Sinas Card */}
            <div className="mb-5 md:mb-0 h-full text-center rounded-lg w-80  py-5 place-self-center">
                    <div className="flex justify-center">
      <div className="h-60 w-60">
              <Image src={sinaprofile} alt="sina profile pic" className="h-full w-full object-cover rounded-full"/>
              </div>
              </div>
              <p className="mb-5 mt-10 text-3xl">Sina Klughardt</p>
              <p>Web Design, Full Stack Web Developer</p>
              </div>

{/* Kyles Card */}
            <div className="mb-5 p-5 md:mb-0 h-full text-center  rounded-lg w-80  py-5  place-self-center">
                    <div className="flex justify-center">
      <div className="h-60 w-60">
              <Image src={sunset} alt="sina profile pic" className="h-full w-full object-cover rounded-full"/>
              </div>
              </div>
              <p className="mb-5 mt-10 text-3xl">Kyle Clarke</p>
              <p>Full Stack Web Developer</p>
              </div>

{/* Lisas Card */}
            <div className="mb-5 md:mb-0 h-full text-center rounded-lg w-80  py-5 place-self-center">
                    <div className="flex justify-center">
      <div className="h-60 w-60">
              <Image src={sunset} alt="sina profile pic" className="h-full w-full object-cover rounded-full"/>
              </div>
              </div>
              <p className="mb-5 mt-10 text-3xl">Lisa Gloff</p>
              <p>Client Outreach & Developement</p>
              </div>
              <div className="border-4 border-red-500"></div>

          </div>
        </div>
  </div>
}
