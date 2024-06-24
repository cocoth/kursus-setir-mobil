'use client'
import Navbar from '@/components/navbar/Navbar'
import { columns } from '@/components/table/columns'
import { DataTable } from '@/components/table/data-table'
import { Card } from '@/components/ui/card'
import { Order } from '@prisma/client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const AdminPage = () => {
  const [orders, setOrders] = useState<Order[]>([])
  const router = useRouter()
  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('token')
      if (!token) {
        router.push('/login')
        return
      }
      try {
        const res = await fetch('/api/orders', {
          headers: {
            Authorization: `Bearer ${token}`
          },
        })
        if (res.status === 401) {
          router.push('/login')
          return
        }
        const data = await res.json()
        setOrders(data)
      } catch (error) {
        console.error(error)
        router.push('/login')
      }
    }
    fetchOrders()
  }, [])
  return (
    <div>
      <Navbar />
      <div className="pt-14 mx-3">
        <Card className='p-2'>
          <h1 className='font-bold text-xl text-center'>
            Admin Dashboard
          </h1>
          <div className='h-[1px] w-full bg-gray-700 my-2'/>
          <DataTable columns={columns} data={orders} />
        </Card>
      </div>
    </div>
  )
}

export default AdminPage