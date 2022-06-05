import React from 'react';
import {AppBar, Box, Button, createTheme, ThemeProvider, Toolbar, Typography} from "@mui/material";
import {cyan} from "@mui/material/colors";
import {Link} from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: {
            main: cyan[800],
        },
        secondary: {
            main: '#d3f4fc',
        },
    },
});

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Task Tracker
                    </Typography>
                    <Link to={'/login'} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button color="inherit">Login</Button>
                    </Link>
                    <Link to={'/registration'} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button color="inherit">Registration</Button>
                    </Link>
                </Toolbar>
            </AppBar>
            </ThemeProvider>
        </Box>
    );
};

export default Navbar;