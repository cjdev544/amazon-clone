import { type OrderUser } from '@/types.d'
import { format } from 'date-fns'

interface Props {
  order: OrderUser
}

export function Order({ order }: Props) {
  return (
    <article className='relative border rounded-md'>
      <div className='flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600'>
        <div>
          <p className='font-bold text-xs'>FECHA PEDIDO</p>
          <p>{format(order.timestamp, 'dd/MM/yyyy')}</p>
        </div>
        <div>
          <p className='text-xs font-bold'>TOTAL</p>
          <p>
            {order.amount} $ - Envío {order.amountShipping}
          </p>
        </div>
        <p className='text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500'>
          {order.items.length} Productos
        </p>
        <p className='absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap'>
          PEDIDO # {order.id}
        </p>
      </div>
      <div className='p-5 sm:p-10'>
        <div className='flex space-x-6 overflow-x-auto'>
          {order.images.map((image, idx) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={idx}
              src={image}
              alt='imagen de producto'
              className='h-20 object-contain sm:h-32'
            />
          ))}
        </div>
      </div>
    </article>
  )
}
