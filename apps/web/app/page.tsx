import AnimatedDiv from "@/components/blocks/AnimatedDiv";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24 space-x-64">
      <div className="flex flex-col">
        <Label className="text-7xl">Welcome</Label>
        <Label className="text-7xl">To our <Label className="text-7xl bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">Hospital</Label></Label>
        <div className="flex mt-5">
          <Button size={"lg"} className="rounded-2xl">Explore</Button>
          <Button size={"lg"} variant={"link"} className="pl-5 pr-5" asChild><Link href="/forums">go to forums</Link></Button>
        </div>
      </div>
      <div className="w-[45rem] h-[35rem] grid grid-cols-3 grid-rows-2 gap-5">
        <AnimatedDiv delay={0} type="fade" className="w-full bg-red-400 rounded-2xl" />
        <AnimatedDiv delay={0.3} type="fade" className="w-full bg-blue-400 rounded-2xl" />
        <AnimatedDiv delay={0.6} type="fade" className="w-full row-span-2 bg-green-400 rounded-2xl" />
        <AnimatedDiv delay={0.9} type="fade" className="w-full col-span-2 bg-yellow-400 rounded-2xl" />
      </div>
    </main>
  );
}
