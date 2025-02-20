"use client";
import React from "react";
import { GridBackEndLearnings } from "./gridBackEnd";
import { GridDatabaseLearnings } from "./gridDatabase";
import { GridFrontEndLearnings } from "./gridFrontEnd";
import { GridOthersLearnings } from "./gridOthers";
import { NavButtonsLearnings } from "./navButtons";

export function SelectionCategory() {
  const [selectedComponent, setSelectedComponent] =
    React.useState<React.JSX.Element | null>(null);

  const handleSelect = (selectedText: string) => {
    switch (selectedText) {
      case "Front-End":
        setSelectedComponent(<GridFrontEndLearnings />);
        break;

      case "Back-end":
        setSelectedComponent(<GridBackEndLearnings />);
        break;

      case "Banco de Dados":
        setSelectedComponent(<GridDatabaseLearnings />);
        break;

      case "Outros":
        setSelectedComponent(<GridOthersLearnings />);
        break;

      default:
        setSelectedComponent(null);
        break;
    }
  };

  return (
    <>
      <NavButtonsLearnings onSelect={handleSelect} />
      <div className="w-full h-[400px]">{selectedComponent}</div>
    </>
  );
}
