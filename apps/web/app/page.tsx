import AnimatedDiv from "@/components/blocks/AnimatedDiv";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6 xl:p-12 xl:space-x-12 2xl:space-x-32">
      <div className="flex flex-col">
        <Label className="text-center xl:text-start text-5xl sm:text-7xl">Welcome</Label>
        <Label className="text-4xl sm:text-7xl w-auto">To our <Label className="text-5xl sm:text-7xl bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">Hospital</Label></Label>
        <div className="flex mt-5 ml-auto mr-auto xl:ml-0 xl:mr-0">
          <Button size={"lg"} className="rounded-2xl">Explore</Button>
          <Button size={"lg"} variant={"link"} className="pl-5 pr-5" asChild><Link href="/forums">go to forums</Link></Button>
        </div>
      </div>
      <div className="hidden xl:grid w-[35rem] 2xl:w-[45rem] h-[35rem] 2xl:grid-cols-3 grid-cols-2 grid-rows-2 gap-5">
        <AnimatedDiv custom={false} duration={0.5} delay={0} preset="fadein" className="w-full bg-red-400 rounded-2xl" />
        <AnimatedDiv custom={false} duration={0.5} delay={0.3} preset="fadein" className="w-full bg-blue-400 rounded-2xl" />
        <AnimatedDiv custom={false} duration={0.5} delay={0.6} preset="fadein" className="w-full 2xl:row-span-2 bg-green-400 rounded-2xl" />
        <AnimatedDiv custom={false} duration={0.5} delay={0.9} preset="fadein" className="w-full 2xl:col-span-2 bg-yellow-400 rounded-2xl" />
      </div>
    </main>
  );
}
