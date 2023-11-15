import { useSession, signIn, signOut } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { type User } from '@/types.d'

export function useAuth() {
  const [user, setUser] = useState<User | undefined | null>(null)

  const { data } = useSession()

  useEffect(() => {
    if (data?.user?.email && data?.user?.name) {
      setUser({
        uid: data.user.email,
        name: data.user.name,
        email: data.user.email,
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
