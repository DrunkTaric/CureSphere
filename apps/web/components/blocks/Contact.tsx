import { Label } from "../ui/label";
import { FaFax } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbBrandGithub } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact({ type, text }: { type: "email" | "location" | "fax" | "github", text: string }) {
  return (
    <div className="flex w-fit h-8 space-x-3">
      {type == "email" ? <MdEmail className="h-full w-7" /> : <></>}
      {type == "location" ? <FaLocationDot className="h-full w-7" /> : <></>}
      {type == "fax" ? <FaFax className="h-full w-7" /> : <></>}
      {type == "github" ? <TbBrandGithub className="h-full w-7" /> : <></>}
      <Label className="mt-auto mb-auto">{text}</Label>
    </div>
  )
}
