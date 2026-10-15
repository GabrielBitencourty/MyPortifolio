"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";

const navItems = [
  { name: "Início", id: "home" },
  { name: "Sobre", id: "about" },
  { name: "Projetos", id: "projects" },
  { name: "Habilidades", id: "skills" },
  { name: "Contato", id: "contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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
    setIsOpen(false); 

    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth", 
        block: "start",
      });
    }
  };

  const DownloadButton = ({ className = "" }: { className?: string }) => (
    <motion.a
      href="/Gabriel_Bitencourt.pdf" 
      download="Gabriel_Bitencourt_CV.pdf" 
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`
        flex 
        items-center 
        justify-center
        gap-2 
        rounded-xl 
        bg-[#00FF44] 
        px-5 
        py-3 
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
        ${className}
      `}
    >
      <Download size={14} className="transition-colors duration-300" />
      Baixar currículo
    </motion.a>
  );

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full border-b border-zinc-900 bg-[#0A0A0A]/80 backdrop-blur-md px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          
          <div className="flex items-center gap-2 font-black text-white text-lg z-50">
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

          <div className="flex items-center gap-4 z-50">
            <DownloadButton className="hidden md:flex" />

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#00FF44] hover:opacity-80 md:hidden p-1 transition-opacity cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-lg md:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="fixed inset-y-0 right-0 z-40 w-full max-w-xs sm:max-w-sm bg-[#0A0A0A] border-l border-zinc-900 p-8 pt-28 flex flex-col justify-between md:hidden"
            >
              <div className="flex flex-col gap-6">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.a
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleSmoothScroll(e, item.id)}
                      className={`text-xl font-bold py-2 tracking-wide block transition-colors ${
                        isActive ? "text-[#00FF44]" : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </motion.a>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="w-full pb-8"
              >
                <DownloadButton className="w-full" />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}