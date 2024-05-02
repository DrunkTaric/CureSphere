import { Button } from "../ui/button";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="absolute p-3 grid grid-cols-6 w-full">
      <div className="ml-auto mr-auto">
        <a className="text-3xl font-bold">Logo</a>
      </div>

      <div className="col-start-3 col-span-2 grid grid-cols-5 text-gray-500">
        <Link className="m-auto w-fit text-2xl font-medium hover:text-white hover:cursor-pointer transition-all" href="/">Home</Link>
        <Link className="m-auto w-fit text-2xl font-medium hover:text-white hover:cursor-pointer transition-all" href="/about">About</Link>
        <Link className="m-auto w-fit text-2xl font-medium hover:text-white hover:cursor-pointer transition-all" href="/futures">Futures</Link>
        <Link className="m-auto w-fit text-2xl font-medium hover:text-white hover:cursor-pointer transition-all" href="/contacts">Contact</Link>
        <Link className="m-auto w-fit text-2xl font-medium hover:text-white hover:cursor-pointer transition-all" href="/forums">Forums</Link>
      </div>

      <div className="col-start-6 flex space-x-3">
        <Button className="rounded-2xl w-[5rem]">SignIn</Button>
        <Button variant={"link"} className="rounded-2xl w-[5rem]">SignUp</Button>
      </div>
    </div>
  )
}
