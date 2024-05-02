import AnimatedDiv from "@/components/blocks/AnimatedDiv";
import { Label } from "@/components/ui/label";
import { ReactElement } from "react";

export default function Futrue({ index, title, body, icon }: { index: number, title: string, body: string, icon: ReactElement }) {
  return (
    <AnimatedDiv custom={false} delay={index * 0.2} duration={0.5} preset={"fadein"} className="w-fit h-fit">
      <div className="flex space-x-3">
        <div className="w-16 h-16 bg-accent rounded-full">
          {icon}
        </div>
        <Label className="mt-auto mb-auto text-2xl font-bold">{title}</Label>
      </div>

      <div className="w-full pl-20">
        <Label className="text-lg">{body}</Label>
      </div>
    </AnimatedDiv>
  )
}
