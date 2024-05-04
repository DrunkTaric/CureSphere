import Counter from "@/components/blocks/Counter";
import { Label } from "@/components/ui/label";
import { FaDoorOpen } from "react-icons/fa6";
import { FaHeartPulse } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";

export default function Patient() {
  return (
    <main className="flex min-h-screen w-full p-10 pt-24 space-x-10">

      <section id="left" className="space-y-10">
        <section id="quick-info" className="h-fit w-fit space-y-3">
          <Label className="text-3xl font-semibold ml-5">Information</Label>
          <section className="flex w-fit h-fit p-5 space-x-8">
            <div className="w-36 h-36 mt-auto mb-auto bg-primary rounded-full"></div>
            <section className="space-y-5">
              <div className="w-96 h-4 bg-primary rounded-3xl" />
              <div className="w-96 h-4 bg-primary rounded-3xl" />
              <div className="w-96 h-4 bg-primary rounded-3xl" />
              <div className="w-96 h-4 bg-primary rounded-3xl" />
              <div className="w-96 h-4 bg-primary rounded-3xl" />
            </section>
          </section>
        </section>

        <section id="counters" className="flex h-fit space-x-5">
          <div className="flex flex-col w-[11rem]">
            <FaBed className="w-16 h-16 ml-auto mr-auto" />
            <Label className="ml-auto mr-auto text-2xl font-bold">Resident</Label>
            <Label className="h-6 ml-auto mr-auto text-xl text-primary font-bold">Yes</Label>
          </div>
          <Counter icon={<FaDoorOpen className="w-16 h-16 ml-auto mr-auto" />} text="Visits" count={500} />
          <Counter icon={<FaHeartPulse className="w-16 h-16 ml-auto mr-auto" />} text="Surgeries" count={500} />
        </section>

        <section id="doctor-comments" className="space-y-3">
          <Label className="text-3xl font-semibold ml-5">Comments</Label>
          <section className="w-42 h-56 p-5 ring ring-primary rounded-2xl">
          </section>
        </section>
      </section>

      <section id="middle" className="flex flex-col h-fit w-fit space-y-12">
        <section className="space-y-3">
          <Label className="text-3xl font-semibold ml-5">Medical Records</Label>
          <section className="w-[40rem] h-72 p-5 ring ring-primary rounded-2xl">
          </section>
        </section>

        <section className="space-y-3">
          <Label className="text-3xl font-semibold ml-5">Appointments</Label>
          <section className="w-[40rem] h-72 p-5 ring ring-primary rounded-2xl">
          </section>
        </section>
      </section>

      <section id="right" className="flex flex-col w-full space-y-12">
        <section className="space-y-3">
          <Label className="text-3xl font-semibold ml-5">Bills</Label>
          <section className="w-full h-72 p-5 ring ring-primary rounded-2xl">
          </section>
        </section>

        <section className="space-y-3">
          <Label className="text-3xl font-semibold ml-5">Bills</Label>
          <section className="w-full h-72 p-5 ring ring-primary rounded-2xl">
          </section>
        </section>
      </section>

    </main>
  )
}
