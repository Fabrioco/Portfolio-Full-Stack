"use client";
import { SelectionCategory } from "@/ui/learnings/selectionCategory";
import { TitleLearnings } from "@/ui/learnings/title";
import { redirect } from "next/navigation";
import React from "react";

export default function Learnings() {
  const [isClient, setIsClient] = React.useState<boolean>(false);
  React.useEffect(() => {
    setIsClient(true);

    if (window.innerWidth > 1024) return redirect("/dashboard/aboutMe");
  }, []);

  if (!isClient) return null;

  return (
    <div className="w-11/12 md:w-1/2 flex flex-col justify-center mx-auto gap-10 md:text-center lg:hidden">
      <TitleLearnings />
      <SelectionCategory />
    </div>
  );
}
