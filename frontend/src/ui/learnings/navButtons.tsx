"use client";
import React from "react";
import { motion } from "framer-motion";

const buttonText = ["Front-End", "Back-end", "Banco de Dados", "Outros"];

interface NavButtonsLearningsProps {
  onSelect: (text: string) => void;
}

export function NavButtonsLearnings({ onSelect }: NavButtonsLearningsProps) {
  const [indexButton, setIndexButton] = React.useState<number>(0);

  return (
    <nav className="flex gap-4 items-center overflow-x-auto text-nowrap">
      {buttonText.map((text, index) => (
        <motion.button
          key={index}
          onClick={() => {
            setIndexButton(index);
            onSelect(text);
          }}
          className={`bg-button border border-button text-buttonText px-4 py-2 font-bold rounded-full transition-all duration-50 active:scale-95 shadow-button shadow-inner
            ${indexButton === index ? "bg-opacity-45" : ""}
          `}
          initial={{ opacity: 0, x: -100, scale: 0 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }} // Reduzi o delay para evitar animação lenta
        >
          {text}
        </motion.button>
      ))}
    </nav>
  );
}
