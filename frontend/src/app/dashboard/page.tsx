"use client";
import { Hand } from "@phosphor-icons/react/dist/ssr";
import { Share } from "@phosphor-icons/react/dist/ssr";

export default function Dashboard() {
  return (
    <div className="flex justify-center items-center h-auto text-white px-2">
      <div className="w-full flex flex-col items-center justify-center gap-10">
        <div className="relative w-[300px] h-[300px] bg-main rounded-full p-2 shadow-stroke shadow">
          <p className="absolute -top-3 -right-5 bg-main text-black px-4 py-2 rounded-md rounded-bl-none w-fit font-bold flex items-center gap-2">
            Oi, eu sou Fabrício
            <i>
              <Hand
                size={24}
                weight="fill"
                className="rotate-45"
                color="#E4C39F"
              />
            </i>
            <span className="absolute w-4 h-4 bg-main rotate-45 -bottom-2 left-1"></span>
          </p>
          {/* <Image src="https://via.placeholder.com/150" alt="Vercel Logo" width={100} height={24} /> */}
          <div className="w-full h-full rounded-full bg-blue-500"></div>
        </div>
        <h1 className="text-3xl font-bold">Full Stack Web</h1>
        <button className="flex items-center gap-3 px-4 py-2 bg-button rounded-full font-semibold text-lg text-buttonText active:scale-95 transition-all active:bg-opacity-55 border-button border-2">
          Contate me <Share size={24} weight="fill" color="#fffffe" />
        </button>
      </div>
    </div>
  );
}
