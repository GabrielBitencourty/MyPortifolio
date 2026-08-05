"use client"

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SettingsButton } from "../layout/SettingsButton";
import { DownloadButton } from "@/components/ui/DownloadButton"; 
import Image from "next/image";

export function Hero() {
  
  return (
    <section 
    id="home"
    className="
      min-h-screen
      flex
      items-center
      justify-center
      px-6
      pt-24
    ">
      <SettingsButton />

      <div className="
        max-w-7xl
        w-full
        grid
        md:grid-cols-2
        gap-12
        items-center
        justify-between
      ">

        <div>

          <p className="
            text-primary
            text-2xl
            font-semibold
            mb-4
          ">
            Software Engineer
          </p>


          <h1
            className="
              text-5xl
              md:text-7xl
              font-bold
              tracking-tight
              leading-tight
            "
          >
            Criando experiências{" "}
            <span className="text-primary">
              digitais
            </span>{" "}
            modernas.
          </h1>


          <p className="
            mt-6
            text-lg
            text-muted-foreground
            max-w-xl
            leading-relaxed
          ">
            Desenvolvedor focado em construir aplicações
            escaláveis, interfaces modernas e soluções
            eficientes utilizando tecnologia.
          </p>


          <div className="
            mt-8
            flex
            gap-4
          ">

            <motion.button
              className="
                flex
                items-center
                gap-2
                rounded-full
                bg-primary
                px-6
                py-3
                text-primary-foreground
                font-medium
                transition
                cursor-pointer
                hover:bg-primary/90
             "
                whileHover="hover"
            >
              <a href="#projects">Ver projetos</a>
              <motion.span
                variants={{
                  hover: {
                    x: [0, 6, 0],
                    transition: {
                      duration: 0.8,
                      repeat: Infinity,
                    },
                  },
                }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </motion.button>


            <a href="/Gabriel Bitencourt Full Stack - PT.pdf"
              download>
              <DownloadButton />
            </a>

          </div>

        </div>


        <div className="
          hidden
          md:flex
          justify-center
        ">

          <div
           className="
             h-160
             w-100
             overflow-hidden
             rounded-3xl
             bg-primary/10
             border
             border-primary/20
             flex
             items-center
             justify-center
           "
          > 
           <Image
             src="/profile.jpg"
             alt="Profile"
             width={320}
             height={320}
             className="
               h-full
               w-full
               object-cover
             "
           />
          </div>

        </div>


      </div>

    </section>
  );
}