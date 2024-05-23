"use client"

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from "chart.js";
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaHeartCircleCheck } from "react-icons/fa6";
import Counter from "@/components/blocks/Counter";
import { Label } from "@/components/ui/label";
import { FaHeartbeat } from "react-icons/fa"
import { IoTime } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

function Profile() {
  return (
    <div className="flex p-5 bg-black dark:bg-gray-500 dark:bg-opacity-50 hover:bg-opacity-80 dark:hover:bg-opacity-45 transition-all w-full h-fit rounded-2xl space-x-5 col-span-3">
      <div className="bg-gray-200 h-48 w-48 mt-auto mb-auto rounded-full">
      </div>
      <section className="mt-auto mb-auto w-[65%] space-y-4">
        <div className="bg-gray-200 h-8 w-full rounded-3xl"></div>
        <section className="space-y-2">
          <div className="bg-gray-400 h-3 w-full rounded-3xl"></div>
          <div className="bg-gray-400 h-3 w-full rounded-3xl"></div>
          <div className="bg-gray-400 h-3 w-full rounded-3xl"></div>
          <div className="bg-gray-400 h-3 w-[70%] rounded-3xl"></div>
        </section>
      </section>
    </div>
  )
}

function Soon() {
  return (
    <div className="flex justify-center items-center row-span-3 col-span-2">
      <Label className="text-8xl">Soon</Label>
    </div>
  )
}

function MetaData() {
  return (
    <div className="col-start-6 col-span-2 grid grid-cols-3 w-full h-full">
      <div className="flex justify-center items-center">
        <Counter text="Treated" count={1905} icon={<FaHeartCircleCheck className="w-full h-full m-auto" />} />
      </div>
      <div className="flex justify-center items-center">
        <Counter text="Surgeries" count={1905} icon={<FaHeartbeat className="w-full h-full m-auto" />} />
      </div>
      <div className="flex justify-center items-center">
        <Counter text="Rating" count={5} icon={<FaStar className="w-full h-full m-auto" />} />
      </div>
    </div>
  )
}

function PatientsTreated() {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
  const data = {
    labels,
    datasets: [
      {
        label: 'Patients Treated',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ]
  }
  const options = {
    responsive: true,
  }
  return (
    <div className="flex col-span-3 row-span-2 p-5 bg-black dark:bg-gray-500 dark:bg-opacity-50 transition-all w-full h-[25rem] rounded-2xl">
      <Bar data={data} options={options} />
    </div>
  )
}

function Reviews() {
  return (
    <div className="p-5 col-start-6 col-span-2 row-span-2 bg-black dark:bg-gray-500 dark:bg-opacity-50 transition-all w-full h-full rounded-2xl">
      <div className="border-2 rounded-2xl h-full p-2">
      </div>
    </div>
  )
}

function SmallProfile() {
  return (
    <div className="flex space-x-2 h-full w-[15rem]">
      <div className="bg-gray-200 w-10 h-8 mt-auto mb-auto rounded-full"></div>
      <div className="bg-gray-400 mt-auto mb-auto h-3 w-full rounded-3xl"></div>
    </div>
  )
}

function Date() {
  return (
    <div className="flex space-x-2 h-full w-[15rem]">
      <BsCalendar2DateFill className="w-8 h-8 mt-auto mb-auto" />
      <div className="bg-gray-400 mt-auto mb-auto h-3 w-full rounded-3xl"></div>
    </div>
  )
}

function Time() {
  return (
    <div className="flex space-x-2 h-full w-[15rem]">
      <IoTime className="w-9 h-9 mt-auto mb-auto" />
      <div className="bg-gray-400 mt-auto mb-auto h-3 w-full rounded-3xl"></div>
    </div>
  )
}

function Appointment() {
  return (
    <li className="grid grid-cols-2 h-auto p-5 border-b-2 rounded-2xl">
      <section className="flex flex-col space-y-2">
        <div className="space-x-7">
          <Label className="font-bold text-xl">Price: <Label className="text-green-500 font-bold text-xl">$150.0</Label></Label>
          <Label className="font-bold text-xl">Status: <Label className="text-red-500 font-bold text-xl">Pending</Label></Label>
        </div>
        <div className="flex h-full space-x-7">
          <SmallProfile />
          <SmallProfile />
          <Date />
          <Time />
        </div>
      </section>
    </li>
  )
}

function Appointments() {
  return (
    <div className="w-full h-[50rem] p-5 bg-black dark:bg-gray-500 dark:bg-opacity-50 transition-all col-span-7 rounded-2xl">
      <ol className="w-full h-full border-2 rounded-2xl overflow-y-auto">
        <Appointment />
        <Appointment />
        <Appointment />
        <Appointment />
      </ol>
    </div>
  )
}

export default function Doctor() {
  return (
    <main className="p-24 grid gap-5 grid-cols-7 auto-rows-min w-full min-h-screen">
      <Profile />
      <Soon />
      <MetaData />
      <PatientsTreated />
      <Reviews />
      <Appointments />
    </main>
  )
}
