import { Heart, User, Menu } from "../icons"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger
} from "../ui/sheet"
import { Separator } from "../ui/separator"
import { Button } from "../ui/button"

export default function Nav() {
  return (
    <section>
      <nav class="flex justify-between text-white w-full">
        <div class="px-8 xl:px-12 py-6 flex w-full items-center">
          <a class="text-3xl font-bold font-heading" href="#">
            Logo
          </a>
          <ul class="hidden md:flex px-4 mx-auto space-x-12">
            <li>
              <a class="hover:text-gray-200" href="#">Home</a>
            </li>
            <li>
              <a class="hover:text-gray-200" href="#">About</a>
            </li>
            <li>
              <a class="hover:text-gray-200" href="#">Services</a>
            </li>
            <li>
              <a class="hover:text-gray-200" href="#">Reviews</a>
            </li>
            <li>
              <a class="hover:text-gray-200" href="#">Forum</a>
            </li>
            <li>
              <a class="hover:text-gray-200" href="#">Contact Us</a>
            </li>
          </ul>
          <div class="flex items-center mr-0 ml-auto md:space-x-5">
            <a class="hidden xl:flex hover:text-gray-200" href="#">
              <Heart/>
            </a>
            <a class="hidden xl:flex hover:text-gray-200" href="#">
              <User/>
            </a>
            <Sheet>
              <SheetTrigger class="flex self-center xl:hidden"><Menu></Menu></SheetTrigger>
              <SheetContent position="left" class="w-[400px] sm:w-[540px] border-0">
                <div class="p-5">
                  <div id="active_user" class="flex">
                    <User class="w-24 h-24"/>
                    <div class="mt-auto mb-auto ml-4">
                      <h1 class="text-2xl font-bold">Guest</h1>
                      <div class="flex h-5 items-center justify-center">
                        <Button size="default" variant="link" class="p-0">Sign In</Button>
                        <Separator orientation="vertical" class="h-full ml-2 mr-2"/>
                        <Button size="default" variant="link" class="p-0">Create Account</Button>
                      </div>
                    </div>
                  </div>
                  <Separator class="my-4"/>
                  <div class="flex flex-col space-y-4">
                    <Button size="lg" variant="ghost" class="p-2 text-2xl items-center justify-start">Home</Button>
                    <Button size="lg" variant="ghost" class="p-2 text-2xl items-center justify-start">About</Button>
                    <Button size="lg" variant="ghost" class="p-2 text-2xl items-center justify-start">Services</Button>
                    <Button size="lg" variant="ghost" class="p-2 text-2xl items-center justify-start">Reviews</Button>
                    <Button size="lg" variant="ghost" class="p-2 text-2xl items-center justify-start">Forum</Button>
                    <Button size="lg" variant="ghost" class="p-2 text-2xl items-center justify-start">Contact Us</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </section>
  )
}
