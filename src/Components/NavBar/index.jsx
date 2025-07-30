import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { useContext } from "react"
import { ShoppingBagIcon } from "@heroicons/react/24/solid"

const NavItem = ({ to, children, isActive }) => {
    const activeStyle = 'underline underline-offset-4'
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? activeStyle : undefined}
        >
            {children}
        </NavLink>
    )
}

const NavBar = () => {
    const {count} = useContext(ShoppingCartContext);

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white/80 backdrop-blur-xs">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink
                        to='/'
                    >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavItem
                        to='/'
                    >
                        All
                    </NavItem>
                </li>
                <li>
                    <NavItem
                        to='/clothes'
                    >
                        Clothes
                    </NavItem>
                </li>
                <li>
                    <NavItem
                        to='/electronics'
                    >
                        Electronics
                    </NavItem>
                </li>
                <li>
                    <NavItem
                        to='/furnitures'
                    >
                        Furnitures
                    </NavItem>
                </li>
                <li>
                    <NavItem
                        to='/toys'
                    >
                        Toys
                    </NavItem>
                </li>
                <li>
                    <NavItem
                        to='/others'
                    >
                        Others
                    </NavItem>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    correo@correo.com
                </li>
                <li>
                    <NavItem
                        to='/my-orders'
                    >
                        My Orders
                    </NavItem>
                </li>
                <li>
                    <NavItem
                        to='/my-account'
                    >
                        My Account
                    </NavItem>
                </li>
                <li>
                    <NavItem
                        to='/sign-in'
                    >
                        Sign In
                    </NavItem>
                </li>
                <li className="flex items-center">
                    <ShoppingBagIcon className="size-6"/><span>{count}</span>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar