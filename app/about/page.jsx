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

function ContactCard({ contact, delay, baseDelay }) {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className="
        opacity-0
        w-full
        rounded-3xl
        bg-[#FFF8F2]/20
        backdrop-blur-lg
        border border-[#D9C9B8]/40
        shadow-md
        hover:shadow-2xl
        hover:shadow-[0_10px_40px_rgba(181,118,40,0.18)]
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
          font-cormorant tracking-wide
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
  );
}

export default function About() {
  const baseDelay = 120;

  return (
    <div className="relative scroll-smooth min-h-screen w-full pt-24 bg-gradient-to-br from-[#F7F1E8] to-[#EFE4D4]">
      <NavBar />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Glow Blobs */}
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

        {/* Coffee Beans */}
        <CoffeeBean className="absolute top-28 left-10 md:w-12 md:h-12 w-6 h-6 opacity-20 animate-softBlink" />

        <CoffeeBean className="absolute top-40 right-20 w-8 h-8 opacity-10 rotate-[30deg] animate-softBlink [animation-delay:700ms]" />

        <CoffeeBean className="absolute bottom-72 left-2/3 md:h-8 md:w-8 w-5 h-5 opacity-20 -rotate-[15deg] animate-softBlink [animation-delay:300ms]" />

        <CoffeeBean className="absolute bottom-56 left-16 w-6 h-6 md:w-10 md:h-10 md:bottom-8 opacity-20 rotate-[45deg] animate-softBlink [animation-delay:900ms]" />

        <CoffeeBean className="absolute top-[20%] right-[35%] w-5 h-5 md:w-8 md:h-8 opacity-10 rotate-[18deg] animate-softBlink [animation-delay:500ms]" />

        <CoffeeBean className="absolute bottom-[18%] right-[12%] w-7 h-7 md:w-10 md:h-10 opacity-15 -rotate-[30deg] animate-softBlink [animation-delay:1200ms]" />
      </div>

      {/* Grid Texture */}
      <div
        className="
          absolute inset-0
          pointer-events-none
          opacity-[0.03]
          bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
          bg-[size:70px_70px]
        "
      />

      <div className="relative z-10 flex flex-col">

        {/* Title */}
        <h1
          className="
            opacity-0
            mx-auto
            animate-fadeInUp
            text-6xl md:text-8xl
            font-vibes
            mt-10
            text-[#2A160D]
          "
        >
          About
        </h1>

        {/* About Box */}
        <div
          className="
            mt-12
            mx-auto
            max-w-2xl
            px-8 py-10
            rounded-3xl
            bg-[#FFF8F2]/20
            backdrop-blur-md
            border border-[#D9C9B8]/40
            shadow-md
            hover:shadow-xl
            hover:shadow-[0_10px_40px_rgba(181,118,40,0.15)]
            transition-all duration-300
          "
        >
          <p
            style={{ animationDelay: `${baseDelay}ms` }}
            className="
              opacity-0 animate-fadeInUp
              text-md md:text-lg
              leading-relaxed
              tracking-wide
              text-[#7C5A49]
              font-cormorant
            "
          >
            Brew & Co. isn’t just about coffee — it’s about the ritual,
            the craft, and the moments in between.
          </p>

          <p
            style={{ animationDelay: `${baseDelay * 2}ms` }}
            className="
              opacity-0 animate-fadeInUp
              mt-4
              text-sm md:text-base
              leading-relaxed
              tracking-wide
              text-[#7C5A49]
              font-fraunces
            "
          >
            Born from a passion for precision and flavor, Brew & Co.
            was created to bring specialty café experiences into
            everyday life.
          </p>

          <p
            style={{ animationDelay: `${baseDelay * 3}ms` }}
            className="
              opacity-0 animate-fadeInUp
              mt-4
              text-md md:text-lg
              leading-relaxed
              tracking-wide
              text-[#7C5A49]
              font-cormorant
            "
          >
            We partner with ethical farms, select only high-quality
            beans, and roast them with intention to unlock their
            full character.
          </p>
        </div>

        {/* Contact Title */}
        <h1
          className="
            opacity-0
            animate-fadeInUp
            mt-20 mb-12
            text-6xl md:text-8xl
            mx-auto
            tracking-wide
            text-[#2A160D]
            font-vibes
          "
        >
          Contact
        </h1>

        {/* Contacts */}
        <div className="w-full max-w-5xl mx-auto px-6 pb-16">
          <div className="flex flex-col gap-8">
            {contacts.map((contact, i) => (
              <ContactCard
                key={contact.key}
                contact={contact}
                delay={i * 150}
                baseDelay={baseDelay}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}