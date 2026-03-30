import NavBar from "../navbar";
import Link from "next/link";

const contacts = [
    {
        key: "whatsapp",
        title: "WhatsApp",
        link: "https://wa.me/9876634626",
    },
    {
        key: "instagram",
        title: "Instagram",
        link: "https://instagram/manthan.webdev",
    },
]

export default function About(){
    return(
        <div className="bg-[#F5EFE6] min-h-screen w-full items-center justify-center text-center">
            <NavBar/>
            <h1 className="text-3xl font-bold font-fraunces mt-8 text-[#3B1F0E]">About</h1>
            <div className="px-8 py-12 mx-auto text-center mt-12 w-96 md:w-full rounded-2xl bg-white/40 backdrop-blur-md border border-white/30 shadow-md hover:shadow-xl">
                <p className="text-sm tracking-wider leading-relaxed md:text-lg italic font-lato font-bold text-[#5C3D2E]">Brew & Co. isn’t just about coffee — it’s about the ritual, the craft, and the moments in between.

Born from a passion for precision and flavor, Brew & Co. was created to bring specialty café experiences into everyday life. We believe great coffee starts long before the first sip — in the soil, the sourcing, and the science behind every roast.

We partner with ethical farms, select only high-quality beans, and roast them with intention to unlock their full character — from bright citrus notes to deep chocolate undertones. Every blend is designed to tell a story, whether it’s your morning focus or your late-night creativity.</p>
            </div>
            <div className="mt-16 flex text-center">
                <h1 className="text-3xl text-[#3B1F0E] font-fraunces mx-auto mb-16 font-bold">Contact</h1>
            </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 w-full">
                    {contacts.map((contact) => (
                        <div key={contact.key} className="px-8 mb-4 py-12 mx-auto text-center w-96 md:w-full rounded-2xl bg-white/40 backdrop-blur-md border border-white/30 shadow-md hover:shadow-xl">
                       
                            <h2 className="text-2xl font-fraunces mb-8 font-bold text-[#3B1F0E] leading-tight tracking-tight">{contact.title}</h2>
                            <Link
                            href={contact.link}
                            target={"_blank"}
                            className="px-7 py-3 bg-[#C8892A] rounded-xl text-[#FDF8F2] font-lato font-bold text-sm hover:bg-[#b37820] transition-colors shadow-sm"
                            >
                                Visit
                            </Link>
                        </div>
                    ))}
                </div>

            
        </div>
    );
}