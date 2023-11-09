'use client'

import { useAuth } from '@/hooks/useAuth'

export function AuthButton() {
  const { user, login, logout } = useAuth()

  return (
    <div className='link' onClick={user ? () => logout() : () => login()}>
      <p>{user ? `Hola ${user.name}` : 'Hola indentifícate'}</p>
      <p className='font-extrabold md:text-sm'>Cuenta y Listas</p>
    </div>
  )
}
