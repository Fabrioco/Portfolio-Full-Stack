import { DescriptionAboutMe } from "@/ui/aboutMe/description";
import { TitleAboutMe } from "@/ui/aboutMe/title";
import { GridBackEndLearnings } from "@/ui/learnings/gridBackEnd";
import { GridDatabaseLearnings } from "@/ui/learnings/gridDatabase";
import { GridFrontEndLearnings } from "@/ui/learnings/gridFrontEnd";
import { GridOthersLearnings } from "@/ui/learnings/gridOthers";
import { NavButtonsLearnings } from "@/ui/learnings/navButtons";
import { TitleLearnings } from "@/ui/learnings/title";

export default function AboutMe() {
  return (
    <div className="w-11/12 h-auto flex flex-col md:flex-row justify-center items-center text-white px-2 gap-10 mx-auto">
      <div className="flex flex-col items-center gap-10">
        <TitleAboutMe />
        <DescriptionAboutMe />
      </div>
      <div className="hidden w-11/12 md:w-1/2 lg:flex flex-col justify-center gap-10">
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
