"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Project } from "./project";
import { ModalAddProject } from "./modalAddProject";

interface ProjectData {
  id: number;
  title: string;
  category: string;
  time_worked: string;
  image: string;
  link: string;
}

export function ProjectsList() {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.altKey && event.ctrlKey && event.key.toLowerCase() === "p") {
        event.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("http://localhost:5000/api/projects");

        if (!response.ok) throw new Error("Erro ao buscar projetos");

        const data: ProjectData[] = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Erro ao buscar projetos:", error);
      } finally {
      }
    }

    fetchProjects();
  }, []);
  console.log(projects);
  return (
    <div className="w-full overflow-x-auto flex flex-row md:gap-10 gap-5 items-center">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, scale: 0, zIndex: 0 }}
          animate={{ opacity: 1, scale: 1, zIndex: 1 }}
          exit={{ opacity: 0, scale: 0, zIndex: 0 }}
          transition={{ duration: 0.5, delay: index * 0.5 }}
        >
          <Project project={project} />
        </motion.div>
      ))}
      {isOpen && (
        <AnimatePresence>
          <ModalAddProject setIsOpen={setIsOpen} />
        </AnimatePresence>
      )}
    </div>
  );
}
