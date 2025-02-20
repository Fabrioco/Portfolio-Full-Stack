import { LinkSimple } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  project: {
    id: number;
    title: string;
    category: string;
    time_worked: string;
    image: string;
    link: string;
  };
}

export function Project({ project }: ProjectProps) {
  console.log(project);

  return (
    <div className="w-72 h-80 bg-main flex flex-col justify-between p-5 rounded-md shadow-md shadow-stroke">
      <Image
        src={project.image} // Usando a imagem do projeto
        alt={project.title} // Alt dinamicamente com o título do projeto
        width={100}
        height={24}
        className="w-full h-auto z-0 object-cover rounded-md"
      />
      <h2 className="text-2xl font-bold">{project.title}</h2>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-lg">{project.category}</p>{" "}
          {/* Usando a categoria do projeto */}
          <p className="text-gray-400 text-sm">{project.time_worked}</p>{" "}
          {/* Usando o tempo de trabalho */}
        </div>
        <Link
          href={project.link} // Link dinâmico para o projeto
          className="flex items-center justify-center bg-button rounded-full p-2 w-fit text-buttonText active:scale-95 transition-all active:bg-opacity-55 border-button border-2"
        >
          <LinkSimple size={24} color="#fffffe" />
        </Link>
      </div>
    </div>
  );
}
