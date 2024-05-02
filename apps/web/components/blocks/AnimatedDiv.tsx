"use client"

import { EventInfo, MotionProps, motion } from "framer-motion"

type preset = "fadein" | "fadeout" | "bounce"

interface AnimatedDivProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  delay: number
  duration: number
  preset: preset
  custom: boolean
  className: string
  animation?: MotionProps

  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
  onHoverStart?: (e: MouseEvent, i: EventInfo) => void
  onHoverEnd?: (e: MouseEvent, i: EventInfo) => void
  onFocus?: (e: FocusEventHandler<HTMLDivElement> | undefined) => void
  onBlur?: (e: FocusEventHandler<HTMLDivElement>) => void
}

export default function AnimatedDiv(props: AnimatedDivProps) {
  const animations: { [key in preset]?: MotionProps } = {
    "fadein": {
      initial: { opacity: 0, translateX: "-2rem" },
      animate: { opacity: 1, translateX: "0rem" },
      transition: { duration: props.duration, delay: props.delay }
    },
    "fadeout": {
      initial: { opacity: 1, translateX: "0rem" },
      animate: { opacity: 0, translateX: "-2rem" },
      transition: { duration: props.duration, delay: props.delay }
    },
  }


  return (
    <motion.div
      className={props.className}
      onClick={props.onClick}
      onHoverStart={props.onHoverStart}
      onHoverEnd={props.onHoverEnd}
      onFocus={props.onFocus}
      onBlur={props.onBlur}

      {...(props.custom == false ? (animations[props.preset]) : (props.animation))}
    >
      {props.children}
    </motion.div >
  )
}
