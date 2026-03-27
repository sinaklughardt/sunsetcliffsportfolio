import { Fjalla_One } from "next/font/google"
import ContactMe from "./component"

const fjalla = Fjalla_One({
  weight: "400",
  subsets: ["latin"],
})

export default function Home() {
  return <div>

            <div className="h-[300px] place-content-center text-center bg-[#2F3B4A] ">
            <div className={`${fjalla.className} text-5xl`}>CONTACT</div>
        </div>
        <div className="bg-gradient-to-r from-[#000000] to-[#002147]">
  < ContactMe /></div>
  </div>
}
