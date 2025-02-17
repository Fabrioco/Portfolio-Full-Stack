"use client";
import { Share } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export function Description() {
  return (
    <motion.div
      className="flex flex-col items-center gap-5"
      initial={{ opacity: 0, y: 300 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 300 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold">Full Stack Web</h1>
      <button className="flex items-center gap-3 px-4 py-2 bg-button rounded-full font-semibold text-lg text-buttonText active:scale-95 transition-all active:bg-opacity-55 border-button border-2">
        Contate me <Share size={24} weight="fill" color="#fffffe" />
      </button>
    </motion.div>
  );
}
