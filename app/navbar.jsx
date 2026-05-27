"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const linkClass = (path) =>
    `text-[#3b2f2f] text-md md:text-lg transition hover:text-[#5c4033]
     ${pathname === path ? "underline underline-offset-8 decoration-1" : ""}`;

    return(
        <div className="fixed top-4 z-50 isolate left-1/2 -translate-x-1/2  
        w-[92%] font-bold flex justify-between items-center 
        py-6 px-6 bg-[#EFE4D4]/30 backdrop-blur-lg 
        border border-[#9E8878]/20 shadow-lg rounded-2xl">
            
            <div>
                <Link className="md:px-6 px-2 font-fraunces font-light text-lg text-[#3B1F0E]"
                href={"./"}>
                    Brew & Co.
                </Link>
            </div>
            
            <div className="flex gap-4 px-2 md:px-6 font-cormorant text-[#5C3D2E]">
                <Link href={"./"} className={linkClass("/")}>Home</Link>
                <Link href={"./menu"} className={linkClass("/menu")}>Menu</Link>
                <Link href={"./about"} className={linkClass("/about")}>About</Link>
            </div>

        </div>
    )
}