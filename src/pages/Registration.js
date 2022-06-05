import React from 'react';
import {Button, createTheme, Grid, TextField, ThemeProvider, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import {cyan, purple} from "@mui/material/colors";

const theme = createTheme();

theme.typography.h3 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2.4rem',
    },
};

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: cyan[800],
    '&:hover': {
        backgroundColor: cyan[900],
    },
}));

const Registration = () => {
    return (
        <div className="App">
            <Grid container spacing={5} direction="column" justifyContent="space-between" alignItems="center" marginTop="100px">
                <Grid item>
                    <div style={{position: 'absolute', left: '50%', top: '20%', transform: 'translate(-50%, -50%)'}}>
                        <ThemeProvider theme={theme}>
                            <Typography variant="h3" style={{color: 'black'}}>Registration</Typography>
                        </ThemeProvider>
                    </div>
                </Grid>
                <Grid item>
                    <TextField sx={{width: 500, maxWidth: '100%'}} type="text" required id="login" label="Email" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField sx={{width: 500, maxWidth: '100%'}} type="password" required id="password" label="Password" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField sx={{width: 500, maxWidth: '100%'}} type="password" required id="confirmPassword" label="Confirm Password" variant="outlined" />
                </Grid>
                <Grid item>
                    <ColorButton size="large" variant="contained">Registration</ColorButton>
                </Grid>
            </Grid>
        </div>
    );
};

export default Registration;