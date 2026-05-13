import { Murecho } from "next/font/google"

const fjalla = Murecho({
  weight: "400",
  subsets: ["latin"],
})

export function Footer() {
    return (
        <>
        <div className="flex pl-10 bg-[#fcfcff] text-gray-700 pt-5 pb-5 justify-center">
            <div className="w-300 ">
            <p  className={`${fjalla.className} antialiased text-lg mb-1.25`}>CONTACT INFORMATION</p>
            <p >✉️ hello@sunsetcliffsweb.com</p>
            <p className="pb-2.5">📞 619 786 1789</p>
            <p className="md:text-end">Sunset Cliffs Web Design © Copyright 2026</p>
</div>

</div>

        </>
    )
}
