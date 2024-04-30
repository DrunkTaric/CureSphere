"use client"

import Font from "react-font"
import { Label } from "./label"

export default function FontLabel({ text, family, className }: { text: string, family: string, className?: string }) {
  return <Font family={family}><Label className={className}>{text}</Label></Font>
}
