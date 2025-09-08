import { XMarkIcon } from "@heroicons/react/24/solid"
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../utils";
import { Link } from "react-router-dom";

const CheckoutSideMenu = () => {
    const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts, setCartProducts, order, setOrder, setSearchByTitle } = useContext(ShoppingCartContext);

    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter(product => product.id !== id);
        setCartProducts(filteredProducts);
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: new Date(),
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts)
        }

        setOrder([...order, orderToAdd])
        setCartProducts([])
        setSearchByTitle(null)
        closeCheckoutSideMenu()
    }

    return (
        <aside
            className={isCheckoutSideMenuOpen ? "top-[68px] w-[360px] h-[calc(100vh-68px)] z-10 flex flex-col fixed right-0 border border-black rounded-lg bg-white" : "hidden"}
        >
            <div className="flex justify-between items-center p-6">
                <h2 className="text-xl font-medium">My Order</h2>
                <button
                    onClick={() => closeCheckoutSideMenu()}
                    className="w-6 h-6 cursor-pointer text-black hover:text-black/80"
                >
                    <XMarkIcon className="size-6" />
                </button>
            </div>
            <div className="px-6 overflow-y-scroll flex-1">
                {
                    cartProducts.map((product) => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images[0]}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className="px-6 mb-6">
                <p className="flex justify-between items-center mb-2">
                    <span className="font-light">Total</span>
                    <span className="font-medium text-2xl">${totalPrice(cartProducts)}</span>
                </p>
                <Link
                    to={'/my-orders/last'}
                >
                <button
                    className="w-full py-3 text-white bg-black rounded-lg cursor-pointer"
                    onClick={() => handleCheckout()}
                >Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu