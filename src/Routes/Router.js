import React from 'react';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'
import Main from '../Layouts/Main/Main';
import Home from '../Pages/Home/Home';
import NotFound from '../Pages/NotFound/NotFound';
import ProjectDetails from '../Pages/ProjectDetails/ProjectDetails';
import Resume from '../Pages/Resume/Resume';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/details/:id',
                loader: async ({ params }) => {
                    return fetch(`https://new-server-mahmudulmk4-gmailcom.vercel.app/singelProject/${params.id}`);
                },
                element: <ProjectDetails></ProjectDetails>
            }
        ]
    },
    {
        path:'/resume',
        element:<Resume></Resume>
    },
    {
        path:'*',
        element: <NotFound></NotFound>
    }
])


const Router = () => {
    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default Router;