import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import clsx from "clsx";

interface FormInputInterface {
  name: string
  type: string
  label: string
  state: Function
  className?: string
  placeholder: string
}

export default function FormInput(props: FormInputInterface) {
  if (props.type == "file") {
    return (
      <div className={clsx("flex flex-col space-y-1 h-full", props.className)}>
        <Label className="text-xl font-mono font-bold">{props.label}</Label>
        <input id="file" type="file" className="hidden" />
        <button onClick={() => { document.getElementById("file")?.click() }} className="flex flex-col items-center justify-center border-2 w-full h-[80%] rounded-2xl">
          <Label className="text-lg font-mono font-bold text-gray-400">Click to select</Label>
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-1">
      <Label className="text-xl font-mono font-bold">{props.label}</Label>
      <Input type={props.type} placeholder={props.placeholder} className="h-auto p-3 text-lg font-mono" />
    </div>
  )
}
