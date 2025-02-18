"use client";
import { LinkSimpleBreak } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Project() {
  return (
    <motion.div
      className="bg-main rounded-md p-5 text-black flex flex-col justify-between h-80 min-w-72 relative group hover:bg-opacity-60 transition-all duration-100"
      initial={{ opacity: 0, scale: 0, zIndex: 0 }}
      animate={{ opacity: 1, scale: 1, zIndex: 1 }}
      exit={{ opacity: 0, scale: 0, zIndex: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src="/teste.png"
        alt="Vercel Logo"
        className="w-full h-full absolute top-0 left-0 -z-10 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-100"
        width={100}
        height={24}
      />
      <h2 className="text-2xl font-bold">Projeto Teste</h2>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <p className="text-nowrap">E-commerce</p>
          <p className="text-nowrap text-sm text-gray-400">Cinco semanas</p>
        </div>
        <Link
          href="https://github.com"
          target="_blank"
          className="bg-button rounded-full p-2 flex items-center justify-center transition-all duration-100 active:scale-95 active:bg-opacity-55 border-button border-2"
        >
          <LinkSimpleBreak size={24} color="#fffffe" />
        </Link>
      </div>
    </motion.div>
  );
}
