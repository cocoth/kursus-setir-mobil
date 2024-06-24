"use client"

import { Order } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { LuArrowUpDown } from "react-icons/lu";
import { Checkbox } from "../ui/checkbox"
import Link from "next/link"



export const columns: ColumnDef<Order>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: "No",
        header: "No",
        cell: ({ row }) => {
            return <p>{row.index + 1}</p>
        }
    },
    {
        accessorKey: "nama",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Nama
                    <LuArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "nomerWa",
        header: "Nomer Wa",
    },
    {
        accessorKey: "tanggalKursus",
        header: "Tanggal kursus",
        cell: ({ row }) => {
            const formattedDate = new Date(row.original.tanggalKursus).toLocaleDateString()
            return (
                <p>{formattedDate}</p>
            )
        }
    },
    {
        accessorKey: "jamKursus",
        header: "Jam kursus",
        cell: ({ row }) => {
            const formattedTime = row.original.jamKursus.split('.')[0]
            return <p>{formattedTime}</p>
        }
    },
    {
        accessorKey: "jenisKursus",
        header: "Jenis kursus",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const ori = row.original
            let noWa = ori.nomerWa;
            if (noWa.startsWith("08")) {
                noWa = "628" + noWa.slice(2);
            }

            const confirmOrder = (
                `https://wa.me/${noWa}?text=Halo%20${ori.nama},%20terimakasih%20sudah%20mendaftar%20kursus%20di%20Maju%20Jaya%20Lancar.%20Berikut%20detail%20kursus%20anda%3A%0A%0A%20-%20Tanggal%20kursus%3A%20${new Date(ori.tanggalKursus).toLocaleDateString()}%0A%20-%20Jam%20kursus%3A%20${ori.jamKursus.split('.')[0]}%0A%20-%20Jenis%20kursus%3A%20${ori.jenisKursus}%0A%0A%20Silahkan%20konfirmasi%20kursus%20anda%20dengan%20membalas%20chat%20ini%20%0A`
            )
            const cancelOrder = (
                `https://wa.me/${noWa}?text=Halo%20${ori.nama},%20kami%20mohon%20maaf%20kursus%20anda%20di%20Maju%20Jaya%20Lancar%20dibatalkan.%20Berikut%20detail%20kursus%20anda%3A%0A%0A%20-%20Tanggal%20kursus%3A%20${new Date(ori.tanggalKursus).toLocaleDateString()}%0A%20-%20Jam%20kursus%3A%20${ori.jamKursus.split('.')[0]}%0A%20-%20Jenis%20kursus%3A%20${ori.jenisKursus}%0A%0A`
            )

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <IoEllipsisHorizontalSharp className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(ori.nomerWa)}
                        >
                            Copy Nomer whatsapp
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="flex gap-3">
                            <Link
                                href={cancelOrder}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1 bg-red-700/80 rounded-md"
                            >
                                Cancel
                            </Link>
                            <Link
                                href={confirmOrder}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1 bg-blue-700 rounded-md"
                            >
                                Confirm
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
