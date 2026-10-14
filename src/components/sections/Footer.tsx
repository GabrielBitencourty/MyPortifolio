"use client";

import { Mail } from "lucide-react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";

const links = [
  {
    name: "GitHub",
    href: "https://github.com/GabrielBitencourty",
    icon: BsGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/gabriel-bitencourt-931b4b248/",
    icon: BsLinkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/gabrielbitencourty/?hl=pt-br",
    icon: BsInstagram,
  },
];

export function Footer() {
  const emailAddress = "seu-email@dominio.com"; // Substitua aqui pelo seu e-mail profissional

  return (
    <footer className="bg-[#0A0A0A] border-t border-zinc-900 px-4 py-10 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        
        {/* Nome / Título */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-black text-white tracking-tight">
            Gabriel Bitencourt
            <span className="text-[#00FF44]">.</span>
          </h2>
          <p className="mt-1 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
            Software Development Engineer in Test
          </p>
        </div>

        {/* Links de Redes e E-mail */}
        <div className="flex items-center gap-3">
          {/* Botão Dinâmico de E-mail */}
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${emailAddress}`}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-[#121212] text-zinc-400 transition-colors duration-200 hover:border-[#00FF44]/30 hover:bg-zinc-900 hover:text-[#00FF44]"
            title="Enviar E-mail"
          >
            <Mail size={16} />
          </motion.a>

          {/* Mapeamento das Redes Sociais */}
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <motion.a
                key={link.name}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-[#121212] text-zinc-400 transition-colors duration-200 hover:border-[#00FF44]/30 hover:bg-zinc-900 hover:text-[#00FF44]"
                title={link.name}
              >
                <Icon size={16} />
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* Faixa Inferior de Direitos Autorais */}
      <div className="mx-auto mt-8 max-w-6xl border-t border-zinc-900/60 pt-6 text-center text-xs font-medium tracking-wide text-zinc-600">
        © {new Date().getFullYear()} Gabriel Bitencourt. Todos os direitos reservados.
      </div>
    </footer>
  );
}