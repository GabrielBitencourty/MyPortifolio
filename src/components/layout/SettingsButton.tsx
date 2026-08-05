"use client";

import { useState } from "react";
import { Settings, Sun, Moon, Languages } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function SettingsButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="
      fixed
      bottom-6
      right-6
      z-50
    ">

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.95,
            }}
            className="
              absolute
              bottom-16
              right-0
              w-52
              rounded-2xl
              border
              border-border
              bg-card/80
              p-4
              shadow-xl
              backdrop-blur-xl
            "
          >

            <h3 className="
              mb-3
              text-sm
              font-semibold
            ">
              Configurações
            </h3>


            <button
              className="
                flex
                w-full
                items-center
                gap-3
                rounded-xl
                px-3
                py-2
                text-sm
                transition
                hover:bg-primary/10
              "
            >
              <Sun size={18}/>
              Claro
            </button>


            <button
              className="
                flex
                w-full
                items-center
                gap-3
                rounded-xl
                px-3
                py-2
                text-sm
                transition
                hover:bg-primary/10
              "
            >
              <Moon size={18}/>
              Escuro
            </button>


            <div className="
              my-3
              border-t
              border-border
            "/>


            <button
              className="
                flex
                w-full
                items-center
                gap-3
                rounded-xl
                px-3
                py-2
                text-sm
                transition
                hover:bg-primary/10
              "
            >
              <Languages size={18}/>
              Português
            </button>


          </motion.div>
        )}
      </AnimatePresence>


      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{
          rotate: 90,
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border
          border-border
          bg-card/80
          shadow-lg
          backdrop-blur-xl
        "
      >
        <Settings
          size={24}
          className="text-primary"
        />

      </motion.button>

    </div>
  );
}