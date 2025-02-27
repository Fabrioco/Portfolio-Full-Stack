"use client";
import { FileText, Share } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Dropdown } from "./dropdown";

export function Description() {
  const [isActive, setIsActive] = React.useState<boolean>(false);
  return (
    <motion.div
      className="flex flex-col items-center gap-5 relative"
      initial={{ opacity: 0, y: 300 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 300 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold">Full Stack Web</h1>
      <div className="flex flex-row gap-5 items-center">
        <button
          className={`flex items-center gap-3 px-4 py-2 bg-button rounded-full font-semibold text-lg text-buttonText active:scale-95 transition-all active:bg-opacity-55 border-button border-2 ${
            isActive && "bg-opacity-45"
          }`}
          onClick={() => setIsActive(!isActive)}
        >
          Contate me <Share size={24} weight="fill" color="#fffffe" />
        </button>
        <a
          download={"Curriculo-Fabricio.pdf"}
          href="/Curriculo-Fabricio.pdf"
          className="flex items-center gap-3 px-4 py-2 bg-button rounded-full font-semibold text-lg text-buttonText active:scale-95 transition-all active:bg-opacity-55 border-button border-2"
        >
          Currículo <FileText size={24} weight="fill" color="#fffffe" />
        </a>
      </div>
      <AnimatePresence>{isActive && <Dropdown />}</AnimatePresence>
    </motion.div>
  );
}
