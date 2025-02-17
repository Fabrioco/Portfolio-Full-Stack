import { DescriptionAboutMe } from "@/app/ui/aboutMe/description";
import { TitleAboutMe } from "@/app/ui/aboutMe/title";
import { GridBackEndLearnings } from "@/app/ui/learnings/gridBackEnd";
import { GridDatabaseLearnings } from "@/app/ui/learnings/gridDatabase";
import { GridFrontEndLearnings } from "@/app/ui/learnings/gridFrontEnd";
import { GridOthersLearnings } from "@/app/ui/learnings/gridOthers";
import { NavButtonsLearnings } from "@/app/ui/learnings/navButtons";
import { TitleLearnings } from "@/app/ui/learnings/title";

export default function AboutMe() {
  return (
    <div className="w-11/12 h-auto flex flex-col md:flex-row justify-center items-center text-white px-2 gap-10 mx-auto">
      <div className="flex flex-col items-center gap-10">
        <div className="text-center w-10/12 md:w-1/2">
          <TitleAboutMe />
        </div>
        <div className="w-10/12 md:w-1/2  text-justify text-paragraph mb-4">
          <DescriptionAboutMe />
        </div>
      </div>
      <div className="hidden w-11/12 md:w-1/2 md:flex flex-col justify-center gap-10">
        <TitleLearnings />
        <NavButtonsLearnings />
        <GridFrontEndLearnings />
        {/* <GridBackEndLearnings /> */}
        {/* <GridDatabaseLearnings /> */}
        {/* <GridOthersLearnings /> */}
      </div>
    </div>
  );
}
