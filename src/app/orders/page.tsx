'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { Order } from '@/components/Order'
import { type OrderUser } from '@/types.d'

export default function Orders() {
  const { user } = useAuth()
  const [orders, setOrders] = useState<OrderUser[]>([])

  useEffect(() => {
    if (user?.email) {
      fetch('/api/stripe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: user.email }),
      })
        .then((res) => res.json())
        .then((json) => setOrders(json.orders))
    }
  }, [user])

  return (
    <div className='p-10 bg-white'>
      <h1 className='text-3xl border-b mb-2 pb-1 border-y-yellow-500'>
        Tus Pedidos
      </h1>
      {user?.email ? (
        <h2>Pedidos: {orders.length}</h2>
      ) : (
        <h2>Inicia sesión para ver tus pedidos</h2>
      )}
      <div className='mt-5 space-y-4'>
        {orders.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  )
}
