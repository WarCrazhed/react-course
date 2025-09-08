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
        </div>
    );
};

export default Layout;