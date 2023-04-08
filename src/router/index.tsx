import React from "react";
import { createBrowserRouter }  from "react-router-dom";

import App from "@/App";
import { Router } from "@/constants/router.constants";

const router = createBrowserRouter([
    {
        path: Router.APP,
        element: <App />,
        // errorElement: <ErrorPage />,
        // children: [
        //     {
        //         path: ROUTE_HOME,
        //         element: <HomePage />,
        //     },
        // ],
    },
]);


export default router;