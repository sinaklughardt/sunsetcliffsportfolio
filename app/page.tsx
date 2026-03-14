import Image from "next/image";
import logo from "./Media/puter.png"


export default function Home() {
  return (
<div>

  <div className="md:flex h-auto justify-center  pt-5">
    <div className="md:w-1/2 mx-5 justify-end flex ">
    <div className="mt-20">
      <h1 className="text-4xl">we are coding code</h1>
      <p>heres a short description on why you should hire us</p>
      </div>
      </div>
    <div className="md:w-1/2 mx-5 justify-start flex">
    <Image src={logo} alt="sunset" width={800} height={200} className="w-[300px] h-[300px]"/>
    </div>

  </div>
</div>
  );
}
