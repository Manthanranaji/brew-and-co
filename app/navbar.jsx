import Link from 'next/link'

export default function NavBar(){
    return(
        <div className="fixed top-4 z-50 isolate left-1/2 -translate-x-1/2  
        w-[92%] font-bold flex justify-between items-center 
        py-5 px-6 bg-[#EFE4D4]/30 backdrop-blur-lg 
        border border-[#9E8878]/20 shadow-lg rounded-2xl">
            
            <div>
                <Link className="md:px-6 px-2 font-fraunces text-lg text-[#3B1F0E]"
                href={"./"}>
                    Brew & Co.
                </Link>
            </div>
            
            <div className="flex gap-4 px-2 md:px-6 font-lato text-[#5C3D2E]">
                <Link href={"./"}>Home</Link>
                <Link href={"./menu"}>Menu</Link>
                <Link href={"./about"}>About</Link>
            </div>

        </div>
    )
}