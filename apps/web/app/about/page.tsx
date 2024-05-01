import { RiMicroscopeFill } from "react-icons/ri";
import { FaHeartbeat } from "react-icons/fa";
import { IoHappy } from "react-icons/io5";
import Imag from "@/components/ui/imag";
import dynamic from "next/dynamic";
import { Label } from "@/components/ui/label";

const Counter = dynamic(() => import("../../components/blocks/Counter").then(module => module.default), { ssr: false })

const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

export default function About() {

  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-24">
      <section className="flex space-x-28">
        <Imag
          width={720}
          height={400}
          alt={"Hospital Image"}
          className="rounded-2xl h-[25rem] w-[45rem]"
          src="https://static8.depositphotos.com/1323776/855/i/450/depositphotos_8557494-stock-photo-generic-modern-empty-office-building.jpg"
        />

        <section className="flex flex-col max-w-[50rem] mt-auto mb-auto space-y-5">
          <Label className="text-4xl text-primary">Hospital Name</Label>
          <Label className="text-2xl">{text}</Label>
        </section>
      </section>

      <section className="flex space-x-24 mt-14">
        <Counter text={"Happy Patient"} count={22000000} icon={<IoHappy className="w-full h-full" />} />
        <Counter text={"Surgeries"} count={120000} icon={<FaHeartbeat className="w-full h-full" />} />
        <Counter text={"Endoscopy"} count={1450000} icon={<RiMicroscopeFill className="w-full h-full" />} />
      </section>
    </main>
  )
}
