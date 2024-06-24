'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className='fixed z-10 w-full backdrop-blur-lg '>
            <div className='flex justify-between items-center mx-5 py-2'>
                <Link href='/'>
                    <h1 className='font-bold text-xl'>
                        Maju Jaya Lancar
                    </h1>
                </Link>
                <section className='hidden sm:block'>
                    <ul className='flex space-x-4'>
                        <li>
                            <Link href='/#home' className='hover:underline'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href='/#about' className='hover:underline'>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href='/#service' className='hover:underline'>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href='/contact' className='hover:underline'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </section>
                <section className='block sm:hidden'>
                    <Sheet  >
                        <SheetTrigger>
                            <FaBars />
                        </SheetTrigger>
                        <SheetContent side={'right'} >
                            <SheetHeader>
                                <SheetDescription className='mt-5'>
                                    <ul className={`flex flex-col space-y-4 `}>
                                        <li>
                                            <Link href='#home' className='hover:underline'>
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='#about' className='hover:underline'>
                                                About
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='#service' className='hover:underline'>
                                                Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='#contact' className='hover:underline'>
                                                Contact
                                            </Link>
                                        </li>
                                    </ul>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                </section>
            </div>
        </nav>
    )
}

export default Navbar