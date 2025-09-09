import { XMarkIcon } from '@heroicons/react/24/solid'
import { useImgValidate } from '../../hooks/useImgValidate';

const OrderCard = ({ id, title, imageUrl, price, handleDelete }) => {
    const { imageError, handleImageError } = useImgValidate();

    let renderXMarkIcon

    if (handleDelete) {
        renderXMarkIcon = <button
            onClick={() => handleDelete(id)}
            className='cursor-pointer text-black hover:text-black/80'
        >
            <XMarkIcon className="size-6" />
        </button>
    }

    return (
        <div className='flex justify-between items-center mb-3'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    {imageError ? (
                        <div className="flex items-center justify-center w-full h-full bg-gradient-to-b from-gray-50 to-gray-100 rounded-lg text-gray-400 text-sm text-center p-4 shadow-md">
                            Image Not Available
                        </div>
                    ) : (
                        <img className='w-full h-full rounded-lg shadow-md object-cover' src={imageUrl} alt={title} onError={handleImageError} />
                    )}
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>${price}</p>
                {renderXMarkIcon}
            </div>
        </div>
    )
}

export default OrderCard