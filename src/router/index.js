import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import App from "../App"
import {PluralSightLoginClone, ResponsivePhotographyWebsite} from "../projects";
import s from "../projects/Eduford/styles.module.css";
import {BackToHomeArrow} from "../components";
import {Footer} from "../projects/Eduford/components";
import {Home, About, Blog, Contact, Course} from "../projects/Eduford/pages"

const NavWrapper = () => {
    return (
        <>
            <Outlet/>
        </>
    )
}

const EdufordWrapper = () => {
    return (
        <div className={s.edufordGlobal}>
            <BackToHomeArrow/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

const router = createBrowserRouter([
    {
        element: <NavWrapper/>,
        children: [
            {
                path: "/",
                element: <App/>,
                errorElement: <h2>rwong lenk</h2>
            },
            {
                path: "sluralpright",
                element: <PluralSightLoginClone/>,
                errorElement: <h2>rwong lenk</h2>
            },
            {
                path: "photography",
                element: <ResponsivePhotographyWebsite/>,
                errorElement: <h2>rwong lenk</h2>
            },
            {
                path: "eduford",
                element: <EdufordWrapper/>,
                errorElement: <h2>rwong lenk</h2>,
                children: [
                    {
                        index: true,
                        element: <Home/>,
                        errorElement: <h2>rwong eduford lenk</h2>
                    },
                    {
                        path: "about",
                        element: <About/>,
                        errorElement: <h2>rwong eduford lenk</h2>
                    },
                    {
                        path: "blog",
                        element: <Blog/>,
                        errorElement: <h2>rwong eduford lenk</h2>
                    },
                    {
                        path: "contact",
                        element: <Contact/>,
                        errorElement: <h2>rwong eduford lenk</h2>
                    },
                    {
                        path: "course",
                        element: <Course/>,
                        errorElement: <h2>rwong eduford lenk</h2>
                    }
                ]
            },
        ],
    },
]);

const AppRouter = () => {
    return (
        <RouterProvider router={router}/>
    )
}

export default AppRouter;