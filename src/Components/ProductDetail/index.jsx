import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context';

const ProductDetail = () => {
    const { isProductDetailOpen, closeProductDetail, productToShow } = useContext(ShoppingCartContext);
    console.log('Product to show ', productToShow);

    return (
        <aside
            className={isProductDetailOpen ? "top-[68px] w-[360px] h-[calc(100vh-68px)] flex flex-col fixed right-0 border border-black rounded-lg bg-white" : "hidden"}
        >
            <div className="flex justify-between items-center p-6">
                <h2 className="text-xl font-medium">Detail</h2>
                <button
                    onClick={() => closeProductDetail()}
                    className="w-6 h-6 cursor-pointer text-black hover:text-black/80"
                >
                    <XMarkIcon className="size-6" />
                </button>
            </div>
            <figure className='px-6'>
                <img
                    className='w-full h-full rounded-lg'
                    src={productToShow.images[0]}
                    alt={productToShow.title}
                />
            </figure>
            <p className="flex flex-col p-6">
                <span className='font-medium text-2xl mb-2'>{productToShow.price}</span>
                <span className='font-medium text-md'>{productToShow.title}</span>
                <span className='font-light text-sm'>{productToShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail