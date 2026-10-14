"use client";

import { Mail, ArrowUpRight, Copy, Check } from "lucide-react";
import { CgInstagram } from "react-icons/cg";
import { LiaGithub, LiaLinkedin } from "react-icons/lia";
import { motion } from "framer-motion";
import { useState } from "react";

const contacts = [
  {
    name: "LinkedIn",
    icon: LiaLinkedin,
    href: "https://www.linkedin.com/in/gabriel-bitencourt-931b4b248/",
  },
  {
    name: "GitHub",
    icon: LiaGithub,
    href: "https://github.com/GabrielBitencourty",
  },
  {
    name: "Instagram",
    icon: CgInstagram,
    href: "https://www.instagram.com/gabrielbitencourty/?hl=pt-br",
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "gb750779@gmail.com"; 

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-[#0A0A0A] text-[#F5F5F5] px-4 py-24 md:px-6 md:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-4xl text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#00FF44]/20 bg-[#00FF44]/5 px-4 py-1.5 text-xs font-bold text-[#00FF44] tracking-wide uppercase"
        >
          <span className="h-2 w-2 rounded-full bg-[#00FF44] animate-pulse shadow-[0_0_8px_#00FF44]" />
          Disponível para oportunidades
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent"
        >
          Vamos construir algo juntos?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-4 max-w-xl text-base md:text-lg leading-relaxed text-zinc-400"
        >
          Estou aberto a novas oportunidades como SDET ou Desenvolvedor, projetos freelancers e conexões na área de tecnologia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 max-w-md mx-auto"
        >
          <div className="group relative rounded-2xl border border-zinc-800 bg-[#121212] p-4 flex items-center justify-between gap-4 transition-all duration-300 hover:border-[#00FF44]/30">
            <a 
              href={`mailto:${emailAddress}`}
              className="flex items-center gap-3 text-left pl-2 flex-1"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-[#00FF44]">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">Me envie um e-mail</p>
                <p className="text-sm font-semibold text-white group-hover:text-[#00FF44] transition-colors duration-200">{emailAddress}</p>
              </div>
            </a>
            
            <button
              onClick={handleCopyEmail}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all duration-200"
              title="Copiar endereço de e-mail"
            >
              {copied ? <Check size={16} className="text-[#00FF44]" /> : <Copy size={16} />}
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 mb-6 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-zinc-600"
        >
          <span className="h-[1px] w-8 bg-zinc-800" />
          Ou conecte-se nas redes
          <span className="h-[1px] w-8 bg-zinc-800" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {contacts.map((contact) => {
            const Icon = contact.icon;

            return (
              <a
                key={contact.name}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-zinc-800 bg-[#121212] px-5 py-3 text-sm font-bold text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-[#00FF44]/30 hover:bg-zinc-900 hover:text-white"
              >
                <Icon size={18} className="text-zinc-400 group-hover:text-[#00FF44] transition-colors duration-200" />
                {contact.name}
                <ArrowUpRight
                  size={14}
                  className="text-zinc-500 opacity-50 transition-all duration-200 group-hover:opacity-100 group-hover:text-[#00FF44] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}