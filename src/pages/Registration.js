import React from 'react';
import {TextField} from "@mui/material";

const Registration = () => {
    return (
        <div>
            <TextField type="text" required id="login" label="Email" variant="outlined" />
            <TextField type="password" required id="password" label="Password" variant="outlined" />
        </div>
    );
};

export default Registration;