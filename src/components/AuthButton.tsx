'use client'

import { useAuth } from '@/hooks/useAuth'
import { getOrdersUser } from '@/services/userOrders'
import { useEffect } from 'react'

export function AuthButton() {
  const { user, login, logout } = useAuth()

  useEffect(() => {
    if (user) getOrdersUser(user.email)
  }, [user])

  return (
    <div className='link' onClick={user ? () => logout() : () => login()}>
      <p>{user ? `Hola ${user.name}` : 'Hola indentifícate'}</p>
      <p className='font-extrabold md:text-sm'>Cuenta y Listas</p>
    </div>
  )
}
