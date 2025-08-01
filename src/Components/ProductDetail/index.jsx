import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context';

const ProductDetail = () => {
    const { isProductDetailOpen, closeProductDetail } = useContext(ShoppingCartContext);
    return (
        <aside
            className={isProductDetailOpen ? "top-[68px] w-[360px] h-[calc(100vh-68px)] flex flex-col fixed right-0 border border-black rounded-lg bg-white" : "hidden"}
        >
            <div className="flex justify-between items-center p-6">
                <h2 className="text-xl font-medium">Detail</h2>
                <button
                    onClick={() => {
                        closeProductDetail();
                    }}
                    className="w-6 h-6 cursor-pointer text-black hover:text-black/80"
                >
                    <XMarkIcon className="size-6" />
                </button>
            </div>
        </aside>
    )
}

export default ProductDetail