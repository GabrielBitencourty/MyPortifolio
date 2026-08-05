import {
  Code2,
  Server,
  Database,
  Layers3,
} from "lucide-react";


const skills = [
  {
    title: "Frontend",
    icon: Code2,
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
    title: "Backend",
    icon: Server,
    items: [
      "Node.js",
      "Express",
      "Java",
      "REST APIs",
      "Groovy"
    ],
  },

  {
    title: "Database",
    icon: Database,
    items: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
    ],
  },

  {
    title: "Engineering",
    icon: Layers3,
    items: [
      "Git",
      "Docker",
      "Automated Tests",
      "Clean Code",
      "Agile Methodologies",
      "AWS",
      "Automation tests",
      "Jenkins",
      "github actions",
    ],
  },
];


export function Skills() {
  return (
    <section
      id="skills"
      className="
        scroll-mt-24
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

        <span
          className="
            font-semibold
            text-primary
          "
        >
          SKILLS
        </span>


        <h2
          className="
            mt-4
            max-w-3xl
            text-4xl
            font-bold
            tracking-tight
            md:text-5xl
          "
        >
          Tecnologias que utilizo
          para criar soluções digitais.
        </h2>


        <p
          className="
            mt-6
            max-w-2xl
            text-lg
            text-muted-foreground
          "
        >
          Minha stack combina desenvolvimento
          frontend, backend e boas práticas de
          engenharia de software.
        </p>



        <div
          className="
            mt-16
            grid
            gap-6
            md:grid-cols-2
            lg:grid-cols-4
          "
        >

          {skills.map((skill) => {

            const Icon = skill.icon;


            return (
              <div
                key={skill.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-border
                  bg-card
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-primary/10
                    text-primary
                    transition
                    group-hover:scale-110
                  "
                >
                  <Icon size={24}/>
                </div>


                <h3
                  className="
                    mt-6
                    text-xl
                    font-semibold
                  "
                >
                  {skill.title}
                </h3>


                <div
                  className="
                    mt-5
                    flex
                    flex-wrap
                    gap-2
                  "
                >

                  {skill.items.map((item)=>(
                    <span
                      key={item}
                      className="
                        rounded-full
                        bg-muted
                        px-3
                        py-1
                        text-sm
                        transition
                        hover:bg-primary/10
                        hover:text-primary
                      "
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
}