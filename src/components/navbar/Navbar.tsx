"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useActiveSection } from "@/hooks/useActiveSection";


function scrollToSection(id: string) {
  const element = document.getElementById(id);

  if (element) {

    const navbarHeight = 80;

    const elementPosition =
      element.offsetTop - navbarHeight;


    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });

  }
}


const links = [
  {
    id: "about",
    name: "Sobre",
  },
  {
    id: "projects",
    name: "Projetos",
  },
  {
    id: "skills",
    name: "Skills",
  },
  {
    id: "contact",
    name: "Contato",
  },
];


export function Navbar() {

  const [open, setOpen] = useState(false);


  const activeSection = useActiveSection([
    "home",
    "about",
    "projects",
    "skills",
    "contact",
  ]);


  function handleNavigate(id:string){

    scrollToSection(id);
    setOpen(false);

  }


  return (

    <header
      className="
        fixed
        top-0
        left-0
        z-50
        w-full
      "
    >

      <nav
        className="
          flex
          items-center
          sm:justify-around
          justify-between
          bg-card/70
          backdrop-blur-xl
          px-6
          py-4
          shadow-[0_8px_30px_rgb(0,0,0,0.04)]
        "
      >

        <button
          onClick={() => scrollToSection("home")}
          className="
            text-xl
            font-bold
            cursor-pointer
            tracking-tight
          "
        >
          Gabriel Bitencourt
          <span className="text-primary">
            .
          </span>

        </button>


        <div
          className="
            hidden
            md:flex
            items-center
            gap-8
            text-sm
            font-bold
            text-muted-foreground
          "
        >

          {links.map((link)=>(

            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`
                cursor-pointer
                transition-colors
                ${
                  activeSection === link.id
                  ? "text-primary"
                  : ""
                }
              `}
            >

              {link.name}

            </button>

          ))}


        </div>

        <button
          onClick={() => setOpen(true)}
          className="
            text-primary
            md:hidden
          "
        >
          <Menu size={30}/>
        </button>
      </nav>

      <AnimatePresence>

        {open && (

          <>

            <motion.div
              initial={{
                opacity:0,
              }}

              animate={{
                opacity:1,
              }}

              exit={{
                opacity:0,
              }}

              onClick={() => setOpen(false)}

              className="
                fixed
                inset-0
                z-40
                bg-black/40
                backdrop-blur-sm
                md:hidden
              "
            />

            <motion.aside

                initial={{
                 translateX: "100%",
                        }}
                
                animate={{
                  translateX: "0%",
                        }}
                
                exit={{
                  translateX: "100%",
                        }}
                
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 250,
                }}

              className="
                fixed
                right-0
                top-0
                z-50
                flex
                h-screen
                w-[85%]
                max-w-sm
                flex-col
                justify-center
                bg-card
                shadow-2xl
                md:hidden
              "
            >


              <button
                onClick={() => setOpen(false)}
                className="
                  absolute
                  right-6
                  top-6
                  text-primary
                "
              >
                <X size={30}/>
              </button>



              <div
                className="
                  flex
                  flex-col
                  items-center
                  gap-8
                "
              >

                {links.map((link)=>(

                  <button
                    key={link.id}
                    onClick={() => handleNavigate(link.id)}
                    className={`
                      text-3xl
                      font-bold
                      transition-all
                      ${
                        activeSection === link.id
                        ? "text-primary"
                        : "text-foreground"
                      }
                    `}
                  >

                    {link.name}

                  </button>

                ))}


              </div>


            </motion.aside>

          </>

        )}

      </AnimatePresence>


    </header>

  );
}