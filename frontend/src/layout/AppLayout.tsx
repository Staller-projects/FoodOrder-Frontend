import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Signup from "../modules/Signup/Signup";
// import Navbar from "../components/Navbar/Navbar";
import Home from "../modules/Home/Home";
import ResturantMenu from "../modules/ResturantMenu/ResturantMenu";

const AppLayout = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: "error elemen =t will go here",
        },
        {
            path: "/test",
            element: <div className="text-center"> This is test page</div>,
        },
        {
            path: "/:resturantCity/:resturantName",
            element: <ResturantMenu />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default AppLayout;
