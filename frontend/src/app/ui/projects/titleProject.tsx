"use client";
import { motion } from "framer-motion";

export function TitleProject() {
  return (
    <motion.h1
      className="text-3xl font-bold text-title"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
    >
      Meus Projetos
    </motion.h1>
  );
}
