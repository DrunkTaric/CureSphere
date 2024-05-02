import { MdOutlineQuestionMark } from "react-icons/md";
import Futrue from "./components/future";

import { IoTimeOutline } from "react-icons/io5";

export default function Futures() {
  return (
    <main className="flex min-h-screen items-center justify-center p-20">
      <section className="w-[30%] space-y-16">
        <Futrue index={1} icon={<IoTimeOutline className="w-full h-full m-auto p-2" />} title={"24/7"} body={"Enjoy peace of mind with our 24/7 availability, ensuring quality healthcare whenever you need it for continuous support and care."} />
        <div className="ml-24">
          <Futrue index={3} icon={<IoTimeOutline className="w-full h-full m-auto p-2" />} title={"Safety First"} body={"Your safety is paramount. We employ advanced security measures to ensure a protected environment throughout your experience with us."} />
        </div>
        <Futrue index={2} icon={<IoTimeOutline className="w-full h-full m-auto p-2" />} title={"Tests"} body={"Access comprehensive care with state-of-the-art tests and advanced equipment, ensuring accurate results for personalized healthcare tailored to your needs."} />
      </section>

      <MdOutlineQuestionMark className="w-[40%] h-fit" />

      <section className="w-[30%] space-y-16">
        <div className="ml-24">
          <Futrue index={4} icon={<IoTimeOutline className="w-full h-full m-auto p-2" />} title={"Compassionate Care"} body={"Experience a patient-centered approach with compassionate care at every step, ensuring your comfort and satisfaction."} />
        </div>
        <Futrue index={6} icon={<IoTimeOutline className="w-full h-full m-auto p-2" />} title={"Health Care"} body={"Discover top-notch medical care paired with excellent insurance coverage for your peace of mind and comprehensive well-being."} />
        <div className="ml-24">
          <Futrue index={5} icon={<IoTimeOutline className="w-full h-full m-auto p-2" />} title={"Orthopedic Care"} body={"Experience advanced orthopedic care with the latest technology at affordable prices, prioritizing both innovation and your financial well-being."} />
        </div>
      </section>
    </main>
  )
}
