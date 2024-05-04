"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"

export default function SignIn() {

  const { toast } = useToast()
  const [Data, setData] = useState<{ email: string, password: string }>({ email: "", password: "" })

  function ValidateData() {
    let error = false
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g

    if (!emailRegex.test(Data.email)) {
      error = true
    } else if (!passwordRegex.test(Data.password)) {
      error = true
    }

    return error
  }

  function Submit() {
    console.log(Data)
    const error = ValidateData()
    console.log(error)
    if (error) {
      toast({
        title: "Error while login",
        description: "Email or Password is incorrect",
        variant: "destructive",
        className: "text-white rounded-2xl"
      })
      return
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div className="w-fit h-fit border-2 border-primary rounded-2xl p-10 space-y-5">
        <div className="space-y-1">
          <Label htmlFor="email-input" className="text-3xl">Email</Label>
          <Input id="email-input" type="email" placeholder="Email" className="outline-none rounded-xl h-14 w-[35rem]" onKeyUp={(e) => {
            setData({ ...Data, email: (e.target as HTMLInputElement).value })
          }} />
        </div>
        <div className="space-y-1">
          <Label htmlFor="password-input" className="text-3xl">Password</Label>
          <Input id="password-input" type="password" placeholder="Password" className="outline-none rounded-xl h-14 w-[35rem]" onKeyUp={(e) => {
            setData({ ...Data, password: (e.target as HTMLInputElement).value })
          }} />
        </div>
        <Button className="w-20 rounded-xl" onClick={Submit}>Login</Button>
      </div>
    </main>
  )
}
