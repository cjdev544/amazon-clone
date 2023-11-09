import { CheckoutLeft } from '@/components/CheckoutLeft'
import { CheckoutRight } from '@/components/CheckoutRight'

export default function Checkout() {
  return (
    <div className='lg:flex'>
      <CheckoutLeft />
      <CheckoutRight />
    </div>
  )
}
