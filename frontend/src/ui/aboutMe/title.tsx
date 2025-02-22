"use client";
import { motion } from "framer-motion";
export function TitleAboutMe() {
  return (
    <div className="text-center w-10/12 md:w-1/2">
      <motion.h1
        className="text-3xl font-bold text-title w-full"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5 }}
      >
        Olá, eu sou Fabrício Lopes!
      </motion.h1>
    </div>
  );
}
