import { ChevronRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = ({ totalPrice, totalProducts }) => {

    return (
        <div className='flex justify-between items-center mb-3 border border-black rounded-lg p-4 w-80 gap-3'>
            <div className='flex justify-between w-full'>
                <div className="flex flex-col">
                <span className='font-light'>01.02.23</span>
                <span className='font-light'>{totalProducts} articles</span>
                </div>
                <div className='flex items-center gap-2'>
                <span className='font-medium text-2xl'>${totalPrice}</span>
                <ChevronRightIcon className='size-6 text-black' />
                </div> 
            </div>
        </div>
    )
}

export default OrdersCard