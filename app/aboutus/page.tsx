import { Fjalla_One } from "next/font/google"
import sunset from "../Media/sunset.jpeg"
import sinaprofile from "../Media/sina.jpg"
import kyleprofile from "../Media/forest_profile_pic.jpg"
import family from "../Media/family.png"
import Image from "next/image";


const fjalla = Fjalla_One({
  weight: "400",
  subsets: ["latin"],
})

export default function Home() {
  return <div className="bg-gradient-to-r from-[#000000] to-[#002147] pb-40">
    <div className={`${fjalla.className} text-5xl text-center pt-20 md:pt-30`}>ABOUT US</div>
    <div className="max-w-300 h-auto text-left lg:pt-20 pt-10 lg:grid lg:grid-cols-2 mx-auto">
      <div className="flex justify-center">
        <div className="h-80 w-100 lg:h-100 lg:w-130 mx-4 place-content-center">
    <Image src={family} alt="family" />
    </div>
    </div>
    <div className="max-w-130 mx-auto justify-end text-center px-4 md:px-0 text-start flex text-base/7.5">
    We're a family business based in San Diego. We started Sunset Cliffs Digital Solutions out of a passion for working with small businesses and helping them grow. We do that by designing eye-catching, performant websites engineered to establish a strong online presence and brand for any business.
    <br /><br />
    Whatever the needs of your business or organization, our team brings a diverse skillset to ensure your website becomes a key pillar of your strategy.
    <br /><br />
    Between us, we have over a decade of experience delivering high-performing digital solutions with the latest technologies for companies of all sizes, from big tech companies like Amazon and Twitch to small businesses.
    </div>

    </div>
            <div className="mb-20 mt-30 lg:mt-40 mx-auto text-center">
            <div className={`${fjalla.className} text-5xl`}>MEET THE TEAM</div>
        </div>
        <div className="text-center max-w-300 mx-auto ">
          <div className="md:grid md:grid-cols-3 md:gap-5 ">

{/*
            Sinas Card */}
            <div className="mx-auto mb-5 md:mb-0 h-full text-center rounded-lg w-80  py-5 place-self-center ">
                    <div className="flex justify-center">
      <div className="h-60 w-60">
              <Image src={sinaprofile} alt="sina profile pic" className="h-full w-full object-cover rounded-full"/>
              </div>
              </div>
              <p className="mb-2.5 mt-10 text-3xl">Sina Klughardt<p className="text-base text-gray-300">they/them</p></p>
              <p>Web Design, Full Stack Web Developer</p>
              </div>

{/* Kyles Card */}
            <div className="mx-auto mb-5 p-5 md:mb-0 h-full text-center  rounded-lg w-80  py-5  place-self-center">
                    <div className="flex justify-center">
      <div className="h-60 w-60">
              <Image src={kyleprofile} alt="kyle profile pic" className="h-full w-full object-cover rounded-full"/>
              </div>
              </div>
              <p className="mb-2.5 mt-10 text-3xl">Kyle Clarke <p className="text-base text-gray-300">he/him</p></p>
              <p>Full Stack Web Developer</p>
              </div>

{/* Lisas Card */}
            <div className="mx-auto mb-5 md:mb-0 h-full text-center rounded-lg w-80  py-5 place-self-center">
                    <div className="flex justify-center">
      <div className="h-60 w-60">
              <Image src={sunset} alt="sina profile pic" className="h-full w-full object-cover rounded-full"/>
              </div>
              </div>
              <p className="mb-2.5 mt-10 text-3xl">Lisa Gloff <p className="text-base text-gray-300">she/her</p></p>
              <p>Client Outreach & Developement</p>
              </div>

          </div>
        </div>
  </div>
}
