import {
    createBrowserRouter,
} from "react-router";
import Layouts from "../MainLayouts/Layouts";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layouts,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    },
]);
