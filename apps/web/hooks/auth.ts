import { User } from "@prisma/client"
import React, { useState, useEffect } from "react"

interface Error {
  status: number
  msg: string
}

interface Data {
  status: number
  data: User
}

export function useAuth() {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [isError, setError] = useState<Error | null>(null)
  const [Data, setData] = useState<Data | null>(null)
  const [isAuth, setAuth] = useState<boolean>(false)

  async function Logout() {
    setLoading(true)
    try {
      await fetch("api/auth/logout")
      setAuth(false)
      setLoading(true)
    } catch (_) {
      setAuth(false)
      setError({
        status: 503,
        msg: "Internal Server Error"
      })
      setLoading(false)
    }
  }

  async function Login(username?: string, password?: string) {
    try {
      const request = await fetch("/api/auth/login", {
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password
        })
      })
      const response = await request.json()

      if (response.data > 0) {
        setData(response.data)
        setAuth(true)
      } else {
        setData(null)
        setAuth(false)
      }

    } catch (_) {
      setAuth(false)
      setError({
        status: 503,
        msg: "Internal Server Error"
      })
      setLoading(false)
    }
  }

  useEffect(() => {
    async function checkAuth() {
      setLoading(true)
      try {
        const request = await fetch("/api/auth/check");
        const response = await request.json()

        if (response.error) {
          setAuth(false)
          setError({
            status: response.error.status,
            msg: response.error.message
          })
          setLoading(false)
          return
        }

        await Login()

      } catch (_) {
        setAuth(false)
        setError({
          status: 503,
          msg: "Internal Server Error"
        })
        setLoading(false)
      }
    }
    checkAuth()
  }, [])

  return { isLoading, isAuth, isError, Login, Logout, Data }
}
