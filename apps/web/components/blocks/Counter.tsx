import { ReactNode } from "react";
import CountUp from "react-countup";

export default function Counter({ count, icon }: { count: number, icon: ReactNode }) {
  return (
    <div className="">
      <div className="">
        {icon}
      </div>
      <CountUp end={count} />
    </div>
  )
}
