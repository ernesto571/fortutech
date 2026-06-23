import { useEffect, useState } from "react";
import { navLinks } from "../utils";
import { Menu } from "lucide-react";
import MenuSidebar from "./MenuSidebar";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
          setScrolled(window.scrollY > 80);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className={`fixed py-2 top-0 left-0 w-full z-50 transition-all duration-300
            ${scrolled ? "backdrop-blur shadow-2xl bg-white" : " bg-inherit"}
        `}>
            <section className="flex justify-between items-center w-[95%] mx-auto font-grotesk gray-2">
                <div className={`flex font-bebas font-semibold text-[1.5rem] md:text-[2rem]  ${scrolled ? "purple" : "text-white"}
                `}>
                    FORTU
                    <span className="amber">TECH</span>
                </div>

                <div className="hidden lg:flex gap-7 items-center">
                    { navLinks.slice(0,4).map((n) => (
                        <a key={n.id} href={n.to} className={`text-[0.9rem] font-semibold hover:text-[#10204d] hover:cursor-pointer ease-in-out ${scrolled ? "" : "text-white"} `}>{n.label} </a>
                    )) }
                    { navLinks.slice(4).map((n) => (
                        <a key={n.id} href={n.to} className="text-[0.9rem] font-semibold text-white px-[20px] py-[9px] bg-purple hover:cursor-pointer ease-in-out ">{n.label} </a>
                    )) }
                </div>

                <button type="button"  onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden">
                    <Menu className={`size-6 ${scrolled ? "purple" : "text-white"} `} /> 
                </button>
            </section>
            <MenuSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            
        </nav>
    );
}

export default Navbar;