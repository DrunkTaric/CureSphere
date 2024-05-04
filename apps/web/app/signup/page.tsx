"use client"

import { Button } from "@/components/ui/button";
import Imag from "@/components/ui/imag";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

export default function SignUp() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div className="flex w-fit h-fit p-10 border-2 rounded-3xl space-x-20">
        <section className="w-[50rem] h-[40rem] grid grid-cols-2 grid-rows-6 gap-5">
        </section>

        <section className="flex w-[15rem] max-h-[40rem]">
          <Imag
            alt="doctor image"
            src="/models/doctor.png"
            className="object-contain"
            width={400}
            height={560}
          />
        </section>
      </div>
    </main>
  )
}
