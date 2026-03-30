'use client'

import NavBar from "../navbar";
import Link from "next/link";
import useReveal from "../../hooks/reveal";

const contacts = [
  {
    key: "whatsapp",
    title: "WhatsApp",
    link: "https://wa.me/9876634626",
  },
  {
    key: "instagram",
    title: "Instagram",
    link: "https://instagram.com/manthan.webdev",
  },
];

export default function About(){

  const baseDelay = 120

  return(
    <div className="bg-[#F5EFE6] min-h-screen w-full text-center">
      <NavBar/>

      {/* Title */}
      <h1
       
        className="opacity-0 animate-fadeInUp text-3xl md:text-4xl font-bold font-fraunces mt-10 text-[#3B1F0E]"
      >
        About
      </h1>

      {/* About box */}
      <div
        
        className="mt-12 font-bold italic mx-auto max-w-2xl px-8 py-10 rounded-3xl bg-white/30 backdrop-blur-lg border border-white/40 shadow-md hover:shadow-xl transition-all duration-300"
      >
        <p
          style={{ animationDelay: `${baseDelay}ms` }}
          className="opacity-0 animate-fadeInUp text-sm md:text-base leading-relaxed text-[#5C3D2E] font-lato"
        >
          Brew & Co. isn’t just about coffee — it’s about the ritual, the craft, and the moments in between.
        </p>

        <p
          style={{ animationDelay: `${baseDelay*2}ms` }}
          className="opacity-0 animate-fadeInUp mt-4 text-sm md:text-base leading-relaxed text-[#5C3D2E] font-lato"
        >
          Born from a passion for precision and flavor, Brew & Co. was created to bring specialty café experiences into everyday life.
        </p>

        <p
          style={{ animationDelay: `${baseDelay*3}ms` }}
          className="opacity-0 animate-fadeInUp mt-4 text-sm md:text-base leading-relaxed text-[#5C3D2E] font-lato"
        >
          We partner with ethical farms, select only high-quality beans, and roast them with intention to unlock their full character.
        </p>
      </div>

      {/* Contact Title */}
      <h1
        
        className="opacity-0 animate-fadeInUp mt-20 mb-12 text-3xl md:text-4xl text-[#3B1F0E] font-fraunces font-bold"
      >
        Contact
      </h1>

      {/* Contacts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-6 pb-16">
        {contacts.map((contact, i) => (
          <div
            key={contact.key}
            
            style={{ transitionDelay: `${i * 150}ms` }}
            className="rounded-3xl bg-white/30 backdrop-blur-lg border border-white/40 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-10"
          >

            <h2
              style={{ animationDelay: `${baseDelay}ms` }}
              className="opacity-0 animate-fadeInUp text-2xl font-fraunces font-bold text-[#3B1F0E]"
            >
              {contact.title}
            </h2>

            <Link
              href={contact.link}
              target="_blank"
              style={{ animationDelay: `${baseDelay*2}ms` }}
              className="inline-block opacity-0 animate-fadeInUp mt-8 px-8 py-3 bg-[#C8892A] rounded-xl text-[#FDF8F2] font-lato font-bold text-sm hover:bg-[#b37820] hover:scale-105 transition-all duration-300 shadow-sm"
            >
              Visit →
            </Link>

          </div>
        ))}
      </div>

    </div>
  );
}