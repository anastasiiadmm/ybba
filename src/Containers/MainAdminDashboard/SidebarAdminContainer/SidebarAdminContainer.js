import * as React from 'react';
import { useState } from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import NavigatorMenu from 'Containers/MainAdminDashboard/NavigatorMenu/NavigatorMenu';
import LogoutButton from 'Containers/MainAdminDashboard/LogoutButton/LogoutButton';
import HeaderAdminMenu from 'Containers/MainAdminDashboard/HeaderAdminMenu/HeaderAdminMenu';

const drawerWidth = 300;

let theme = createTheme({
    palette: {
        primary: {
            light: '#63ccff',
            main: '#009be5',
            dark: '#006db3',
        },
    },
    typography: {
        h5: {
            fontWeight: 500,
            fontSize: 26,
            letterSpacing: 0.5,
        },
    },
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiTab: {
            defaultProps: {
                disableRipple: true,
            },
        },
    },
    mixins: {
        toolbar: {
            minHeight: 48,
        },
    },
});

theme = {
    ...theme,
    components: {
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#081627',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
                contained: {
                    boxShadow: 'none',
                    '&:active': {
                        boxShadow: 'none',
                    },
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    marginLeft: theme.spacing(1),
                },
                indicator: {
                    height: 3,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                    backgroundColor: theme.palette.common.white,
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    margin: '0 16px',
                    minWidth: 0,
                    padding: 0,
                    [theme.breakpoints.up('md')]: {
                        padding: 0,
                        minWidth: 0,
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(1),
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    borderRadius: 4,
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgb(255,255,255,0.15)',
                },
            },
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        color: '#4fc3f7',
                    },
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    fontSize: 14,
                    fontWeight: theme.typography.fontWeightMedium,
                },
            },
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: 'inherit',
                    minWidth: 'auto',
                    marginRight: theme.spacing(2),
                    '& svg': {
                        fontSize: 20,
                    },
                },
            },
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    width: 32,
                    height: 32,
                },
            },
        },
    },
};

const menuStyle = {
    display: 'flex', flexDirection: 'column', position: 'relative'
}

const buttonStyle = {
    width: { sm: drawerWidth }, flexShrink: { sm: 0 },
    position: 'absolute', bottom: 0, zIndex: 120, height: 90, backgroundColor: '#081627', pr: 5, pl: 5,
    textAlign: 'center', '&:hover': '#fff',
    display: { sm: 'block', xs: 'none' }
};

const navStyle = {
    width: { sm: drawerWidth }, flexShrink: { sm: 0 }, zIndex: 0
};

const childrenStyle = {
    flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#eaeff1'
};

const childrenComponentStyle = {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: '15px 15px 0 0',
    margin: '15px 15px 0 15px',
    padding: 5
}



const SidebarAdminContainer = (props) => {
    const { children } = props;

    const [mobileOpen, setMobileOpen] = useState(false);
    const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', minHeight: '100vh' }}>
                <CssBaseline />
                <Box style={ menuStyle }>
                    <Box
                        component='nav'
                        sx={ navStyle }
                    >
                        {isSmUp ? null : (
                            <NavigatorMenu
                                PaperProps={{ style: { width: drawerWidth } }}
                                variant='temporary'
                                open={mobileOpen}
                                onClose={handleDrawerToggle}
                            />
                        )}
                        <NavigatorMenu
                            PaperProps={{ style: { width: drawerWidth } }}
                            sx={{ display: { sm: 'block', xs: 'none' } }}
                        />
                    </Box>
                    <Box component='div' sx={ buttonStyle }>
                        <LogoutButton />
                    </Box>
                </Box>

                <Box sx={ childrenStyle }>
                    <HeaderAdminMenu onDrawerToggle={handleDrawerToggle} />
                    <Box component='main' sx={ childrenComponentStyle }>
                        {children}
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default SidebarAdminContainer;