import { XMarkIcon } from '@heroicons/react/24/solid'

const OrdersCard = ({ totalPrice, totalProducts }) => {

    return (
        <div className='flex justify-between items-center mb-3 boder border-black'>
            <p>
                <span>o1.02.23</span>
                <span>{totalPrice}</span>
                <span>{totalProducts}</span>
            </p>
        </div>
    )
}

export default OrdersCard