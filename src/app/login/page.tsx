"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Navbar from "@/components/navbar/Navbar"
import { Card } from "@/components/ui/card"
import { adminAuth } from "@/lib/auth/admin-auth"
import { redirect } from "next/navigation"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export default function ContactPage() {
  const formSchema = z.object({
    username: z.string().min(2, {
      message: "nama minimal harus 2 karakter",
    }),
    password: z.string().min(8, {
      message: "password minimal harus 8 karakter",
    }),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    try{
      const token = await adminAuth(values.username, values.password)
      console.log({tokenLogin: token})
      localStorage.setItem("token", token || '')
      window.location.href = "/admin"

    }catch(error){
      alert("Login failed")
    }
    
  }

  return (
    <div>
      <div className="mx-3">
        <Navbar />
        <section className="pt-14 flex justify-center items-center">
          <Card className="py-5 px-3">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="grid space-y-8">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem className="grid gap-3">
                      <FormLabel>
                        username
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Username"
                          className="rounded-lg"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="grid gap-3">
                      <FormLabel>
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Password"
                          type='password'
                          className="rounded-lg"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="rounded-lg"
                >
                  Submit
                </Button>
              </form>
            </Form>
          </Card>
        </section>

      </div>
    </div>
  )
}
