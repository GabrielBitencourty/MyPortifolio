import { ExternalLink } from "lucide-react";
import { BsGithub } from "react-icons/bs";

const projects = [
  {
    title: "StockFlow",
    description:
      "Sistema de gerenciamento de estoque com autenticação, API e interface moderna.",
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
    ],
    github:"#",
    demo:"#",
  },

  {
    title:"Hyper Sets Trainer",
    description:
      "Aplicativo mobile para gerenciamento de treinos e evolução fitness.",
    technologies:[
      "Flutter",
      "Dart",
      "Hive",
    ],
    github:"https://github.com/GabrielBitencourty/HyperSets",
    demo:"#",
  },

  {
    title:"Coffee-Shop",
    description:
      "E-commerce de café com carrinho de compras, checkout e integração com API.",
    technologies:[
      "React",
      "Node.js",
    ],
    github:"https://github.com/GabrielBitencourty/Coffee-Shop",
    demo:"https://coffeshopb.netlify.app/",
  }

];


export function Projects(){

return(

<section
 id="projects"
 className="
  scroll-mt-24
  px-6
  py-32
 "
>

<div
className="
max-w-7xl
mx-auto
"
>


<span
className="
text-primary
font-semibold
"
>
PROJETOS
</span>


<h2
className="
mt-4
text-4xl
font-bold
md:text-5xl
"
>
Projetos que mostram
minha experiência.
</h2>


<div
className="
mt-16
grid
gap-8
md:grid-cols-2
"
>


{projects.map((project)=>(
<div
key={project.title}
className="
group
rounded-3xl
border
border-border
bg-card
p-8
transition
hover:-translate-y-2
hover:shadow-xl
"
>


<h3
className="
text-2xl
font-semibold
"
>
{project.title}
</h3>


<p
className="
mt-4
text-muted-foreground
"
>
{project.description}
</p>



<div
className="
mt-6
flex
flex-wrap
gap-2
"
>

{project.technologies.map((tech)=>(
<span
key={tech}
className="
rounded-full
bg-primary/10
px-3
py-1
text-sm
text-primary
"
>
{tech}
</span>
))}

</div>



<div
className="
mt-8
flex
gap-3
"
>

<a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  className="
    flex
    items-center
    gap-2
    rounded-full
    border
    px-4
    py-2
    text-sm
    transition
    hover:bg-primary/10
  "
>
  <BsGithub size={16}/>
  GitHub
</a>


<a
  href={project.demo}
  target="_blank"
  rel="noopener noreferrer"
  className="
    flex
    items-center
    gap-2
    rounded-full
    bg-primary
    px-4
    py-2
    text-sm
    text-primary-foreground
    transition
    hover:opacity-90
  "
>
  <ExternalLink size={16}/>
  Demo
</a>


</div>



</div>
))}


</div>


</div>

</section>

)

}