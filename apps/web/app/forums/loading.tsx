import { Skeleton } from "@/components/ui/skeleton";

export default function Forums() {
  return (
    <main className="flex h-screen w-full items-center justify-center p-24 pb-12">
      <section className="w-[45rem] h-full rounded-2xl">
        <section className="flex h-fit p-5 pb-0 pt-0 space-x-8 justify-center items-center">
          <Skeleton className="w-20 h-20 rounded-full" />
          <Skeleton className="flex w-[35rem] h-fit p-8 border-2 border-transparent rounded-2xl hover:bg-opacity-70 transition-all" />
        </section>
        <section className="flex p-5">
          <Skeleton className="h-[1.5rem] w-[10rem] ml-auto mr-auto rounded-2xl" />
        </section>
        <section className="max-h-[40rem] space-y-5 overflow-y-auto pl-5 pr-5">
          {
            [1, 2, 3].map((item, index) => {
              return (
                <Skeleton className="bg-gray-500 bg-opacity-50 w-full h-[12.3rem] p-5 rounded-2xl" key={index}>
                  <section className="flex h-[25%] space-x-5">
                    <Skeleton className="w-[2.5rem] h-full rounded-full" />
                    <Skeleton className="w-[10rem] h-[1.5rem] mt-auto mb-auto rounded-2xl" />
                  </section>

                  <section className="flex flex-col h-[60%] p-3 space-y-3">
                    <Skeleton className="w-full h-[1rem] rounded-2xl" />
                    <Skeleton className="w-full h-[1rem] rounded-2xl" />
                    <Skeleton className="w-[70%] h-[1rem] rounded-2xl" />
                  </section>

                  <section className="flex h-[15%]">
                    <Skeleton className="w-[10rem] h-[1rem] rounded-2xl mr-0 ml-auto" />
                  </section>
                </Skeleton>
              )
            })
          }
        </section>
      </section>
    </main>
  )
}
