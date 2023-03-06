import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import App from "../App"
import {Eduford, PluralSightLoginClone, ResponsivePhotographyWebsite} from "../projects";

const NavWrapper = () => {
    return(
        <>
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
                element: <App/>,
                errorElement: <h2>ERROR lenk</h2>
            },
            {
                path: "/sluralpright",
                element: <PluralSightLoginClone/>,
                errorElement: <h2>ERROR lenk</h2>
            },
            {
                path: "/photography",
                element: <ResponsivePhotographyWebsite/>,
                errorElement: <h2>ERROR lenk</h2>
            },,
            {
                path: "/eduford",
                element: <Eduford/>,
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