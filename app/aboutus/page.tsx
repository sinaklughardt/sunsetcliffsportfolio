import { Fjalla_One } from "next/font/google"
import sunset from "../Media/sunset.jpeg"
import Image from "next/image";

const fjalla = Fjalla_One({
  weight: "400",
  subsets: ["latin"],
})

export default function Home() {
  return <div>
            <div className="h-[300px] place-content-center text-center">
            <div className={`${fjalla.className} text-5xl`}>ABOUT US</div>
        </div>
        <div className="h-[500px] bg-[#2F3B4A] place-content-center text-center">fun fun fun our story</div>
        <div className="h-[300px] place-content-center text-center">and much more fun maybe about us individually</div>
  </div>
}
