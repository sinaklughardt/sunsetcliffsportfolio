"use client"
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Fjalla_One } from "next/font/google"


  const fjalla = Fjalla_One({
  weight: "400",
  subsets: ["latin"],
})

export default function ContactMe() {
  const [status, setStatus] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      message: message,
      time: new Date().toLocaleString(), // Send timestamp
    };

    emailjs
      .send(
        "service_gd1cipq", // Replace with your EmailJS service ID
        "template_4qnt63k", // Replace with your EmailJS template ID
        templateParams,
        "gDiXouGrRjZjEq_N2" // Replace with your EmailJS public key
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
      })
      .catch((error) => {
        setStatus("Failed to send message. Try again.");
        console.error("EmailJS Error:", error);
      });
  };


    return (
        <>
 <div className="md:flex justify-center text-white pb-20 pt-10">

    <div className="md:m-5">
    <form action="#" method="POST" className="px-6 md:pb-24 sm:pb-32 lg:px-8 rounded-lg border-gray-200 m-4 py-4 shadow md:m-0 md:py-0">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="block text-sm/6 inline-flex">
                <p className="font-semibold ">Name</p>
                <p className="ml-2 text-gray-300">(required)</p>

                </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>

              <label htmlFor="first-name" className="block text-sm/6 font-semibold ">
                First Name
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900  outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm/6 font-semibold ">
                Last name
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm/6 inline-flex">
                <p className="font-semibold">Email</p>
                <p className="ml-2 ">(required)</p>

                </label>
                <div className="mt-2.5">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm/6 font-semibold">
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    id="phone-number"
                    name="phone-number"
                    type="tel"
                    autoComplete="tel"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm/6 inline-flex">
                <p className="font-semibold">Message</p>
                <p className="ml-2 ">(required)</p>

                </label>
                <div className="mt-2.5">
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1  "
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                onClick={sendEmail}
                type="submit"
                className={`${fjalla.className} antialiased mt-5 mr-5 box-border bg-gray-200 text-gray-900 hover:bg-[#00b2b8] rounded-full border rounded-base shadow-xs px-4 py-2.5 border-rounded`}
              >
                Send message
              </button>
            </div>
          </div>
        </form>
    </div>
</div>
        </>
    )
}
