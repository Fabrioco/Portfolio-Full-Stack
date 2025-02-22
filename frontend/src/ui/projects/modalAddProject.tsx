"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export function ModalAddProject({
  setIsOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
}) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [time_worked, setTimeWorked] = useState("");
  const [link, setLink] = useState("");
  const [tag, setTag] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleAddProject = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Selecione uma imagem");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("time_worked", time_worked);
    formData.append("link", link);
    formData.append("tag", tag);
    formData.append("image", selectedFile);

    try {
      const response = await fetch(
        "https://portfolio-full-stack-n2or.onrender.com/api/projects",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Erro desconhecido no servidor");
      }

      const data = await response.json();
      console.log("Projeto criado com sucesso:", data);

      setIsOpen(false);
    } catch (error) {
      console.error("Erro ao adicionar projeto:", error);
      alert("Erro ao adicionar projeto: " + error);
    }
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

        <form onSubmit={handleAddProject}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700">
              Título
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
            <input
              type="text"
              id="tag"
              className="w-full p-2 border border-gray-300 rounded-md"
              onChange={(e) => setTag(e.target.value)}
              value={tag}
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
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Adicionar
          </button>
        </form>
      </motion.div>
    </div>
  );
}
