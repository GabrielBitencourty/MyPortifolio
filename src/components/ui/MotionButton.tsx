"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ButtonHTMLAttributes } from "react";


interface MotionButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}


export function MotionButton({
  children,
  className,
  variant = "primary",
  ...props
}: MotionButtonProps) {

  return (
    <motion.button
      {...props}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
      className={cn(
        `
        group
        flex
        items-center
        justify-center
        gap-2
        rounded-full
        px-6
        py-3
        font-medium
        transition-colors
        `,
        variant === "primary" &&
          `
          bg-primary
          text-primary-foreground
          hover:bg-primary/90
          `,

        variant === "outline" &&
          `
          border
          border-border
          hover:bg-primary/10
          `,

        className
      )}
    >
      {children}
    </motion.button>
  );
}