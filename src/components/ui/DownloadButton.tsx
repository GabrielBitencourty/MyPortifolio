"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Check,
  LoaderCircle,
} from "lucide-react";

export function DownloadButton() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success"
  >("idle");


  function handleDownload() {
    setStatus("loading");


    setTimeout(() => {
      setStatus("success");


      setTimeout(() => {
        setStatus("idle");
      }, 2000);

    }, 1500);
  }


  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{
        y: -3,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="
        flex
        h-12
        items-center
        gap-3
        rounded-full
        border
        border-border
        px-7
        font-medium
        transition
        cursor-pointer
        hover:bg-primary/10
      "
    >

      <AnimatePresence mode="wait">

        {status === "idle" && (
          <motion.div
            key="idle"
            initial={{
              opacity:0,
              y:5
            }}
            animate={{
              opacity:1,
              y:0
            }}
            exit={{
              opacity:0,
              y:-5
            }}
            className="
              flex
              items-center
              gap-2
            "
          >
            Download CV

            <Download size={18}/>
          </motion.div>
        )}


        {status === "loading" && (
          <motion.div
            key="loading"
            initial={{
              opacity:0
            }}
            animate={{
              opacity:1
            }}
            className="
              flex
              items-center
              gap-2
            "
          >
            <LoaderCircle
              size={18}
              className="animate-spin"
            />

            Baixando...
          </motion.div>
        )}



        {status === "success" && (
          <motion.div
            key="success"
            initial={{
              opacity:0,
              scale:.8
            }}
            animate={{
              opacity:1,
              scale:1
            }}
            className="
              flex
              items-center
              gap-2
              text-primary
            "
          >
            <Check size={18}/>

            Concluído
          </motion.div>
        )}

      </AnimatePresence>


    </motion.button>
  );
}