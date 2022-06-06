import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import Error from "../pages/Error";
import {privateRoutes, publicRoutes} from "../router";
import Login from "../pages/Login";
import {AuthContext} from "../context";
import Home from "../pages/Home";

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Route path="/login" element={<Home/>} />
                <Route path="/registration" element={<Home/>} />
                <Route path="*" element={<Error/>} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Route path="/" element={<Login/>} />
                <Route path="*" element={<Error/>} />
            </Routes>

    );
};

export default AppRouter;