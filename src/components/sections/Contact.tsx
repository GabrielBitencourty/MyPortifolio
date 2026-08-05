import {
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { CgInstagram } from "react-icons/cg";
import { LiaGithub, LiaLinkedin } from "react-icons/lia";




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

  return (

    <section
      id="contact"
      className="
        scroll-mt-24
        px-6
        py-32
      "
    >

      <div
        className="
          mx-auto
          max-w-5xl
          text-center
        "
      >


        <span
          className="
            font-semibold
            text-primary
          "
        >
          CONTATO
        </span>



        <h2
          className="
            mt-4
            text-4xl
            font-bold
            tracking-tight
            md:text-6xl
          "
        >
          Vamos construir algo
          juntos?
        </h2>



        <p
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-lg
            text-muted-foreground
          "
        >
          Estou aberto a novas oportunidades,
          projetos e conexões na área de
          tecnologia.
        </p>



        <div
          className="
            mt-12
            flex
            flex-wrap
            justify-center
            gap-4
          "
        >

          {contacts.map((contact)=>{

            const Icon = contact.icon;


            return (

              <a
                key={contact.name}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-border
                  px-6
                  py-3
                  transition
                  hover:-translate-y-1
                  hover:border-primary
                  hover:bg-primary/10
                "
              >

                <Icon
                  size={20}
                />

                {contact.name}


                <ArrowUpRight
                  size={16}
                  className="
                    opacity-0
                    transition
                    group-hover:opacity-100
                  "
                />

              </a>

            );

          })}


        </div>



        <div
          className="
            mt-16
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-primary/10
            px-5
            py-2
            text-sm
            text-primary
          "
        >

          <span
            className="
              h-2
              w-2
              rounded-full
              bg-primary
              animate-pulse
            "
          />

          Disponível para oportunidades

        </div>


      </div>

    </section>

  );
}