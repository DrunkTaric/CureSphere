import Contact from "@/components/blocks/Contact";
import Imag from "@/components/ui/imag";
import Link from "next/link";

export default function Contacts() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-24 space-y-5">
      <Imag
        alt={"image of the hospistal location on the map"}
        width={900}
        height={400}
        src={"https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"}
        className="rounded-2xl scale-95 hover:scale-100 transition-all duration-500"
      />
      <section className="flex h-[9rem] w-fit mr-[30rem]">
        <section className="mt-auto mb-0">
          <Contact type={"fax"} text={"+201068555860"} />
          <Contact type={"email"} text={"hospital@info.com"} />
          <Contact type={"github"} text={"github.com/DrunkTaric"} />
          <Contact type={"location"} text={"52 example street, cairo"} />
        </section>
        <div className="bg-primary rounded-2xl w-2 h-full ml-4 mr-4" />
        <section className="flex flex-col mt-auto mb-0 space-y-1">
          <Link href="/" className="p-0 h-fit w-fit text-blue-500">Home</Link>
          <Link href="/about" className="p-0 h-fit w-fit text-blue-500">About</Link>
          <Link href="/forums" className="p-0 h-fit w-fit text-blue-500">Forums</Link>
          <Link href="/futures" className="p-0 h-fit w-fit text-blue-500">Futures</Link>
          <Link href="/contacts" className="p-0 h-fit w-fit text-blue-500">Contacts</Link>
        </section>
      </section>
    </main>
  )
}
