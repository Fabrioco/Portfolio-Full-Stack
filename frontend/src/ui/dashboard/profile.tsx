"use client";
import { Hand } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from "next/image";
export function Profile() {
  return (
    <motion.div
      className="relative w-[300px] h-[300px] bg-main rounded-full p-2 shadow-stroke shadow"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="absolute -top-3 -right-5 bg-main text-black px-4 py-2 rounded-md rounded-bl-none w-fit font-bold flex items-center gap-2">
        Oi, eu sou Fabrício
        <i>
          <Hand size={24} weight="fill" className="rotate-45" color="#E4C39F" />
        </i>
        <span className="absolute w-4 h-4 bg-main rotate-45 -bottom-2 left-1"></span>
      </p>
      <Image
        src="/profile.jpeg"
        alt="Vercel Logo"
        width={500}
        height={500}
        className="w-full h-full rounded-full"
      />
    </motion.div>
  );
}
