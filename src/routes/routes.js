import {createBrowserRouter} from "react-router-dom";
import Root from "../root";
import Contacts from "../pages/Contacts";
import React from "react";
import ErrorPage from "../pages/404";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/contacts",
        element: <Contacts />,
    },
    // {
    //     path: "*",
    //     element: <div>404</div>
    // },

]);
