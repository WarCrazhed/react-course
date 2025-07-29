import { useRoutes, BrowserRouter } from "react-router-dom"
import Home from "../Home"
import MyOrders from "../MyOrders"
import MyOrder from "../MyOrder"
import NotFound from "../NotFound"
import SignIn from "../SignIn"
import NavBar from "../../Components/NavBar"
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
        <BrowserRouter>
            <AppRoutes />
            <NavBar />
        </BrowserRouter>
    )
}

export default App
