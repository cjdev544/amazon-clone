import { useSession, signIn, signOut } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { type User } from '@/types.d'

export function useAuth() {
  const [user, setUser] = useState<User | undefined | null>(undefined)

  const { data } = useSession()

  useEffect(() => {
    if (data?.user?.email && data?.user?.name) {
      setUser({
        uid: data.user.email,
        name: data.user.name,
      })
    }
  }, [data])

  const login = () => signIn()
  const logout = () => signOut()

  return {
    user,
    login,
    logout,
  }
}
