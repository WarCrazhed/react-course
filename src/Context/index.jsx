import { createContext, useEffect, useState } from "react"
import apiUrl from "../api";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
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
    const [searchByCategory, setSearchByCategory] = useState(null);

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

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()));
    }

    const filterBy = (searchType) => {
        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchByTitle);
        }
        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory);
        }
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(filteredItemsByTitle(items, searchByTitle), searchByCategory);
        }
        if (!searchType) {
            return items;
        }
    }

    useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY'));
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE'));
        if (searchByCategory && !searchByTitle) setFilteredItems(filterBy('BY_CATEGORY'));
        if (!searchByTitle && !searchByCategory) setFilteredItems(items);
    }, [items, searchByTitle, searchByCategory])

    return (
        <ShoppingCartContext.Provider
            value={{
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
                searchByCategory,
                setSearchByCategory,
                filteredItems,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}