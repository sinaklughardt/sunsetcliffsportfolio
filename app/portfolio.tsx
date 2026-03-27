import Link from "next/link";
import { Fjalla_One } from "next/font/google"
import sunset from "./Media/sunset.jpeg"
import Image from "next/image";
import obb from "./Media/oceanbeachbrands.png"
import yogawebsite from "./Media/yogawebsite.png"
import agingsolutions from "./Media/agingsolutons.png"

const fjalla = Fjalla_One({
  weight: "400",
  subsets: ["latin"],
})

export default function OurProjects() {
    return (
        <>
    <div className="lg:w-[1000px] mx-auto pb-20 ">

  <div className="lg:place-items-start text-center">
    <p className={`${fjalla.className} text-[#00b2b8] mb-2`}>PORTFOLIO</p>
  <div className={`${fjalla.className} antialiased justify-end text-5xl u`}>HIGHLIGHTS FROM OUR WORK
    </div>


    </div>
  <div className="place-items-center">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">

  {/* Card 1 */}
  <Link href="https://agingsolutions.com/">
  <div className="text-white py-10 text-center rounded-lg w-full h-75 w-full mb-10 lg:mb-0">
    <Image
      src={agingsolutions}
      alt="aging solutions"
      width={800}
      height={200}
      className="w-full h-full object-cover mb-3"
    />
    <div className={`${fjalla.className} text-xl font-bold pt-2`}>
      AGING SOLUTIONS INC.
    </div>
    <div className="pb-3">Care Management</div>
    <div className="text-sm underline">
      agingsolutions.com
    </div>
  </div>
  </Link>

  {/* Card 2 */}
  <Link href="https://oceanbeachbrands.com/">
  <div className="text-white py-10 text-center rounded-lg h-75 w-full mb-10 lg:mb-0">
    <Image
      src={obb}
      alt="project image"
      width={800}
      height={200}
      className="w-full h-full object-cover mb-3"
    />
    <div className={`${fjalla.className} text-xl font-bold pt-2`}>
      OCEAN BEACH BRANDS
    </div>
    <div className="pb-3">E-Commerce Shop</div>
    <div className="text-sm underline">
      oceanbeachbrands.com
    </div>
  </div>
  </Link>

  {/* Card 3 */}
  <Link href="https://sinaklughardt.com/">
  <div className="text-white py-10 text-center rounded-lg w-full h-75 mb-10 lg:mb-0">
    <Image
      src={yogawebsite}
      alt="project image"
      width={800}
      height={200}
      className="w-full h-full object-cover mb-3"
    />
    <div className={`${fjalla.className} text-xl font-bold pt-2`}>
      IN FLUX YOGA
    </div>
    <div className="pb-3">Personal Yoga Website</div>
    <div className="text-sm underline">sinaklughardt.com</div>
  </div>
  </Link>

</div>
</div>
</div>
    </>
    )
}
