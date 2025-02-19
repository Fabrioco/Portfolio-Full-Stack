"use client";

import { motion } from "framer-motion";
export function TitleContacts() {
  return (
    <motion.h1
      className="text-3xl font-bold text-title w-full"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
    >
      Formas de me contatar
    </motion.h1>
  );
}
