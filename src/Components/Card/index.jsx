import { useContext } from "react";
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";
import { useImgValidate } from "../../hooks/useImgValidate";

const Card = ({ data }) => {
    const { title, price, images, category: { name } } = data;
    const { openProductDetail, closeProductDetail, setProductToShow, cartProducts, setCartProducts, openCheckoutSideMenu, closeCheckoutSideMenu } = useContext(ShoppingCartContext);

    const { imageError, handleImageError } = useImgValidate();

    const showProduct = (productDetail) => {
        openProductDetail()
        setProductToShow(productDetail)
        closeCheckoutSideMenu()
    }

    const addProductToCart = (e, productData) => {
        e.stopPropagation();
        setCartProducts([...cartProducts, productData]);
        closeProductDetail()
        openCheckoutSideMenu();
    }

    const renderIcon = (id) => {
        const isInCart = cartProducts.filter(product => product.id === id).length > 0;
        if (isInCart) {
            return (
                <div
                    className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1 shadow-md"
                >
                    <CheckIcon className="size-6 text-white" />
                </div>
            )
        } else {
            return (
                <div
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 shadow-md"
                    onClick={(e) => addProductToCart(e, data)}
                >
                    <PlusIcon className="size-6" />
                </div>
            )
        }
    }

    return (
        <div
            onClick={() => showProduct(data)}
            className="bg-white cursor-pointer w-56 h-60 rounded-lg"
        >
            <figure className="relative mb-2 w-full h-4/5">
                {imageError ? (
                    <>
                        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 shadow-md">{name}</span>
                        <div className="flex items-center justify-center w-full h-full bg-gradient-to-b from-gray-50 to-gray-100 rounded-lg text-gray-400 text-sm text-center p-4 shadow-md">
                            Image Not Available
                        </div>
                        {renderIcon(data.id)}
                    </>
                ) : (
                    <>
                        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 shadow-md">{name}</span>
                        <img
                            src={images[0]}
                            className="w-full h-full object-cover rounded-lg"
                            alt={title}
                            onError={handleImageError}
                        />
                        {renderIcon(data.id)}
                    </>
                )}
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{title.slice(0, 25) + (title.length > 25 ? '...' : '')}</span>
                <span className="text-lg font-medium">${price.toFixed(2)}</span>
            </p>
        </div>
    )
}

export default Card