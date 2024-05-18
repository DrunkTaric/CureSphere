"use client"

import Imag from "@/components/ui/imag";
import { Input } from "@/components/ui/input";
import { alphabet, email, fullname, password, phone } from "@/utils/regex";
import { useState } from "react";
import { z } from "zod";
import FormInput from "./components/form-input";

export function SignUp() {
  return (
    <main className="flex min-h-screen items-center justify-center p-3 md:p-12 xl:p-24">
      <div className="flex w-fit h-fit p-10 border-2 rounded-3xl space-x-20">
        <section className="xl:w-[50rem] w-full xl:h-[40rem] grid grid-cols-2 grid-rows-6 gap-5">
        </section>

        <section className="w-[15rem] max-h-[40rem] hidden xl:flex">
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

const schema = z.object({
  fullname: z.string()
    .min(7, "Enter your full name please")
    .refine((value) => alphabet.test(value ?? ""), 'Name should contain only alphabets')
    .refine((value) => fullname.test(value ?? ""), 'Please enter both firstname, middlename and lastname'),
  email: z.string()
    .min(9, "your email is not valid")
    .refine((value) => email.test(value ?? ""), 'Please enter a valid email'),
  password: z.string()
    .min(8, "")
    .refine((value) => password.test(value ?? ""), "Please enter a valid password"),
  address: z.string(),
  phone: z.string()
    .min(10, "Please enter a valid phone number")
    .refine((value) => phone.test(value ?? "")),
  civil_id: z.string()
    .min(14, "please enter a valid civil id")
    .max(14, "Please enter a valid civil id"),
  civil_id_image: z.any()
    .refine((files) => files?.[0]?.size <= 5000000, "Max image size is 5mb")
    .refine((files) => ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(files?.[0]?.type), "Only jpg, jpeg, png and webp formats are supported."),
  user_image: z.any()
    .refine((files) => files?.[0]?.size <= 5000000, "Max image size is 5mb")
    .refine((files) => ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(files?.[0]?.type), "Only jpg, jpeg, png and webp formats are supported."),
  dateofbirth: z.date(),
})

export default function SignUp2() {
  const [SubmitData, setSubmitData] = useState<typeof schema>()

  return (
    <main className="p-3 md:p-12 xl:p-24">
      <section className="w-full h-full border-2 rounded-2xl border-primary">
        <h1 className="p-5 text-3xl font-mono font-bold text-center">Signup Form</h1>
        <section className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
          <FormInput label="Full name" name="fullname" placeholder="Enter your full name" state={setSubmitData} type="text" />
          <FormInput label="Civil ID" name="civil_id" placeholder="Enter your civil ID" state={setSubmitData} type="text" />
          <Imag
            alt="doctor image"
            src="/models/doctor.png"
            className="object-contain row-span-10 ml-auto mr-auto hidden lg:flex"
            width={400}
            height={400}
          />
          <FormInput label="Civil ID" name="civil_id" placeholder="Enter your civil ID" state={setSubmitData} type="text" />
          <FormInput label="Civil ID" name="civil_id" placeholder="Enter your civil ID" state={setSubmitData} type="text" />
          <FormInput label="Civil ID" name="civil_id" placeholder="Enter your civil ID" state={setSubmitData} type="text" />
          <FormInput label="Civil ID" name="civil_id" placeholder="Enter your civil ID" state={setSubmitData} type="text" />
          <FormInput label="Civil ID" name="civil_id" placeholder="Enter your civil ID" state={setSubmitData} type="text" />
        </section>
      </section>
    </main>
  )
}
