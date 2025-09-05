import { createContext, useEffect, useState } from "react"
import apiUrl from "../api";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    // Shopping Cart | Increment quantity
    const [count, setCount] = useState(0);
    // Product Detail | Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)
    // Checkout Side Menu | Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)
    // Product Detail | Show Product
    const [productToShow, setProductToShow] = useState({
        title: "",
        price: "",
        description: "",
        images: [],
    })

    // Shopping Cart | Add products to cart
    const [cartProducts, setCartProducts] = useState([])

    // Shopping Cart | Order
    const [order, setOrder] = useState([])

    // Get products
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${apiUrl}/products`);
                const data = await res.json();
                setItems(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
    }

    useEffect(() => {
        if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle));
        else setFilteredItems(items);
    }, [items, searchByTitle])

    return (
        <ShoppingCartContext.Provider
            value={{
                count,
                setCount,
                isProductDetailOpen,
                openProductDetail,
                closeProductDetail,
                isCheckoutSideMenuOpen,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,
                productToShow,
                setProductToShow,
                cartProducts,
                setCartProducts,
                order,
                setOrder,
                items,
                setItems,
                searchByTitle,
                setSearchByTitle,
                filteredItems,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}