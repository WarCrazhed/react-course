import { useContext } from "react"
import OrdersCard from "../../Components/OrdersCard"
import { ShoppingCartContext } from "../../Context"
import { Link } from "react-router-dom"

function MyOrders() {
    const { order } = useContext(ShoppingCartContext)

    return (
        <>
            <div className="flex items-center justify-center relative w-80">
                <h1>My Orders</h1> 
            </div>
            {
                order?.map((order, index) => (
                    <Link
                        to={`/my-orders/${order.id}`}
                        key={index}
                    >
                        <OrdersCard
                            totalPrice={order.totalPrice}
                            totalProducts={order.totalProducts}
                        />
                    </Link>
                ))
            }
            <OrdersCard />
        </>
    )
}

export default MyOrders