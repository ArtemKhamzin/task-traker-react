import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Error from "../pages/Error";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/registration" element={<Registration/>} />
            <Route path="*" element={<Error/>} />
        </Routes>
    );
};

export default AppRouter;