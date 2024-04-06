import { Heart, User, Menu, Shopping } from "../icons"

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
              <a class="hover:text-gray-200" href="#">Catagory</a>
            </li>
            <li>
              <a class="hover:text-gray-200" href="#">Collections</a>
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
            <a class="flex self-center xl:hidden" href="#">
              <Menu/>
            </a>
          </div>
        </div>
      </nav>
    </section>
  )
}
