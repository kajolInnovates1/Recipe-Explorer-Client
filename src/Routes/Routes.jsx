import {
    createBrowserRouter,
} from "react-router";
import Layouts from "../MainLayouts/Layouts";
import Home from "../Pages/Home/Home";
import AddRecipe from "../Pages/AddRecipe/AddRecipe";
import AllRecipe from "../Pages/AllRecipe/AllRecipe";
import MyRecipe from "../Pages/MyRecipe/MyRecipe";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import Details from "../Pages/Details/Details";
import NotFound from "../Components/NotFound/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layouts,
        errorElement: NotFound,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'addrecipe',
                Component: AddRecipe

            },
            {
                path: 'allrecipe',
                loader: () => fetch('https://assignment-10-server-bagm7fo5c-kajol201s-projects.vercel.app/use'),
                Component: AllRecipe
            },
            {
                path: 'myrecipe',
                loader: () => fetch('https://assignment-10-server-bagm7fo5c-kajol201s-projects.vercel.app/use'),
                Component: MyRecipe
            },
            {
                path: 'registration',
                Component: Registration
            },
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'details/:id',
                loader: ({ params }) => fetch(`https://assignment-10-server-bagm7fo5c-kajol201s-projects.vercel.app/details/${params.id}`),
                Component: Details
            },
            {
                path: '*',
                Component: NotFound
            }


        ]
    },
]);
