import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";

function MyOrder() {
    const { order } = useContext(ShoppingCartContext)

    return (
        <div>
            MyOrder
            <div className="flex flex-col w-80">
                {
                    order?.slice(-1)[0].products?.map((product) => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images[0]}
                            price={product.price}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default MyOrder