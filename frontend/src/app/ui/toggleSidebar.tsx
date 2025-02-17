"use client";
import { SidebarSimple, X } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";

export const ToggleSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-50">
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={() => setIsOpen(false)}
        />
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 bg-gray-800 text-white rounded-md z-50"
      >
        {isOpen ? <X size={24} /> : <SidebarSimple size={24} />}
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-5 transition-transform duration-300 
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <h2 className="text-xl font-bold mb-5">Navegação</h2>
        <ul>
          <li className="mb-3">
            <Link href="/dashboard">Home</Link>
          </li>
          <li className="mb-3">
            <Link href="/aboutMe">Sobre mim</Link>
          </li>
          <li className="mb-3">
            <Link href="/projects">Projetos</Link>
          </li>
          <li className="mb-3">
            <Link href="/contact">Contato</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
