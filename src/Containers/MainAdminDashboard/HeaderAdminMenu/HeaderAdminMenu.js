import React from 'react';

import { AppBar, Grid, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';

const menuStyle = { backgroundColor: 'rgba(254,84,34,0.85)', height: 75, justifyContent: 'center', borderRadius: '0 0 10px 10px' };


const HeaderAdminMenu = (props) => {

    const { onDrawerToggle } = props;


    return (
        <React.Fragment>
            <AppBar style={ menuStyle } position='sticky' elevation={2}>
                <Toolbar>
                    <Grid container spacing={1} alignItems='center'>
                        <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
                            <IconButton
                                color='inherit'
                                aria-label='open drawer'
                                onClick={onDrawerToggle}
                                edge='start'
                            >
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs />
                        <Grid item>
                            <Tooltip title='Alerts • No alerts'>
                                <IconButton color='inherit'>
                                    <NotificationsIcon />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            <IconButton color='inherit' sx={{ p: 0.5 }}>
                                <Avatar src='/static/images/avatar/1.jpg' alt='My Avatar' />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

export default HeaderAdminMenu;