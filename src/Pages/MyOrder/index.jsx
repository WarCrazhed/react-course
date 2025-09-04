import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Link, useParams } from "react-router-dom";

function MyOrder() {
    const { order } = useContext(ShoppingCartContext);
    const { index } = useParams();

    const orderIndex = index ? index : order?.length - 1;
    
    return (
        <div>
            <div className="flex items-center justify-center relative w-80 mb-2">
                <Link
                    to="/my-orders"
                    className="text-black absolute left-0 cursor-pointer"
                >
                    <ChevronLeftIcon className="size-6" />
                </Link>
                <h1>My Order</h1>
            </div>
            <div className="flex flex-col w-80">
                {
                    order?.[orderIndex].products?.map((product) => (
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