import { Murecho } from "next/font/google"
import ContactMe from "./component"

const fjalla = Murecho({
  weight: "400",
  subsets: ["latin"],
})

export default function Home() {
  return <div>

            <div className="h-[300px] place-content-center text-center bg-[#4f7b86]">
            <div className={`${fjalla.className} text-5xl`}>CONTACT</div>
        </div>
        <div className="bg-[#fcfcff]  ">
  < ContactMe /></div>
  </div>
}
