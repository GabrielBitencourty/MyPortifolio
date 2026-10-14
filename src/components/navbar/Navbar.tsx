"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const navItems = [
  { name: "Início", id: "home" },
  { name: "Sobre", id: "about" },
  { name: "Projetos", id: "projects" },
  { name: "Habilidades", id: "skills" },
  { name: "Contato", id: "contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300; 

      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault(); 
    setActiveSection(id);

    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth", 
        block: "start",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-zinc-900 bg-[#0A0A0A]/80 backdrop-blur-md px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        <div className="flex items-center gap-2 font-black text-white text-lg">
          <span className="text-[#00FF44]">&lt;/&gt;</span>
          Gabriel Bitencourt<span className="text-[#00FF44]">.</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleSmoothScroll(e, item.id)}
                className={`relative text-sm font-medium transition-colors duration-400 py-1 ${
                  isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {item.name}
                
                {isActive && (
                  <motion.div
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-[#00FF44]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <motion.a
            href="/Gabriel_Bitencourt.pdf" 
            download="Gabriel_Bitencourt_CV.pdf" 
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="
              flex 
              items-center 
              gap-2 
              rounded-xl 
              bg-[#00FF44] 
              px-4 
              py-2.5 
              text-xs 
              font-extrabold 
              text-black 
              border 
              border-transparent
              transition-all 
              duration-300 
              ease-out
              shadow-[0_0_15px_rgba(0,255,68,0.15)]
              cursor-pointer
              hover:bg-transparent 
              hover:text-[#00FF44] 
              hover:border-[#00FF44] 
              hover:shadow-[0_0_20px_rgba(0,255,68,0.35)]
            "
          >
            <Download size={14} className="transition-colors duration-300" />
            Baixar currículo
          </motion.a>
      </div>
    </header>
  );
}
