'use client';

import NavBar from "./navbar";
import Link from "next/link";
import useReveal from "../hooks/reveal";

export default function Home() {

  const r = 300;

  return (
    <div className="min-h-screen w-full bg-[#F5EFE6]">
      <NavBar />

      {/* ── HERO ── */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 px-8 md:px-16 pt-24 pb-16">

        {/* Left – main hero bubble */}
        <div className="opacity-0 animate-fadeInUp w-full max-w-md rounded-2xl mb-12 border border-[#9E8878]/30 bg-[#8C6B58]/40 backdrop-blur-md px-10 py-12 shadow-sm">
          <span style={{ animationDelay: `${r*6}ms`}} className="opacity-0 animate-fadeInUp inline-block text-xs font-lato font-semibold uppercase tracking-widest text-[#8C6B58] mb-4">
            Est. 2024
          </span>
          <h1 style={{ animationDelay: `${r*1.5}ms`}} className=" opacity-0 animate-fadeInUp text-5xl md:text-7xl font-fraunces font-bold text-[#3B1F0E] leading-tight tracking-tight">
            Brew & Co.
          </h1>
          <p style={{ animationDelay: `${r*2}ms`}} className=" opacity-0 animate-fadeInUp text-[#5C3D2E] font-fraunces text-sm mt-4 mb-10 leading-relaxed">
            Where every cup tells a story.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/menu"
              style={{ animationDelay: `${r*2.5}ms`}} className=" opacity-0 animate-fadeInUp px-7 py-3 bg-[#C8892A] rounded-xl text-[#FDF8F2] font-lato font-bold text-sm hover:bg-[#b37820] transition-colors shadow-sm"
            >
              View Menu
            </Link>
            <Link
              href="/about"
                style={{ animationDelay: `${r*3}ms`}} className=" opacity-0 animate-fadeInUp px-7 py-3 rounded-xl text-[#3B1F0E] bg-[#F5EFE6] font-lato font-bold text-sm border border-[#9E8878]/50 hover:bg-[#F5EFE6]/50 transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* Right – reply bubble */}
        <div  style={{ animationDelay: `${r*4}ms`}} className=" opacity-0 animate-fadeInUp w-full max-w-xs rounded-2xl  border border-[#9E8878]/30 bg-[#FDF8F2] px-8 py-10 shadow-sm self-end md:mb-24">
          <p style={{ animationDelay: `${r*4.5}ms`}} className=" opacity-0 animate-fadeInUp font-fraunces text-[#3B1F0E] text-xl font-semibold leading-snug mb-3">
            "Not just coffee —<br />a ritual."
          </p>
          <p style={{ animationDelay: `${r*5}ms`}} className=" opacity-0 animate-fadeInUp font-lato text-[#8C6B58] text-sm leading-relaxed">
            Hand-picked beans, slow brews, and a space that feels like home.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#C8892A]/30 flex items-center justify-center text-[#C8892A] font-fraunces font-bold text-sm">
              B
            </div>
            <span className="font-lato text-xs text-[#BFA898] uppercase tracking-widest">Brew & Co.</span>
          </div>
        </div>

      </section>

      {/* ── DIVIDER ── */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#3B1F0E]/30 to-transparent w-full" />

      {/* ── WHY COFFEE SECTION ── */}
      <section className="px-8 md:px-16 py-20 flex flex-col gap-6">

        {/* Section label */}
        <span className="font-lato text-xs font-semibold uppercase tracking-widest text-[#8C6B58]">
          Why Coffee
        </span>

        {/* Bubble left */}
        <div className="max-w-sm rounded-2xl rounded-tl-none border border-[#9E8878]/30 bg-[#FDF8F2] px-8 py-8 shadow-sm">
          <h2 className="font-fraunces text-2xl font-bold text-[#3B1F0E] mb-2">
            It starts the day right.
          </h2>
          <p className="font-lato text-sm text-[#5C3D2E] leading-relaxed">
            A good cup of coffee is more than caffeine — it's a moment of calm before the world starts moving.
          </p>
        </div>

        {/* Bubble right */}
        <div className="max-w-sm rounded-2xl rounded-tr-none border border-[#9E8878]/30 bg-[#8C6B58]/15 px-8 py-8 shadow-sm self-end">
          <h2 className="font-fraunces text-2xl font-bold text-[#3B1F0E] mb-2">
            Community in every cup.
          </h2>
          <p className="font-lato text-sm text-[#5C3D2E] leading-relaxed">
            Brew & Co. is a place to slow down, connect, and savour something made with care.
          </p>
        </div>

        {/* Bubble left */}
        <div className="max-w-sm rounded-2xl rounded-tl-none border border-[#9E8878]/30 bg-[#FDF8F2] px-8 py-8 shadow-sm">
          <h2 className="font-fraunces text-2xl font-bold text-[#3B1F0E] mb-2">
            Sourced with intention.
          </h2>
          <p className="font-lato text-sm text-[#5C3D2E] leading-relaxed">
            We work directly with ethical farms — so every sip supports the people behind the bean.
          </p>
        </div>

      </section>

      {/* ── DIVIDER ── */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#3B1F0E]/30 to-transparent w-full" />

      {/* ── CTA STRIP ── */}
      <section className="px-8 md:px-16 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3  className="font-fraunces text-3xl font-bold text-[#3B1F0E]">Ready for your first cup?</h3>
          <p  className="font-lato text-sm text-[#8C6B58] mt-1">Find us in-store or explore our full menu.</p>
        </div>
        <Link
          href="/menu"
           className="animate-fadeInUp px-8 py-4 bg-[#C8892A] rounded-xl text-[#FDF8F2] font-lato font-bold text-sm hover:bg-[#b37820] transition-colors shadow-sm whitespace-nowrap"
        >
          Explore the Menu →
        </Link>
      </section>

    </div>
  );
}