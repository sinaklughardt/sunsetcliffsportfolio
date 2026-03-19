import Link from "next/link";
import { Fjalla_One } from "next/font/google"
import sunset from "./Media/sunset.jpeg"
import Image from "next/image";

const fjalla = Fjalla_One({
  weight: "400",
  subsets: ["latin"],
})

export default function OurProjects() {
    return (
        <>
<div className="bg-gray-800 py-30">
    <div className="lg:w-[1000px] mx-auto">

  <div className="lg:place-items-start text-center">
    <p>PORTFOLIO</p>
  <div className={`${fjalla.className} antialiased justify-end text-5xl u`}>SOME OF THE WORK WE'VE DONE
    </div>


    <div className="">our proud collection of projects</div>
    </div>
  <div className="place-items-center">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">

  {/* Card 1 */}
  <div className="text-white py-10 text-center rounded-lg w-full max-w-[350px]">
    <Image
      src={sunset}
      alt="aging solutions"
      width={800}
      height={200}
      className="w-full h-[300px] object-cover mb-3"
    />
    <div className={`${fjalla.className} text-xl font-bold pt-2`}>
      AGING SOLUTIONS INC.
    </div>
    <div className="pb-3">Care management</div>
    <div className="text-sm underline">
      <Link href="https://agingsolutions.com/">agingsolution.com</Link>
    </div>
  </div>

  {/* Card 2 */}
  <div className="text-white py-10 text-center rounded-lg w-full max-w-[350px]">
    <Image
      src={sunset}
      alt="project image"
      width={800}
      height={200}
      className="w-full h-[300px] object-cover mb-3"
    />
    <div className={`${fjalla.className} text-xl font-bold pt-2`}>
      OCEAN BEACH BRANDS
    </div>
    <div className="pb-3">Online Shop</div>
    <div className="text-sm underline">
      <Link href="https://oceanbeachbrands.com/">oceanbeachbrands.com</Link>
    </div>
  </div>

  {/* Card 3 */}
  <div className="text-white py-10 text-center rounded-lg w-full max-w-[350px]">
    <Image
      src={sunset}
      alt="project image"
      width={800}
      height={200}
      className="w-full h-[300px] object-cover mb-3"
    />
    <div className={`${fjalla.className} text-xl font-bold pt-2`}>
      IN FLUX YOGA
    </div>
    <div className="pb-3">Personal Yoga Website</div>
    <div className="text-sm underline">
      <Link href="https://sinaklughardt.com/">sinaklughardt.com</Link>
    </div>
  </div>

</div>
</div>
</div>
</div>
    </>
    )
}
