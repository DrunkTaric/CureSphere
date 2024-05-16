import ThemePicker from "@/components/ui/theme-picker";
import { IoMenu } from "react-icons/io5";
import { Button } from "../ui/button";
import Link from "next/link";

const routes = [
  { route: "/", label: "Home" },
  { route: "/about", label: "About" },
  { route: "/futures", label: "Futures" },
  { route: "/contacts", label: "Contact" },
  { route: "/forums", label: "Forums" }
]

export default function Nav() {
  return (
    <div className="absolute p-3 grid grid-cols-5 lg:grid-cols-9 w-full">
      <div className="xl:col-start-2 ml-auto mr-auto">
        <a className="text-3xl font-bold">Logo</a>
      </div>

      <div className="hidden lg:grid col-start-3 col-span-4 xl:col-start-4 xl:col-span-3 grid grid-cols-5 gap-5 text-gray-500">
        {
          routes.map((route, index) => {
            return <Link
              key={index}
              className="m-auto w-fit text-xl 2xl:text-2xl font-medium hover:text-primary hover:cursor-pointer transition-all"
              href={route.route}
            >{route.label}</Link>
          })
        }
      </div>

      <div className="hidden col-start-8 flex space-x-3 lg:flex">
        <Button color="accent" className="rounded-2xl w-[5rem]" asChild>
          <Link href={"signin"}>SignIn</Link>
        </Button>
        <Button variant={"link"} className="rounded-2xl w-[5rem]" asChild>
          <Link href={"signup"}>SignUp</Link>
        </Button>
        <ThemePicker />
      </div>

      <div className="flex col-start-5 lg:hidden">
        <Button variant={"ghost"} size="icon" className="ml-auto mr-auto" asChild>
          <IoMenu />
        </Button>
      </div>
    </div>
  )
}
