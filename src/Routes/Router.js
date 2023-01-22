import React from 'react';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'
import Main from '../Layouts/Main/Main';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<></>
            }
        ]
    }
])


const Router = () => {
    return (
      <RouterProvider router={router}></RouterProvider>
    );
};

export default Router;