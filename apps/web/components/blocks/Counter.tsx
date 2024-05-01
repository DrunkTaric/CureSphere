"use client"

import { ReactNode } from "react";
import CountUp from "react-countup";
import { Label } from "../ui/label";

export default function Counter({ text, count, icon }: { text: string, count: number, icon: ReactNode }) {
  return (
    <div className="flex flex-col w-[11rem] max-h-fit">
      <div className="ml-auto mr-auto w-[65%]">
        {icon}
      </div>
      <div className="ml-auto mr-auto">
        <Label className="text-2xl font-bold">{text}</Label>
      </div>
      <CountUp className="h-6 text-xl text-primary text-center font-bold" duration={3.5} end={count} />
    </div>
  )
}
