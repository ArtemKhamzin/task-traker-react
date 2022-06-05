import React from 'react';
import {createTheme, ThemeProvider, Typography} from "@mui/material";

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

const Error = () => {
    return (
        <div style={{
            position: 'absolute',
            left: '50%',
            top: '20%',
            transform: 'translate(-50%, -50%)'
        }}>
            <ThemeProvider theme={theme}>
                <Typography variant="h3" style={{color: 'red'}}>Not Found</Typography>
            </ThemeProvider>
        </div>
    );
};

export default Error;