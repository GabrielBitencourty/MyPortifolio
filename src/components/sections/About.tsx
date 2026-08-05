import { Code2, Server, TestTube } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="
        px-6
        py-32
      "
    >

      <div
        className="
          mx-auto
          max-w-7xl
        "
      >

        <div className="max-w-3xl">

          <span
            className="
              text-primary
              font-semibold
            "
          >
            SOBRE MIM
          </span>


          <h2
            className="
              mt-4
              text-4xl
              font-bold
              tracking-tight
              md:text-5xl
            "
          >
            Construindo software
            com propósito e qualidade.
          </h2>


          <p
            className="
              mt-6
              text-lg
              leading-relaxed
              text-muted-foreground
            "
          >
            Sou Software Engineer apaixonado por tecnologia
            e desenvolvimento de aplicações modernas.
            Tenho experiência criando APIs, interfaces
            responsivas e soluções escaláveis utilizando
            boas práticas de engenharia de software.
          </p>

        </div>



        <div
          className="
            mt-16
            grid
            gap-6
            md:grid-cols-3
          "
        >


          <InfoCard
            icon={<Code2 />}
            title="Frontend"
            description="Interfaces modernas utilizando React, Next.js e TypeScript."
          />


          <InfoCard
            icon={<Server />}
            title="Backend"
            description="APIs escaláveis com Node.js, Java e bancos de dados."
          />


          <InfoCard
            icon={<TestTube />}
            title="Software Development Engineer in Test(SDET)"
            description="Testes automatizados, clean code e boas práticas."
          />


        </div>

      </div>

    </section>
  );
}



function InfoCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {

  return (
    <div
      className="
        rounded-3xl
        border
        border-border
        bg-card
        p-6
        transition
        hover:-translate-y-2
        hover:shadow-lg
      "
    >

      <div
        className="
          mb-5
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-primary/10
          text-primary
        "
      >
        {icon}
      </div>


      <h3
        className="
          text-xl
          font-semibold
        "
      >
        {title}
      </h3>


      <p
        className="
          mt-3
          text-muted-foreground
        "
      >
        {description}
      </p>

    </div>
  );
}