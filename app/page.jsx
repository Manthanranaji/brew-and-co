'use client';

import NavBar from "./navbar";
import Link from "next/link";
import Image from "next/image";
import useReveal from "../hooks/reveal";

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

export default function Home() {

  const r = 300;

  return (
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
    <div className="w-full min-h-[1000px] md:justify-between gap-12 md:-gap-32 grid md:grid-cols-2 grid-cols-1">
    <div className="py-24 md:px-20 md:py-32 px-12">
    <div className="absolute inset-0 pointer-events-none">
  <CoffeeBean className="absolute top-28 left-10 md:w-12 md:h-12 w-6 h-6 opacity-20 animate-softBlink" />
  <CoffeeBean className="absolute top-40 right-20 w-8 h-8 opacity-10 rotate-[30deg] animate-softBlink [animation-delay:700ms]" />
  <CoffeeBean className="absolute bottom-72 left-2/3 md:h-8 md:w-8 w-5 h-5 opacity-20 -rotate-[15deg] animate-softBlink [animation-delay:300ms]" />
  <CoffeeBean className="absolute bottom-56 left-16 w-6 h-6 md:10 md:h-10 md:bottom-8 opacity-20 rotate-[45deg] animate-softBlink [animation-delay:900ms]" />
</div>
      <div className="bg-[#B57628]/50 md:bg-[#B57628]/60 mb-6 w-56 text-center rounded-2xl border border-[#C8892A]/50 text-white shadow-lg font-fraunces 
      font-semibold tracking-widest italic animate-fadeInUp opacity-0 [animation-delay:900ms]">
        <p>Best coffee brewers</p>
        </div>
      <h1 className="text-[#2A160D] font-bold font-fraunces text-7xl md:text-9xl animate-fadeInUp opacity-0 [animation-delay:500ms]">Brewed <div className="font-bold font-fraunces text-[#C8892A] tracking-wide italic text-5xl md:text-8xl animate-fadeInUp opacity-0 [animation-delay:700ms]">To Feel</div></h1>
      <p className="md:text-lg text-sm animate-fadeInUp opacity-0 [animation-delay:1200ms] py-4 px-4 font-lato font-semibold mb-4 italic md:tracking-wider text-[#7C5A49]">Your Daily Escape in a Cup</p>
      <a className="bg-[#C8892A]/80 italic animate-fadeInUp opacity-0 [animation-delay:1500ms] rounded-lg px-6 md:py-4 md:rounded-xl md:bg-[#C8892A] shadow-lg py-3 ml-4 font-fraunces tracking-wider font-bold text-white hover:bg-[#A37746] select-none transition-colors"
      href="/menu"
      >Try your first brew</a>
    </div>
    <div className="bg-[white]/50 animate-fadeInUp opacity-0 [animation-delay:1800ms] border border-[#D9C9B8] shadow-xl w-72 h-80 -mt-36 md:h-[400px] mb-8 rounded-2xl backdrop-blur-md text-center mx-auto md:mx-0 md:mt-36 md:ml-56">
    <Image
      src="/coffee.png"
      alt="Coffee"
      width={260}
      height={270}
      className="rounded-2xl mx-auto mt-4 animate-fadeInUp opacity-0 [animation-delay:2000ms]"
    ></Image>
    <h2 className="py-8 px-4 text-[#6B5144] font-lato font-bold text-xl italic animate-fadeInUp opacity-0 [animation-delay:2400ms]">Where Every cup <div className="font-fraunces text-2xl">is<span className="text-[#B57628] uppercase underline"> perfect</span></div></h2>
    <div className="animate-fadeInUp opacity-0 [animation-delay:2500ms] rounded-full shadow-lg h-20 w-20 bg-white/30 -mt-8 md:mt-10 backdrop-blur-md md:shadow-xl -ml-8 flex items-center justify-center text-5xl">
  ☕
</div>
  </div></div>
  <div className="flex flex-col gap-8 md:-mt-48 md:gap-16">

  <div className="group bg-[#4A2917]/75 backdrop-blur-md border border-[#C89B6D]/20 
  rounded-tr-[2rem] rounded-bl-[1rem] px-6 py-6 shadow-xl transition-all duration-300 
  hover:translate-x-1 hover:bg-[#5A321D]/80">

    <h2 className="text-2xl md:text-5xl tracking-wide leading-tight 
    font-fraunces text-white font-bold">
      From Cappuccinos 
      to Lattes
    </h2>

    <p className="text-[#E6D5C3] font-lato italic mt-3 tracking-wide">
      Crafted for every mood and every moment.
    </p>

  </div>

  <div className="group bg-[#4A2917]/75 backdrop-blur-md border border-[#C89B6D]/20 
  rounded-tr-[2rem] rounded-bl-[1rem] px-6 py-6 shadow-xl transition-all duration-300 
  hover:translate-x-1 hover:bg-[#5A321D]/80">

    <h2 className="text-2xl md:text-5xl tracking-wide leading-tight 
    font-fraunces text-white font-bold">
      Enjoy Everything
    </h2>

    <p className="text-[#E6D5C3] font-lato italic mt-3 tracking-wide">
      Warm brews, rich aromas, and café comfort.
    </p>

  </div>

  <div className="pt-3">
    <Link
      href={"/menu"}
      className="inline-flex items-center gap-3 bg-[#C8892A] hover:bg-[#B57628]
      transition-all duration-300 text-white font-fraunces font-bold
      tracking-wider px-7 py-4 ml-8 mb-24 rounded-xl shadow-lg select-none"
    >
      Go Through The Menu
      <span className="text-xl">→</span>
    </Link>
  </div>

</div>
  
</div>
      
  );
}