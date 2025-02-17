"use client";

import React from "react";

export function ToggleSwitch() {
  const [isOn, setIsOn] = React.useState<boolean>(false);
  return (
    <button
      onClick={() => setIsOn(!isOn)}
      className={`relative w-32 h-10 flex items-center rounded-full p-1 transition-all duration-300 bg-black text-main `}
    >
      <p className="absolute left-2 text-sm font-bold uppercase z-10">en-US</p>
      <div
        className={`w-14 h-9 bg-button rounded-full shadow-md transform transition-all duration-300 
          ${isOn ? "translate-x-16" : "translate-x-0"}`}
      />
      <p className="absolute right-2 text-sm font-bold uppercase">pt-BR</p>
    </button>
  );
}
