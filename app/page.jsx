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
    <div className="relative scroll-smooth min-h-screen overflow-hidden w-full pt-24 bg-gradient-to-br from-[#F7F1E8] to-[#EFE4D4]">
      <NavBar />
      <div className="absolute inset-0 pointer-events-none">

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
      <div className="mb-6 w-56 text-sm text-center rounded-2xl border border-[#C8892A]/20 uppercase text-black shadow-lg font-fraunces 
      font-semibold italic animate-fadeInUp opacity-0 [animation-delay:900ms]">
        <p className="tracking-widest">&mdash; Best coffee brewers</p>
        </div>
        <span className="text-[250px] font-['Playfair_Display'] font-black italic text-[#2c1a0e]/[0.04]
        absolute top-1 translate-y-1/2 right-[-30px] leading-none pointer-events-none select-none">B</span>
      <h1 className="text-[#2A160D]/80 font-semibold font-fraunces text-7xl md:text-9xl animate-fadeInUp opacity-0 [animation-delay:500ms] leading-tight">Brewed <div className="font-black font-fraunces text-[#b5743a]/80 tracking-widest italic text-5xl md:text-7xl animate-fadeInUp opacity-0 [animation-delay:700ms]">To Feel</div></h1>
      <p className="md:text-lg text-sm mb-12 animate-fadeInUp opacity-0 [animation-delay:1200ms] py-4 px-4 font-lato font-semibold mb-4 tracking-widest text-[#7C5A49]">Your Daily Escape in a Cup. Every brew crafted with intention, every sip a pause from the ordinary</p>
      <a className="bg-[#b5743a]/80 italic animate-fadeInUp opacity-0 [animation-delay:1500ms] rounded-sm md:py-4 md:rounded-xl px-3 md:bg-[#b5743a] shadow-lg py-3 ml-4 font-fraunces tracking-wider font-bold text-white hover:bg-[#A37746] select-none transition-colors"
      href="/menu"
      >Try your first brew</a>
    </div>
    <div className="bg-[#f5ede0] animate-fadeInUp opacity-0 [animation-delay:1800ms] border border-[#D9C9B8] shadow-xl w-72 h-80 md:h-[34 0px] -mt-36 md:h-[400px] mb-8 rounded-2xl backdrop-blur-md text-left mx-auto md:mx-0 md:mt-36 md:ml-56">
    <Image
      src="/coffee.png"
      alt="Coffee"
      width={260}
      height={270}
      className="rounded-2xl mx-auto mt-4 animate-fadeInUp opacity-0 [animation-delay:2000ms]"
    ></Image>
    <h2 className="py-8 px-4 text-[#6B5144] font-lato font-bold text-xl tracking-wider italic animate-fadeInUp opacity-0 [animation-delay:2400ms]">Every cup. Crafted with intention</h2>
    
  </div></div>
  <div className="bg-[#2c1a0e] -mt-16 md:-mt-56 px-8 py-14 relative mb-16 overflow-hidden">
    
    <span className="absolute right-[-20px] top-1/2 -translate-y-1/2
    font-['Playfair_Display'] font-light italic
    text-[200px] text-white/5 leading-none pointer-events-none select-none">C</span>
    <p className="text-white/40 tracking-widest font-xs uppercase mb-6">
      Our Craft
    </p>
    <h2 className="text-white font-fraunces font-medium
    text-5xl leading-tight mb-6">
      Every sip tells<br/>
      <span className="text-[#c8853a] italic">a story.</span>
    </h2>
    <div className="w-12 h-[1px] bg-white/20 mb-6"/>
    <p className="text-white/50 text-sm leading-relaxed font-light">
      From ethical farms to your cup -
      precision at every step.
    </p>
    </div>
</div>
      
  );
}