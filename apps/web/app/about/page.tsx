import { RiMicroscopeFill } from "react-icons/ri";
import { FaHeartbeat } from "react-icons/fa";
import { IoHappy } from "react-icons/io5";
import Imag from "@/components/ui/imag";
import dynamic from "next/dynamic";
import { Label } from "@/components/ui/label";

const Counter = dynamic(() => import("../../components/blocks/Counter").then(module => module.default), { ssr: false })

const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

export default function About() {
  return (
    <main className="flex flex-col p-5 md:p-10 lg:p-24 space-y-10">
      <section className="grid gap-5 lg:gap-10 xl:gap-18 xl:grid-cols-2">
        <Imag
          width={720}
          height={400}
          alt={"Hospital Image"}
          className="rounded-2xl h-auto w-full max-h-[25rem] lg:max-h-[30rem]"
          src="https://static8.depositphotos.com/1323776/855/i/450/depositphotos_8557494-stock-photo-generic-modern-empty-office-building.jpg"
        />
        <section className="flex flex-col lg:mt-auto lg:mb-auto space-y-5">
          <Label className="text-4xl text-primary text-center xl:text-start">Hospital Name</Label>
          <Label className="text-xl text-center xl:text-start">{text}</Label>
        </section>
      </section>

      <section className="grid gap-5 xl:gap-28 ml-auto mr-auto md:grid-cols-3">
        <Counter text={"Happy Patient"} count={22000000} icon={<IoHappy className="w-full h-full" />} />
        <Counter text={"Surgeries"} count={120000} icon={<FaHeartbeat className="w-full h-full m-auto" />} />
        <Counter text={"Endoscopy"} count={1450000} icon={<RiMicroscopeFill className="w-full h-full m-auto" />} />
      </section>
    </main>
  )
}
