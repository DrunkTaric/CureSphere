import { Button } from "../ui/button";
import FontLabel from "../ui/font";
import { Label } from "../ui/label";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="absolute p-3 grid grid-cols-6 w-full">
      <div>
        <Label className="text-3xl font-bold">Logo</Label>
      </div>

      <div className="col-start-3 col-span-2 grid grid-cols-5 text-gray-500">
        <Link className="m-auto w-fit" href="/"><FontLabel family="Viga" text="Home" className="text-2xl hover:text-white hover:cursor-pointer transition-all" /></Link>
        <Link className="m-auto w-fit" href="/about"><FontLabel family="Viga" text="About" className="text-2xl hover:text-white hover:cursor-pointer transition-all" /></Link>
        <Link className="m-auto w-fit" href="#"><FontLabel family="Viga" text="Futrues" className="text-2xl hover:text-white hover:cursor-pointer transition-all" /></Link>
        <Link className="m-auto w-fit" href="#"><FontLabel family="Viga" text="Contact" className="text-2xl hover:text-white hover:cursor-pointer transition-all" /></Link>
        <Link className="m-auto w-fit" href="/forums"><FontLabel family="Viga" text="Formus" className="text-2xl hover:text-white hover:cursor-pointer transition-all" /></Link>
      </div>

      <div className="col-start-6 flex space-x-3">
        <Button className="rounded-2xl w-[5rem]">SignIn</Button>
        <Button variant={"link"} className="rounded-2xl w-[5rem]">SignOut</Button>
      </div>
    </div>
  )
}
