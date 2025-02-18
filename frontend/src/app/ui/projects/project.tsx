import { LinkSimple } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

import Link from "next/link";

export function Project() {
  return (
    <div className="w-72 h-80 bg-main flex flex-col justify-between p-5 rounded-md shadow-md shadow-stroke">
      <Image
        src="/teste.png"
        alt="Vercel Logo"
        width={100}
        height={24}
        className="w-full h-auto z-0 object-cover rounded-md"
      />
      <h2 className="text-2xl font-bold">Nome do projeto</h2>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-lg">E-commerce</p>
          <p className="text-gray-400 text-sm">Cinco Semanas</p>
        </div>
        <Link
          href=""
          className="flex items-center justify-center bg-button rounded-full p-2 w-fit text-buttonText active:scale-95 transition-all active:bg-opacity-55 border-button border-2"
        >
          <LinkSimple size={24} color="#fffffe" />
        </Link>
      </div>
    </div>
  );
}
