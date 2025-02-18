"use client";

import React from "react";
import { motion } from "framer-motion";

const buttonText = ["Front-End", "Back-end", "Full-Stack"];

export function NavButtonsProjects() {
  const [indexButton, setIndexButton] = React.useState<number>(0);
  return (
      <nav className="w-full flex gap-4 items-center overflow-x-auto text-nowrap">
        {buttonText.map((text, index) => (
          <motion.button
            key={index}
            onClick={() => setIndexButton(index)}
            className={`bg-button border border-button text-buttonText px-4 py-2 font-bold rounded-full transition-all duration-50 active:scale-95 shadow-button shadow-inner
            ${indexButton === index && "bg-opacity-45"}
          `}
            initial={{ opacity: 0, x: -100, scale: 0 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0 }}
            transition={{ duration: 0.5, delay: index * 0.5 }}
          >
            {text}
          </motion.button>
        ))}
      </nav>
  );
}
