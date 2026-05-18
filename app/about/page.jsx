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

function CoffeeBean({ className = "" }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Bean shape */}
      <path
        d="M60 15C38 15 20 34 20 60C20 86 38 105 60 105C82 105 100 86 100 60C100 34 82 15 60 15Z"
        fill="#6F4E37"
      />

      {/* Middle curve */}
      <path
        d="M62 20C48 35 45 55 52 72C57 84 55 95 48 103"
        stroke="#3E2723"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function About(){

  const baseDelay = 120

  return(
    <div className="relative scroll-smooth min-h-screen w-full pt-24 bg-gradient-to-br from-[#F7F1E8] to-[#EFE4D4]">
      <NavBar />
      <div className="absolute inset-0  pointer-events-none overflow-hidden">

  <div
    className="
      absolute
      top-[-120px]
      left-[-120px]
      w-[420px]
      h-[420px]
      rounded-full
      bg-[#C8892A]/20
      blur-[120px]
    "
  />

  <div
    className="
      absolute
      bottom-[-150px]
      right-[-100px]
      w-[350px]
      h-[350px]
      rounded-full
      bg-[#8C6B58]/20
      blur-[120px]
    "
  />

</div>
<div
  className="
    absolute inset-0
    pointer-events-none
    opacity-[0.03]
    bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
    bg-[size:70px_70px]
  "
/>
    <div className="flex flex-col">
    <div className="absolute inset-0 pointer-events-none">
  <CoffeeBean className="absolute top-28 left-10 md:w-12 md:h-12 w-6 h-6 opacity-20 animate-softBlink" />
  <CoffeeBean className="absolute top-40 right-20 w-8 h-8 opacity-10 rotate-[30deg] animate-softBlink [animation-delay:700ms]" />
  <CoffeeBean className="absolute bottom-72 left-2/3 md:h-8 md:w-8 w-5 h-5 opacity-20 -rotate-[15deg] animate-softBlink [animation-delay:300ms]" />
  <CoffeeBean className="absolute bottom-56 left-16 w-6 h-6 md:10 md:h-10 md:bottom-8 opacity-20 rotate-[45deg] animate-softBlink [animation-delay:900ms]" />
</div>
      {/* Title */}
      <h1
       
        className="opacity-0 mx-auto animate-fadeInUp text-4xl md:text-6xl uppercase italic font-bold font-fraunces mt-10 text-[#2A160D]"
      >
        About
      </h1>

      {/* About box */}
      <div
        
        className="mt-12 font-bold mx-auto max-w-2xl px-8 py-10 rounded-3xl bg-[#FFF8F2]/20 backdrop-blur-md border border-[#D9C9B8]/40 shadow-md hover:shadow-xl transition-all duration-300"
      >
        <p
          style={{ animationDelay: `${baseDelay}ms` }}
          className="opacity-0 animate-fadeInUp text-sm md:text-base leading-relaxed tracking-wide text-[#7C5A49] font-fraunces"
        >
          Brew & Co. isn’t just about coffee — it’s about the ritual, the craft, and the moments in between.
        </p>

        <p
          style={{ animationDelay: `${baseDelay*2}ms` }}
          className="opacity-0 animate-fadeInUp mt-4 text-sm md:text-base leading-relaxed leading-relaxed tracking-wide text-[#7C5A49] font-fraunces"
        >
          Born from a passion for precision and flavor, Brew & Co. was created to bring specialty café experiences into everyday life.
        </p>

        <p
          style={{ animationDelay: `${baseDelay*3}ms` }}
          className="opacity-0 animate-fadeInUp mt-4 text-sm md:text-base leading-relaxed leading-relaxed tracking-wide text-[#7C5A49] font-fraunces"
        >
          We partner with ethical farms, select only high-quality beans, and roast them with intention to unlock their full character.
        </p>
      </div>

      {/* Contact Title */}
      <h1
        
        className="opacity-0 animate-fadeInUp mt-20 mb-12 text-4xl md:text-6xl mx-auto tracking-wide text-[#2A160D] font-fraunces uppercase italic font-bold"
      >
        Contact
      </h1>

      {/* Contacts */}
<div className="w-full max-w-5xl mx-auto px-6 pb-16">
  <div className="flex flex-col gap-8">
    {contacts.map((contact, i) => (
      <div
        key={contact.key}
        style={{ transitionDelay: `${i * 150}ms` }}
        className="
          w-full
          rounded-3xl
          bg-[#FFF8F2]/20
          backdrop-blur-lg
          border border-[#D9C9B8]/40
          shadow-md
          hover:shadow-2xl
          hover:-translate-y-1
          transition-all duration-300
          px-10 py-12
        "
      >
        
        <h2
          style={{ animationDelay: `${baseDelay}ms` }}
          className="
            opacity-0 animate-fadeInUp
            text-3xl md:text-4xl
            font-fraunces tracking-wide
            font-semibold text-[#6B5144]
          "
        >
          {contact.title}
        </h2>

        <Link
          href={contact.link}
          target="_blank"
          style={{ animationDelay: `${baseDelay * 2}ms` }}
          className="
            inline-block
            opacity-0 animate-fadeInUp
            mt-8
            px-8 py-4
            bg-[#C8892A]
            rounded-xl
            text-[#FDF8F2]
            font-lato font-bold
            hover:bg-[#b37820]
            hover:scale-105
            transition-all duration-300
            shadow-sm
          "
        >
          Visit →
        </Link>
      </div>
    ))}
  </div>
</div>

    </div></div>
  );
}