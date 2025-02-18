"use client";
import React from "react";

export function NavButtonsLearnings() {
  const [indexButton, setIndexButton] = React.useState<number>(0);

  const buttonText = ["Front-End", "Back-end", "Banco de Dados", "Outros"];

  return (
    <nav className="flex gap-4 items-center overflow-x-auto text-nowrap">
      {buttonText.map((text, index) => (
        <button
          key={index}
          onClick={() => setIndexButton(index)}
          className={`bg-button border border-button text-buttonText px-4 py-2 font-bold rounded-full transition-all duration-50 active:scale-95 shadow-button shadow-inner
            ${indexButton === index && "bg-opacity-45"}
          `}
        >
          {text}
        </button>
      ))}
    </nav>
  );
}
