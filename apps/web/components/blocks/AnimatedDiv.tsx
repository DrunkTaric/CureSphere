"use client"

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedDivInterface {
  type: "fade" | "somthing"
  className: string
  children?: ReactNode
  delay: number
}

export default function AnimatedDiv(props: AnimatedDivInterface) {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: "-2rem" }}
      animate={{ opacity: 1, translateX: "0rem" }}
      transition={{ duration: 0.5, delay: props.delay }}
      className={props.className}
    >
      {props.children}
    </motion.div>
  )
}
