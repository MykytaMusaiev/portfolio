import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Home from "../pages/Home";
import {PluralSightLoginClone} from "../projects";
import Navigation from "../components/Navigation";

const NavWrapper = () => {
    return(
        <>
            <Navigation/>
            <Outlet/>
        </>
    )
}

const router = createBrowserRouter([
    {
        element: <NavWrapper />,
        children: [
            {
                path: "/",
                element: <Home/>,
                errorElement: <h2>ERROR lenk</h2>
            },
            {
                path: "/sluralpright",
                element: <PluralSightLoginClone/>,
                errorElement: <h2>ERROR lenk</h2>
            },
        ],
    },
]);

const AppRouter = () => {
    return(
        <RouterProvider router={router} />
    )
}

export default AppRouter;