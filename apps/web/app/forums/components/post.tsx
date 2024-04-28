import { Label } from "@/components/ui/label";

interface PostInterface {
  user: { image: string, firstname: string, lastname: string };
  post: { title: string, text: string };
}

export default function Post(props: PostInterface) {
  return (
    <div className="w-full max-h-[15rem] h-fit bg-gray-500 bg-opacity-50 rounded-2xl p-5">
      <section className="flex h-[25%]">
        <div className="w-12 h-12 bg-gray-500 bg-opacity-50 rounded-full"></div>
        <Label className="mt-auto mb-auto ml-3 text-lg">{props.user.firstname}</Label>
      </section>
      <section className="w-full h-[60%] p-2">
        <Label>{props.post.text}</Label>
      </section>
      <section className="flex w-full h-[16%]">
        <Label className="mr-0 ml-auto text-gray-400 text-opacity-50">2014/12/1 01:30PM</Label>
      </section>
    </div>
  )
}
