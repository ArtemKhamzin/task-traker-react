import Login from "../pages/Login";
import Home from "../pages/Home";
import Registration from "../pages/Registration";

export const privateRoutes = [
    {path: '/', element: <Home/>, exact: true}
]

export const publicRoutes = [
    {path: '/login', element: <Login/>, exact: true},
    {path: '/registration', element: <Registration/>, exact: true}
]