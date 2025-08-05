import { Outlet } from "react-router-dom"
import NavBar from "../NavBar"
import CheckoutSideMenu from "../CheckoutSideMenu"

const Layout = () => {
    return (
        <div className="flex flex-col items-center mt-20">
            <NavBar />
            <CheckoutSideMenu />
            <Outlet />
        </div>
    )
}

export default Layout