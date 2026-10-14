"use client";

import {
  Code2,
  Server,
  Database,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    description: "Interfaces modernas, responsivas e focadas na experiência do usuário.",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Flutter",
      "Dart",
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    description: "Construção de APIs robustas, microsserviços e regras de negócio sólidas.",
    items: [
      "Java",
      "Node.js",
      "Express",
      "Groovy",
      "REST APIs"
    ],
  },
  {
    title: "Database & Storage",
    icon: Database,
    description: "Modelagem, persistência de dados local e gerenciamento de bancos.",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Hive DB"
    ],
  },
  {
    title: "QA & Software Engineering",
    icon: ShieldCheck,
    description: "Garantia de qualidade, esteiras de CI/CD e automação de ponta a ponta.",
    items: [
      "Playwright",
      "Rest Assured",
      "JUnit 5",
      "Postman",
      "Jenkins",
      "GitHub Actions",
      "TestRail",
      "Git & Docker",
      "Clean Code",
      "Agile (Scrum)",
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-[#0A0A0A] text-[#F5F5F5] px-4 py-20 md:px-6 md:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="text-xs font-bold tracking-[0.25em] text-[#00FF44] uppercase">
              EXPERTISE TÉCNICA
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Tecnologias e ecossistemas.
            </h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-zinc-400">
              Minha stack combina engenharia de qualidade (QA), desenvolvimento focado em arquitetura limpa e pipelines de entrega contínua.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 items-start">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col justify-between h-full rounded-3xl border border-zinc-800 bg-[#121212] p-6 sm:p-8 transition-all duration-300 hover:border-[#00FF44]/40 hover:shadow-2xl hover:shadow-[#00FF44]/5"
              >
                <div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-[#00FF44] transition-colors duration-300 group-hover:border-[#00FF44]/30">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#00FF44] transition-colors duration-300">
                        {category.title}
                      </h3>
                      <p className="text-xs text-zinc-500 mt-0.5 line-clamp-1">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="w-full h-[1px] bg-zinc-800 my-6 relative overflow-hidden">
                    <motion.div 
                      className="absolute top-0 left-0 h-full bg-[#00FF44]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.15 }}
                    />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/40 px-3 py-2 text-xs font-medium text-zinc-400 transition-all duration-200 hover:border-[#00FF44]/30 hover:bg-zinc-900 hover:text-white"
                      >
                        <CheckCircle2 size={12} className="text-[#00FF44]/70 group-hover:text-[#00FF44]" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}