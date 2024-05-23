import { Label } from "@/components/ui/label";
import Post from "./components/post";


const text1 = "as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."

const text2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"

const text3 = "Contrary to popular belief, Lorem Ipsum is not simply random text."

export default async function Forums() {

  return (
    <main className="flex h-screen w-full items-center justify-center p-24 pb-12">
      <section className="w-[45rem] h-full rounded-2xl">
        <section className="flex h-fit p-5 pb-0 pt-0 space-x-8 justify-center items-center">
          <div className="w-20 h-20 bg-gray-500 bg-opacity-50 rounded-full"></div>
          <div className="flex w-[35rem] h-fit bg-gray-500 bg-opacity-50 p-5 border-2 border-transparent rounded-2xl hover:bg-opacity-70 transition-all">
            <Label className="text-xl mt-auto mb-auto font-bold">Type here ...</Label>
          </div>
        </section>
        <section className="flex p-5">
          <Label className="ml-auto mr-auto text-3xl">Posts</Label>
        </section>
        <section className="max-h-[40rem] space-y-5 overflow-y-auto pl-5 pr-5">
          <Post user={{ firstname: "ComboRush", lastname: "", image: "" }} post={{ text: text1, title: "" }} />
          <Post user={{ firstname: "Lebron James", lastname: "", image: "" }} post={{ text: text2, title: "" }} />
          <Post user={{ firstname: "Mahmoud Ismail", lastname: "", image: "" }} post={{ text: text3, title: "" }} />
          <Post user={{ firstname: "Lebron James", lastname: "", image: "" }} post={{ text: text2, title: "" }} />
        </section>
      </section>
    </main>
  )
}
