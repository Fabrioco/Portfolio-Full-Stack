"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export function ModalAddProject({
  setIsOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
}) {
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [time_worked, setTimeWorked] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [tag, setTag] = useState<string>("");

  const [base64Image, setBase64Image] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setSelectedFile(file);

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        setBase64Image(reader.result as string);
      };

      reader.onerror = (error) => {
        console.error("Erro ao converter para Base64:", error);
      };
    }
  };

  const handleAddProject = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!base64Image) {
      alert("Selecione uma imagem");
      return;
    }

    const response = await fetch("http://localhost:5000/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        category,
        time_worked,
        image: base64Image,
        link,
        tag,
      }),
    });

    if (response.ok) {
      setIsOpen(false);
      return;
    }

    if (!response.ok) throw new Error("Erro ao adicionar projeto");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-white p-6 rounded-lg shadow-lg w-96 gap-2"
      >
        <h2 className="text-xl font-bold mb-4">Adicionar Projeto</h2>

        <form onSubmit={(e) => handleAddProject(e)}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700">
              Título
            </label>
            <input
              type="text"
              id="title"
              className="w-full p-2 border border-gray-300 rounded-md"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="time_worked" className="block text-gray-700">
              Tempo trabalhado
            </label>
            <input
              type="text"
              id="time_worked"
              className="w-full p-2 border border-gray-300 rounded-md"
              onChange={(e) => setTimeWorked(e.target.value)}
              value={time_worked}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700">
              Categoria
            </label>
            <input
              type="text"
              id="category"
              className="w-full p-2 border border-gray-300 rounded-md"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700">
              Imagem
            </label>
            <input
              type="file"
              id="image"
              className="w-full p-2 border border-gray-300 rounded-md"
              onChange={handleFileChange}
              accept="image/png"
            />
            <div>
              {base64Image && (
                <Image
                  src={base64Image}
                  alt="Imagem"
                  width={200}
                  height={200}
                />
              )}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="link" className="block text-gray-700">
              Link
            </label>
            <input
              type="text"
              id="link"
              className="w-full p-2 border border-gray-300 rounded-md"
              onChange={(e) => setLink(e.target.value)}
              value={link}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="tag" className="block text-gray-700">
              Tag
            </label>
            <select
              name="tag"
              id="tag"
              className="w-full p-2 border border-gray-300 rounded-md"
              onChange={(e) => setTag(e.target.value)}
              value={tag}
            >
              <option value="" selected disabled>
                Selecione uma tag
              </option>
              <option value="#Front-End">#Front-End</option>
              <option value="#Back-End">#Back-End</option>
              <option value="#Full-Stack">#Full-Stack</option>
            </select>
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Fechar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Adicionar
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
