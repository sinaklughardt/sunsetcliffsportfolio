import Link from "next/link";
import { Fjalla_One } from "next/font/google"
import sunset from "../Media/sunset.jpeg"
import Image from "next/image";

const fjalla = Fjalla_One({
  weight: "400",
  subsets: ["latin"],
})

export default function Pricing() {
    return (
        <>
        <div className="h-[300px] place-content-center text-center bg-[#2F3B4A] ">
            <div className={`${fjalla.className} text-5xl`}>PRICING</div>
        </div>
        <div className=" bg-gradient-to-r from-[#000000] to-[#002147] pb-40">
        <div className="text-white text-center pt-5 mb-15">Please let us know if you have any questions about pricing <Link className="underline" href="/contact">here</Link></div>

        <div className="max-w-[1000px] w-full mx-auto px-6 mb-20 ">
        <div className="md:grid md:grid-cols-2 justify-items-center gap-4py-30">
            <div className="mb-5 md:mb-0 w-[300px] min-h-[500px] text-center py-10 border border-sky-900 rounded-lg">
                <h3 className={`${fjalla.className} text-3xl pb-3 `}>LUMP SUM</h3>
                <div className="text-lg leading-10 mb-10">
                <p>✔ here</p>
                <p>✔ are</p>
                <p>✔ the</p>
                <p>✔ perks</p>
                <p>✖ and</p>
                <p>✖ downsides</p>
        </div>
 <div className={`${fjalla.className} text-white text-5xl`}>$3500</div>
                <button className={`${fjalla.className} mt-2 box-border bg-gray-200 text-gray-900 hover:bg-[#00b2b8] rounded-full border rounded-base shadow-xs px-4 py-2.5 border-rounded`}>GET STARTED</button>
            </div>
            <div className="border border-white min-h-[500px] shadow-lg shadow-white/50 rounded-lg w-[300px]">
            <div className="py-10 text-center">
                <h3 className={`${fjalla.className} text-3xl pb-3`}>MONTHLY</h3>
                <div className="text-lg leading-10 mb-10">
                <p>✔ here</p>
                <p>✔ are</p>
                <p>✔ the</p>
                <p>✔ perks</p>
                <p>✖ and</p>
                <p>✖ downsides</p>
                </div>
                <div className={`${fjalla.className} text-white text-5xl`}>$150</div>
                   <button className={`${fjalla.className} mt-2 box-border bg-gray-200 text-gray-900 hover:bg-[#00b2b8] rounded-full border rounded-base shadow-xs px-4 py-2.5 border-rounded `}>GET STARTED</button>
            </div>
            </div>
</div>
        </div>
        </div>
        </>
    )
}
