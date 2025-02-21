"use client";
import { SidebarSimple, X } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const ToggleSidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            <Link href="/dashboard/aboutMe">Sobre mim</Link>
          </li>
          <li className="mb-3">
            <Link href="/dashboard/projects">Projetos</Link>
          </li>
          {width < 1024 && (
            <li className="mb-3">
              <Link href="/dashboard/learnings">Conhecimentos</Link>
            </li>
          )}
          <li>
            <Link href="/dashboard/contacts">Contatos</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
