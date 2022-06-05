import React from 'react';
import {TextField} from "@mui/material";

function Login() {
    return (
        <div className="App">
            <TextField type="text" required id="login" label="Email" variant="outlined" />
            <TextField type="password" required id="password" label="Password" variant="outlined" />
        </div>
    );
};

export default Login;