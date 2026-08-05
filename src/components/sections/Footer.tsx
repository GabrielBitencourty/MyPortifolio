import {Mail } from "lucide-react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";


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

  return (

    <footer
      className="
        border-t
        border-border
        px-6
        py-10
      "
    >

      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          justify-between
          gap-6
          md:flex-row
        "
      >


        {/* Logo / Texto */}

        <div
          className="
            text-center
            md:text-left
          "
        >

          <h2
            className="
              text-xl
              font-bold
            "
          >
            Gabriel Bitencourt
            <span className="text-primary">
              .
            </span>
          </h2>


          <p
            className="
              mt-1
              text-sm
              text-muted-foreground
            "
          >
            Software Engineer
          </p>

        </div>




        {/* Redes */}

        <div
          className="
            flex
            items-center
            gap-4
          "
        >

          {links.map((link)=>{

            const Icon = link.icon;


            return (

              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-border
                  transition
                  hover:border-primary
                  hover:bg-primary/10
                  hover:text-primary
                "
              >

                <Icon size={18}/>

              </a>

            );

          })}

        </div>


      </div>



      {/* Bottom */}

      <div
        className="
          mx-auto
          mt-8
          max-w-7xl
          text-center
          text-sm
          text-muted-foreground
        "
      >

        © {new Date().getFullYear()} Gabriel Bitencourt.
        Todos os direitos reservados.

      </div>


    </footer>

  );
}