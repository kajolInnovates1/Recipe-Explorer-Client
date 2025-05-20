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

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layouts,
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
                loader: () => fetch('http://localhost:8080/use'),
                Component: AllRecipe
            },
            {
                path: 'myrecipe',
                Component: MyRecipe
            },
            {
                path: 'registration',
                Component: Registration
            },
            {
                path: 'login',
                Component: Login
            }
        ]
    },
]);
