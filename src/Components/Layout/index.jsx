import { useContext, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import NavBar from "../NavBar";
import CheckoutSideMenu from "../CheckoutSideMenu";

const Layout = () => {
    const { setSearchByCategory } = useContext(ShoppingCartContext);
    const { category } = useParams();

    useEffect(() => {
        if (category !== undefined) {
            setSearchByCategory(category);
        } else {
            setSearchByCategory(null);
        }
    }, [category, setSearchByCategory]);

    return (
        <div className="flex flex-col items-center mt-20">
            <NavBar />
            <CheckoutSideMenu />
            <Outlet />
            <div className="mb-40" />
            <footer className="w-full h-20 flex items-center justify-center fixed bottom-0 bg-white/50 backdrop-blur-md">
                <p className="text-black/60">Shopi <span className="font-bold text-black">{new Date().getFullYear()}</span></p>
            </footer >
        </div >
    );
};

export default Layout;