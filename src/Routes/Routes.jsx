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

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layouts,
        children: [
            {
                index: true,
                loader: () => fetch('http://localhost:8080/sort'),
                Component: Home
            },
            {
                path: 'addrecipe',
                Component: AddRecipe

            },
            {
                path: 'allrecipe',
                loader: () => fetch('http://localhost:8080/use'),
                Component: AllRecipe
            },
            {
                path: 'myrecipe',
                loader: () => fetch('http://localhost:8080/use'),
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
                loader: ({ params }) => fetch(`http://localhost:8080/details/${params.id}`),
                Component: Details
            },


        ]
    },
]);
