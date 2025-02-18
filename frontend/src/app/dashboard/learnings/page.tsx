import { GridBackEndLearnings } from "@/ui/learnings/gridBackEnd";
import { GridDatabaseLearnings } from "@/ui/learnings/gridDatabase";
import { GridFrontEndLearnings } from "@/ui/learnings/gridFrontEnd";
import { GridOthersLearnings } from "@/ui/learnings/gridOthers";
import { NavButtonsLearnings } from "@/ui/learnings/navButtons";
import { TitleLearnings } from "@/ui/learnings/title";

export default function Learnings() {
  return (
    <div className="w-11/12 md:w-1/2 flex flex-col justify-center mx-auto gap-10 md:text-center lg:hidden">
      <TitleLearnings />
      <NavButtonsLearnings />
      <GridFrontEndLearnings />
      {/* <GridBackEndLearnings />
      <GridDatabaseLearnings />
      <GridOthersLearnings /> */}
    </div>
  );
}
