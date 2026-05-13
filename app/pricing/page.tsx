import Link from "next/link";
import { Murecho } from "next/font/google"
import sunset from "../Media/sunset.jpeg"
import Image from "next/image";

const fjalla = Murecho({
  weight: "400",
  subsets: ["latin"],
})

export default function Pricing() {
    return (
        <>
        <div className="h-[300px] place-content-center text-center bg-[#4f7b86] text-[#fcfcff]">
            <div className={`${fjalla.className} text-5xl`}>PRICING</div>
        </div>
        <div className=" bg-[#fcfcff] pb-25 pt-10">
        <div className="text-center text-gray-700 mb-15">Please let us know if you have any questions about pricing <Link className="underline" href="/contact">here</Link></div>

        <div className="max-w-300 w-full mx-auto px-7.5 ">
        <div className="md:grid md:grid-cols-2 justify-items-center">
            <div className="mx-auto mb-5 md:mb-0 w-[300px] text-[#4f7b86] min-h-[500px] text-center py-10 bg-gray-100 rounded-lg">
                <h3 className={`${fjalla.className} text-3xl pb-3 `}>LUMP SUM</h3>
                <div className="text-lg leading-10 mb-10">
                <p>✔ Design and Developement</p>
                <p >✔ $25/mo Hosting</p>
                <p>✔ +$120 fee Per Page After 5</p>
                <p>✔ $60/mo Edits Add-on</p>
                <p>✔ +$200 to add a blog</p>
                <p className="">✖ Lifetime Updates</p>

        </div>
 <div className={`${fjalla.className}  text-5xl`}>$3500 <p className="text-sm">+$25/mo Hosting</p></div>
                <Link href="/contact">
                <button className={`${fjalla.className} mt-2.5 box-border bg-[#4f7b86] text-[#fcfcff] hover:bg-[#00b2b8] rounded-full border rounded-base shadow-xs px-4 py-2.5 border-rounded`}>GET STARTED</button>
            </Link>
            </div>

            <div className="bg-[#4f7b86] border border-white min-h-[500px] mx-auto shadow-lg rounded-lg w-[300px]">
            <div className="py-10 text-center">
                <h3 className={`${fjalla.className} text-3xl pb-3`}>MONTHLY</h3>
                <div className="text-lg leading-10 mb-10">
                <p>✔ Design and Developement</p>
                <p>✔ Includes Hosting</p>
                <p>✔ Includes Edits</p>
                <p>✔ +$120 fee Per Page After 5</p>
                <p>✔ +$200 to add a blog</p>
                <p>✔ Lifetime Updates</p>
                </div>
                <div className={`${fjalla.className} text-white text-5xl`}>$175<p className="text-sm text-gray-300">Per Month</p></div>
                <Link href="/contact">
                   <button className={`${fjalla.className} mt-5 box-border bg-[#00b2b8] text-white rounded-full rounded-base shadow-xs px-4 py-2.5 border-rounded font-bold hover:bg-white hover:text-[#00b2b8]`}>GET STARTED</button>
            </Link></div>
            </div>
</div>
        </div>

        </div>
        </>
    )
}
