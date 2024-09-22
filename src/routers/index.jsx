import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home';
import ROUTES from '../routes/index'
import MasterLayout from '../layouts/MasterLayout';
import { BookDetails } from '../pages/BookDetails';
import { About } from '../pages/About';
import { Blog } from '../pages/Blog';
import { Faq } from '../pages/Faq';

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
                element: <About />,
            },
            {
                path: `${ROUTES.BLOG}`,
                element: <Blog />,
            },
            {
                path: `${ROUTES.FAQ}`,
                element: <Faq />,
            },
            {
                path: `${ROUTES.SINGLE_BOOK.STATIC}`,
                element: <BookDetails />,
            }
        ]
    },
]);

export default router