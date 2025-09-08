import { useContext } from "react"
import OrdersCard from "../../Components/OrdersCard"
import { ShoppingCartContext } from "../../Context"
import { Link } from "react-router-dom"

function MyOrders() {
    const { order } = useContext(ShoppingCartContext)

    return (
        <>
            <div className="flex items-center justify-center relative w-80 mb-4">
                <h1 className="font-medium text-xl">My Orders</h1> 
            </div>
            {
                order?.map((order, index) => (
                    <Link
                        to={`/my-orders/${index}`}
                        key={index}
                    >
                        <OrdersCard
                            date={order.date}
                            totalPrice={order.totalPrice}
                            totalProducts={order.totalProducts}
                        />
                    </Link>
                ))
            }
        </>
    )
}

export default MyOrders