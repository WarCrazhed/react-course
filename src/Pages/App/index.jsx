import { useRoutes, BrowserRouter } from "react-router-dom"
import { ShoppingCartProvider } from "../../Context"
import Home from "../Home"
import MyOrders from "../MyOrders"
import MyOrder from "../MyOrder"
import NotFound from "../NotFound"
import SignIn from "../SignIn"
import Layout from "../../Components/Layout"

const AppRoutes = () => {
    let routes = useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                { index: true, element: <Home /> },
                { path: '/my-orders', element: <MyOrders /> },
                { path: '/my-order', element: <MyOrder /> },
                { path: '/sign-in', element: <SignIn /> },
            ]
        },
        { path: '*', element: <NotFound /> },
    ])

    return routes
}

const App = () => {
    return (
        <ShoppingCartProvider>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </ShoppingCartProvider>
    )
}

export default App
