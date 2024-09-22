import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home';
import ROUTES from '../routes/index'
import MasterLayout from '../layouts/MasterLayout';
import { BookDetails } from '../pages/BookDetails';

const router = createBrowserRouter([
    {
        path: `${ROUTES.HOME}`,
        element: <MasterLayout />,
        children: [
            {
                path: `${ROUTES.HOME}`,
                element: <Home />,
            },
            {
                path: `${ROUTES.ABOUT}`,
                element: <Home />,
            },
            {
                path: `${ROUTES.BLOG}`,
                element: <Home />,
            },
            {
                path: `${ROUTES.FAQ}`,
                element: <Home />,
            },
            {
                path: `${ROUTES.SINGLE_BOOK.STATIC}`,
                element: <BookDetails />,
            }
        ]
    },
]);

export default router