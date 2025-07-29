import { Outlet } from "react-router-dom"

const Layout = ({children}) => {
    return (
        <div className="flex flex-col items-center mt-20">
            <Outlet />
        </div>
    )
}

export default Layout