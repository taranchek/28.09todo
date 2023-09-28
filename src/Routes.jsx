import React from "react"
import {Outlet, useRoutes} from "react-router-dom"
import NotFound from "./NotFound"
import Home from "./Home"
import Users from "./Users"
import User from "./User"

export default function Routes() {

    const routes = useRoutes([
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'Users',
            element:<>
                <p className="user-text">Пользователи:</p>
                <Outlet />
            </>,
            children: [
                {
                    path: '',
                    element: <Users/>
                },
                {
                    path: ':id',
                    element: <User/>
                }
            ]  

        },
        {
            path:'names',
            element:<>names</>
        },
        {
            path:'news',
            element:<>news</>
        },
        {
            path:'*',
            element:<NotFound/>
        }
    ])
    return routes;
}