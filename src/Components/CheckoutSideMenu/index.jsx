import { XMarkIcon } from "@heroicons/react/24/solid"
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const CheckoutSideMenu = () => {
    const { isCheckoutSideMenuOpen, closeCheckoutSideMenu } = useContext(ShoppingCartContext);

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
        </aside>
    )
}

export default CheckoutSideMenu