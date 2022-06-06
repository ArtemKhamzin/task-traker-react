import React from 'react';
import {Grid} from "@mui/material";
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";

const Registration = () => {
    return (
        <Grid container spacing={5} direction="column" justifyContent="space-between" alignItems="center" marginTop="100px">
            <Grid item>
                <div style={{position: 'absolute', left: '50%', top: '20%', transform: 'translate(-50%, -50%)', fontSize: '39px'}}>Registration</div>
            </Grid>
            <Grid item>
                <MyInput type="text" id="login" label="Email"/>
            </Grid>
            <Grid item>
                <MyInput type="password" id="password" label="Password"/>
            </Grid>
            <Grid item>
                <MyInput type="password" id="confirmPassword" label="Confirm Password"/>
            </Grid>
            <Grid item>
                <MyButton size="large" variant="contained">Registration</MyButton>
            </Grid>
        </Grid>
    );
};

export default Registration;