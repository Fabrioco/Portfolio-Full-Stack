import { LinkSimple } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { ProjectData } from "./projectsList";

export function Project({
  category,
  image,
  link,
  time_worked,
  title,
}: ProjectData) {
  return (
    <div className="w-72 h-96 bg-main flex flex-col justify-between p-5 rounded-md shadow-md shadow-stroke">
      <Image
        src={image}
        alt={title}
        width={250}
        height={250}
        className="w-full h-auto z-0 object-cover rounded-md"
      />
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col">
          <p className="text-lg">{category}</p>
          <p className="text-gray-400 text-sm">{time_worked}</p>
        </div>
        <Link
          href={link}
          className="flex items-center justify-center bg-button rounded-full p-2 w-fit text-buttonText active:scale-95 transition-all active:bg-opacity-55 border-button border-2"
        >
          <LinkSimple size={24} color="#fffffe" />
        </Link>
      </div>
    </div>
  );
}
