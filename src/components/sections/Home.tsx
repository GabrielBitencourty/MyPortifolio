"use client";

import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowRight,
  Code2,
  Mail,
  Database,
  GitBranch,
  Braces,
} from "lucide-react";
import Image from "next/image";

import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { DiJenkins } from "react-icons/di";

const technologies = [
  { name: "Java", icon: Code2 },
  { name: "JavaScript", icon: Braces },
  { name: "Node.js", icon: Code2 },
  { name: "PostgreSQL", icon: Database },
  { name: "Git", icon: GitBranch },
  { name: "Jenkins", icon: DiJenkins },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/GabrielBitencourty",
    icon: BsGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/gabriel-bitencourt-931b4b248",
    icon: BsLinkedin,
  },
  {
    name: "E-mail",
    href: "mailto:gb750779@gmail.com",
    icon: Mail,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/gabrielbitencourty/",
    icon: BsInstagram,
  }
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#080a09] px-5 pb-12 pt-32 text-white sm:px-8 lg:px-12 lg:pt-36"
    >

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_45%,rgba(57,255,20,0.07),transparent_42%)]" />

        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:90px_90px]" />

        <div className="absolute left-[58%] top-44 h-20 w-20 rounded-full border border-[#39ff14]/20 bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(57,255,20,0.18)_5px,rgba(57,255,20,0.18)_6px)]" />

        <div className="absolute bottom-24 left-10 h-48 w-48 rounded-full bg-[#39ff14]/[0.04] blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#39ff14]/40 bg-[#39ff14]/[0.06] px-4 py-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#39ff14] opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#39ff14]" />
            </span>

            <span className="text-sm font-medium tracking-wide text-gray-200">
              Software Engineer
            </span>
          </div>

          <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
            Engenheiro
            <br />
            de Software
            <br />
            <span className="mt-1 inline-block text-[#39ff14]">
              Back-end & QA/SDET
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            Desenvolvedor focado em construir aplicações eficientes
            e confiáveis. Trabalho com desenvolvimento back-end,
            APIs REST e automação de testes, buscando qualidade
            de código e soluções que resolvam problemas reais.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const targetElement = document.getElementById("projects");
                if (targetElement) {
                  targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex min-h-13 items-center gap-3 rounded-full bg-[#39ff14] px-6 py-3.5 font-semibold text-[#071006] transition-colors hover:bg-[#65ff49] cursor-pointer"
            >
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
              Ver projetos
            </motion.a>
          </div>

          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-[#39ff14]"
          >
            Entre em contato
            <ArrowRight size={16} />
          </a>

          <div className="mt-8 flex items-center gap-3">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition-all hover:border-[#39ff14]/50 hover:text-[#39ff14]"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
              Tecnologias
            </p>

            <div className="flex flex-wrap gap-x-7 gap-y-5">
              {technologies.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-[#39ff14]"
                >
                  <Icon size={19} />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[530px] lg:ml-auto lg:mr-0"
        >
          <div className="absolute inset-x-5 bottom-2 top-16 border border-[#39ff14]/60 sm:inset-x-8" />

          <div className="absolute inset-x-10 bottom-10 top-24 bg-[#39ff14]/[0.04] sm:inset-x-14" />

          <div className="relative mx-auto aspect-[4/5] w-full max-w-[480px] overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="Foto de perfil de Gabriel Bitencourt"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover object-center grayscale"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#080a09] via-transparent to-transparent" />

            <div className="absolute inset-0 bg-[#39ff14]/[0.04] mix-blend-screen" />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-1 bottom-[22%] h-12 w-12 border border-[#39ff14]/50 bg-[repeating-linear-gradient(135deg,transparent,transparent_4px,rgba(57,255,20,0.5)_5px,rgba(57,255,20,0.5)_6px)] sm:-left-4"
          />

          <div className="absolute right-5 top-5 text-5xl font-light text-[#39ff14] sm:right-0 sm:text-6xl">
            ✳
          </div>

          <div className="absolute bottom-1 left-5 h-2 w-2 rounded-full bg-[#39ff14] shadow-[0_0_16px_#39ff14]" />
        </motion.div>
      </div>
    </section>
  );
}