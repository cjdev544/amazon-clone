import { collection, getDocs, query } from 'firebase/firestore'
import db from '@/firebase/config'
import { getUnixTime } from 'date-fns'
import { type DataBaseOrder } from '@/types.d'

export const getOrdersUser = async (email: string) => {
  const array: DataBaseOrder[] = []

  const q = query(collection(db, `users/${email}/orders`))
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    array.push({
      id: doc.id,
      amount: doc.data().amount,
      amountShipping: doc.data().amount_shipping,
      images: doc.data().images,
      timestamp: getUnixTime(doc.data().timestamp.toDate()),
    })
  })

  array.sort((a, b) => b.timestamp - a.timestamp)
  return array
}
