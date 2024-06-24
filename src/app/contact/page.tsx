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
import { DividerHorizontalIcon } from "@radix-ui/react-icons"

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})






export default function ContactPage() {
    const formSchema = z.object({
        nama: z.string().min(2, {
            message: "nama minimal harus 2 karakter",
        }),
        nomerWa: z.string().min(10, {
            message: "nomer wa minimal harus 10 karakter",
        }),
        email: z.string().email({
            message: "email harus valid",
        }),
        tanggalKursus: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
            message: "tanggal kursus harus dalam format YYYY-MM-DD", // 2022-01-01
        }),
        jenisKursus: z.enum(["reguler", "intensif"]),
        jamKursus: z.string().regex(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, {
            message: "jam kursus harus dalam format HH:MM", // 00:00 - 23:59
        }),

    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nama: "",
            nomerWa: "",
            email: "",
            tanggalKursus: new Date().toISOString(),
            jenisKursus: "reguler",
            jamKursus: "08:00",
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const data = {
                ...values,
                tanggalKursus: new Date(values.tanggalKursus).toISOString(),
            }
            console.log({ data })
            console.log({ values })
            const postDataToApi = await fetch('/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            if (postDataToApi.status === 201) {
                alert('Data berhasil disimpan, harap menunggu konfirmasi dari kami melalui email atau whatsapp')
                form.reset()
            } else {
                alert('Data gagal disimpan')
            }
        } catch (error) {
            console.error(error)
            alert('Data gagal disimpan')
        }
    }

    return (
        <div>
            <div>
                <Navbar />
                <section className="pt-14 mx-5">
                    <div className="flex justify-center items-center ">
                        <Card className="py-5 px-3 grid w-full max-w-lg sm:max-w-sm md:max-w-md">
                            <h1 className="font-bold text-xl text-center mb-3">
                                Hubungi Kami
                            </h1>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="grid space-y-3">
                                    <FormField
                                        control={form.control}
                                        name="nama"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Nama
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Nama"
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
                                        name="nomerWa"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Nomer WA
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="tel"
                                                        pattern="[0-9]*"
                                                        inputMode="numeric"
                                                        placeholder="Nomer WA"
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
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Email
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Email"
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
                                        name="tanggalKursus"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Tanggal Kursus
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="date"
                                                        className="rounded-lg"
                                                        step={'1'}
                                                        {...form.register("jamKursus")}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="jamKursus"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Jam Kursus
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="time"
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
                                        name="jenisKursus"
                                        render={({ field }) => (
                                            <FormItem className="grid">
                                                <FormLabel>
                                                    Jenis Kursus
                                                </FormLabel>
                                                <FormControl>
                                                    <select
                                                        className="bg-transparent border rounded-md p-2 w-full"
                                                        {...field}
                                                    >
                                                        <option
                                                            className="bg-gray-950 border rounded-md p-2 w-full"
                                                            value="reguler"
                                                        >
                                                            Reguler
                                                        </option>
                                                        <option
                                                            className="bg-gray-950 border rounded-md p-2 w-full"
                                                            value="intensif"
                                                        >
                                                            Intensif
                                                        </option>
                                                    </select>
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
                    </div>
                </section>

            </div>
        </div>
    )
}
