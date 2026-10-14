"use client";

import {
  BriefcaseBusiness,
  GraduationCap,
  CalendarDays,
  Code2,
  Server,
  Database,
  CheckCircle2,
  BookOpen,
  ArrowDown,
} from "lucide-react";
import { motion } from "framer-motion";

const technologies = [
  "Java", "Groovy", "JUnit 5", 
  "Rest Assured", "Playwright", "Postman", 
  "Jenkins", "TestRail", "PostgreSQL",
];

const responsibilities = [
  "Criação, manutenção e atualização de testes automatizados.",
  "Testes manuais de novas funcionalidades e atualizações.",
  "Validação de APIs REST com Postman e Rest Assured.",
  "Execução de testes de regressão.",
  "Investigação, documentação e acompanhamento de bugs.",
  "Validação de metadados nos ambientes QA e Stage antes da publicação em produção.",
];

const academicTopics = [
  "Engenharia de Software",
  "Desenvolvimento de aplicações",
  "Banco de dados e SQL",
  "Qualidade de software",
  "Boas práticas de programação",
];

export function About() {
  return (
    <section id="about" className="bg-[#0A0A0A] text-[#F5F5F5] px-4 py-20 md:px-6 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="text-xs font-bold tracking-[0.25em] text-[#00FF44] uppercase">
             SOBRE MIM
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            Minha trajetória na tecnologia.
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-zinc-400">
            Experiência profissional, formação acadêmica e evolução constante para desenvolver software com alta qualidade e performance.
          </p>
        </motion.div>

        <div className="mt-12 grid items-start gap-6 md:gap-8 lg:grid-cols-2">
          
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#121212] shadow-xl transition-all duration-300 hover:border-[#00FF44]/40 hover:shadow-[#00FF44]/5"
          >
            <div className="border-b border-zinc-800 p-5 sm:p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-[#00FF44]">
                    <BriefcaseBusiness size={22} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      Experiência
                    </span>
                    <h3 className="text-lg font-bold text-white">Jornada profissional</h3>
                  </div>
                </div>
                <span className="self-start sm:self-auto rounded-full border border-[#00FF44]/20 bg-[#00FF44]/10 px-3 py-1 text-[11px] font-semibold text-[#00FF44] tracking-wide uppercase">
                  Última atuação
                </span>
              </div>

              <h4 className="mt-6 text-xl font-bold text-white sm:text-2xl">
                Software Development Engineer in Test
              </h4>
              <p className="mt-1 text-sm font-medium text-zinc-400">
                SDET · Prestação de serviços
              </p>
              
              <div className="mt-4 flex items-center gap-2 text-sm text-zinc-400">
                <CalendarDays size={16} className="text-[#00FF44]" />
                <span className="font-medium">Mar/2024 — Jul/2026</span>
              </div>
              
              <p className="mt-4 text-sm md:text-base leading-relaxed text-zinc-400">
                Atuação em projeto do setor de mídia, com foco em automação, testes de APIs e garantia de qualidade de ponta a ponta.
              </p>
            </div>

            <div className="p-5 sm:p-6 md:p-8 bg-[#141414]">
              <div className="mb-4 flex items-center justify-between">
                <h5 className="text-sm font-bold uppercase tracking-wider text-zinc-400">
                  Responsabilidades
                </h5>
                <span className="flex items-center gap-1.5 text-xs text-zinc-500 animate-pulse">
                  <ArrowDown size={13} /> Rolar para explorar
                </span>
              </div>

              <div
                tabIndex={0}
                aria-label="Responsabilidades profissionais"
                className="max-h-40 space-y-3.5 overflow-y-auto pr-2 overscroll-contain custom-scrollbar"
              >
                {responsibilities.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#00FF44]" />
                    <p className="text-sm leading-relaxed text-zinc-400">{item}</p>
                  </div>
                ))}
              </div>

              <div className="my-6 border-t border-zinc-800" />

              <div className="flex items-center gap-2">
                <Code2 size={18} className="text-[#00FF44]" />
                <h5 className="text-sm font-bold uppercase tracking-wider text-zinc-400">
                  Stack tecnológica
                </h5>
              </div>
              
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-xs font-medium text-zinc-400 text-center transition-all duration-200 hover:border-[#00FF44]/30 hover:bg-zinc-900 hover:text-white"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#121212] shadow-xl transition-all duration-300 hover:border-[#00FF44]/40 hover:shadow-[#00FF44]/5"
          >
            <div className="border-b border-zinc-800 p-5 sm:p-6 md:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-[#00FF44]">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Educação
                  </span>
                  <h3 className="text-lg font-bold text-white">Jornada acadêmica</h3>
                </div>
              </div>

              <h4 className="mt-6 text-xl font-bold text-white sm:text-2xl">
                Engenharia de Software
              </h4>
              <p className="mt-1 text-sm font-medium text-[#00FF44]">
                Estácio
              </p>
              
              <p className="mt-4 text-sm md:text-base leading-relaxed text-zinc-400">
                Formação superior em andamento, fortemente complementada por estudos independentes focados no mercado e projetos práticos.
              </p>
            </div>

            <div className="p-5 sm:p-6 md:p-8 bg-[#141414]">
              <div className="mb-4 flex items-center justify-between">
                <h5 className="text-sm font-bold uppercase tracking-wider text-zinc-400">
                  Áreas de aprendizado
                </h5>
                <BookOpen size={16} className="text-[#00FF44]" />
              </div>

              <div
                tabIndex={0}
                aria-label="Áreas de aprendizado acadêmico"
                className="max-h-40 space-y-3 overflow-y-auto pr-2 overscroll-contain custom-scrollbar"
              >
                {academicTopics.map((topic) => (
                  <div key={topic} className="flex items-center gap-3">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#00FF44] shadow-[0_0_8px_#00FF44]" />
                    <span className="text-sm font-medium text-zinc-400">{topic}</span>
                  </div>
                ))}
              </div>

              <div className="my-6 border-t border-zinc-800" />

              <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-4 transition-colors hover:border-zinc-800">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-[#00FF44] shrink-0">
                    <Code2 size={19} />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">Aplicação prática</h5>
                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-zinc-400">
                      Desenvolvimento de projetos reais construindo APIs robustas, interfaces modernas, arquitetura de dados e scripts de automação.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-4 transition-all duration-200 hover:border-zinc-800 hover:bg-zinc-900/50">
                  <Server size={18} className="text-[#00FF44]" />
                  <p className="mt-2 text-sm font-bold text-white">Back-end</p>
                  <p className="mt-0.5 text-xs text-zinc-500">APIs e microsserviços</p>
                </div>
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-4 transition-all duration-200 hover:border-zinc-800 hover:bg-zinc-900/50">
                  <Database size={18} className="text-[#00FF44]" />
                  <p className="mt-2 text-sm font-bold text-white">Dados</p>
                  <p className="mt-0.5 text-xs text-zinc-500">SQL e persistência</p>
                </div>
              </div>
            </div>
          </motion.article>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center text-xs sm:text-sm text-zinc-500 font-medium tracking-wide"
        >
         EXPERIÊNCIA PRÁTICA E EVOLUÇÃO CONTÍNUA A CADA LINHA DE CÓDIGO.
        </motion.p>
      </div>
    </div>
    </section>
  );
}