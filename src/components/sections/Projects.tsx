"use client";

import React, { useState } from "react";
import { ExternalLink, Flame, ShieldCheck, X } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const featuredProjects = [
  {
    title: "Stock Management FE",
    status: "Em Desenvolvimento",
    statusColor: "text-amber-400 bg-amber-400/10 border-amber-500/20",
    image: "/images/estoque_management_img.png",
    description:
      "Frontend moderno para gerenciamento de estoque escalonável. Desenvolvido para oferecer uma experiência de controle ágil, integrando-se de forma assíncrona a uma API REST robusta.",
    features: [
      "Autenticação e controle de rotas por Token JWT",
      "Consumo otimizado de API REST com tratamento de estados",
      "Gerenciamento e fluxo completo de entradas e saídas de produtos",
      "Arquitetura modular voltada para performance e manutenibilidade"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "JWT Auth", "Axios"],
    github: "https://github.com/GabrielBitencourty/stock_management_fe",
    demo: "#",
  },
  {
    title: "HyperSets Trainer",
    status: "Em Uso Ativo",
    statusColor: "text-[#00FF44] bg-[#00FF44]/10 border-[#00FF44]/20",
    image: "/images/hyper_sets_trainer_img.jpg",
    description:
      "Aplicativo mobile de alta performance focado na otimização, acompanhamento e gerenciamento personalizado de treinos e evolução física diária.",
    features: [
      "Gerenciamento avançado de rotinas de treino",
      "Persistência de dados local ultrarrápida com Hive",
      "Interface fluida com transições e renderização reativa",
      "Arquitetura limpa focada em usabilidade e performance mobile"
    ],
    technologies: ["Flutter", "Dart", "Hive DB", "Provider / BLoC"],
    github: "https://github.com/GabrielBitencourty/HyperSets",
    demo: "#",
  },
];

export function Projects() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-[#0A0A0A] text-[#F5F5F5] px-4 py-20 md:px-6 md:py-28 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="text-xs font-bold tracking-[0.25em] text-[#00FF44] uppercase">
            PORTFÓLIO EM FOCO
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            Projetos em destaque.
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-zinc-400">
            Aplicações práticas projetadas com foco em arquitetura limpa, segurança e alta usabilidade no dia a dia.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 items-stretch">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-800 bg-[#121212] transition-all duration-300 hover:border-[#00FF44]/40 hover:shadow-2xl hover:shadow-[#00FF44]/5"
            >
              <div>
                <div 
                  onClick={() => setActiveImage(project.image)}
                  className="relative h-56 sm:h-64 w-full overflow-hidden border-b border-zinc-800/80 bg-gradient-to-b from-zinc-900 to-zinc-950 p-4 flex justify-center cursor-zoom-in"
                  title="Clique para ampliar a imagem"
                >
                  <img
                    src={project.image}
                    alt={`Preview do projeto ${project.title}`}
                    className="h-full w-auto max-w-full object-contain object-top transition-transform duration-700 ease-out group-hover:scale-[1.03] group-hover:-translate-y-2 group-hover:opacity-95 drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent pointer-events-none" />
                </div>

                <div className="p-6 sm:p-8 md:p-10 pb-0">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-[#00FF44] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className={`rounded-full border px-3 py-1 text-[11px] font-bold tracking-wide uppercase ${project.statusColor}`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="mt-4 text-sm md:text-base leading-relaxed text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-6 space-y-3 border-t border-b border-zinc-800/60 py-6">
                    {project.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        {index === 0 ? (
                          <ShieldCheck size={16} className="mt-0.5 shrink-0 text-[#00FF44]" />
                        ) : (
                          <Flame size={16} className="mt-0.5 shrink-0 text-[#00FF44]" />
                        )}
                        <p className="text-sm text-zinc-300 font-medium leading-normal">{feature}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg bg-zinc-900 border border-zinc-800/80 px-3 py-1.5 text-xs font-semibold text-zinc-400 tracking-wide transition-colors group-hover:border-zinc-700 group-hover:text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 md:p-10 pt-10 flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/40 px-5 py-3 text-xs font-bold text-zinc-200 transition-all duration-200 hover:bg-zinc-800 hover:text-white hover:border-zinc-700 flex-1 sm:flex-initial"
                >
                  <BsGithub size={15} />
                  Acessar Repositório
                </a>

                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#00FF44] px-5 py-3 text-xs font-extrabold text-black transition-all duration-200 hover:bg-[#00E63E] hover:scale-[1.01] shadow-[0_0_15px_rgba(0,255,68,0.15)] flex-1 sm:flex-initial"
                  >
                    <ExternalLink size={15} />
                    Visualizar Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-md cursor-zoom-out"
          >
            <button 
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-zinc-900/80 border border-zinc-800 text-white hover:text-[#00FF44] transition-colors duration-200"
            >
              <X size={20} />
            </button>

            <motion.img
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={activeImage}
              alt="Preview ampliado do projeto"
              className="max-h-[85vh] max-w-full rounded-2xl object-contain drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}