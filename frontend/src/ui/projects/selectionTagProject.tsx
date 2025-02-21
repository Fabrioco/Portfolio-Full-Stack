"use client";
import React from "react";
import { NavButtonsProjects } from "./navButton";
import { ProjectsList } from "./projectsList";

export function SelectionTagProject() {
  const [tagSelected, setTagSelected] = React.useState<string>("");

  const handleSelect = (selectedText: string) => {
    setTagSelected(selectedText);
  };

  return (
    <>
      <NavButtonsProjects handleSelect={handleSelect} />
      {!tagSelected && (
        <p className="text-white font-bold text-2xl">
          Selecione uma tag para visualizar os projetos
        </p>
      )}
      <ProjectsList tag={tagSelected} />
    </>
  );
}
