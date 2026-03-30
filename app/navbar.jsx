import Link from "next/link";

export default function NavBar(){
    return(
        <div className="sticky top-0 z-50 font-bold flex justify-between items-center w-full py-8 bg-[#F5EFE6]/20 backdrop-blur-md border-b border-[#9E8878]/40">
            <div>
                <Link className="px-6 font-fraunces text-lg text-[#3B1F0E]"
                href={"./"}>Brew & Co.</Link>
            </div>
            <div className="flex gap-4 px-6 font-lato text-[#5C3D2E]">
                <Link
                href={"./"}>
                    Home
                </Link>
                <Link
                href={"./menu"}>
                    Menu
                </Link>
                <Link
                href={"./about"}>
                    About
                </Link>
            </div>
        </div>
    )
}