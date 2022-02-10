import * as React from 'react';
import { Link } from 'react-router-dom';

import AdminListComponent from 'Components/AdminListComponent/AdminListComponent';
import Logout from 'Containers/Logout/Logout';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import { Grid, IconButton } from '@mui/material';

import logo from 'assets/img/logo.svg';


const item = {
    py: '2px',
    px: 3,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover, &:focus': {
        bgcolor: 'rgba(255, 255, 255, 0.08)',
    },
};

const itemCategory = {
    boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
    pt: 3,
    px: 3,
};

const usersList = [
    { id: 'Дети', icon: <PeopleIcon/>, to: '/account/child/add/' },
    { id: 'Пользователи', icon: <DnsRoundedIcon/>, to: '/account/user/add/' },
    { id: 'Профили', icon: <PermMediaOutlinedIcon/>, to: '/account/profile/add/' },
    { id: 'Токены регистрации', icon: <PublicIcon/>, to: 'account/registrationtoken/add/' }
];

const diagnosticList = [
    { id: 'Протоколы обследований', icon: <PublicIcon/> },
    { id: 'Речевые карты', icon: <SettingsEthernetIcon/> },
];

const gamesList = [
    { id: 'Игры', icon: <PublicIcon/> },
    { id: 'Типы игр', icon: <PublicIcon/> },
];

const lessonsList = [
    { id: 'Временные ячейки', icon: <PublicIcon/> },
    { id: 'Уроки', icon: <PublicIcon/> },
];

const NavigatorMenu = props => {
    const { ...other } = props;

    return (
        <Drawer variant='permanent' {...other}>
            <List disablePadding>
                <ListItem sx={{ ...item, ...itemCategory }}>
                    <header className='header'>
                        <Link to='/admin-dashboard/' className='header__logo'>
                            <img src={logo} alt='Биба'/>
                        </Link>
                    </header>
                </ListItem>

                <AdminListComponent
                    listItemText={'Пользователи'}
                >
                    {usersList.map(({ id: childId, icon, to }) => {
                        return (
                            <ListItem disablePadding key={childId}>
                                <ListItemButton sx={item}>
                                    <ListItemIcon>{icon}</ListItemIcon>
                                    <ListItemText>{childId}</ListItemText>
                                </ListItemButton>

                                <IconButton component={Link} to={`${to}`} sx={{ color: '#fff' }}>
                                    <AddSharpIcon />
                                </IconButton>
                            </ListItem>
                        )
                    })}
                </AdminListComponent>
                <AdminListComponent
                    listItemText={'Диагностики'}
                >
                    {diagnosticList.map(({ id: childId, icon }) => {
                        return (
                            <ListItem disablePadding key={childId}>
                                <ListItemButton sx={item}>
                                    <ListItemIcon>{icon}</ListItemIcon>
                                    <ListItemText>{childId}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </AdminListComponent>
                <AdminListComponent
                    listItemText={'Игры'}
                >
                    {gamesList.map(({ id: childId, icon }) => {
                        return (
                            <ListItem disablePadding key={childId}>
                                <ListItemButton sx={item}>
                                    <ListItemIcon>{icon}</ListItemIcon>
                                    <ListItemText>{childId}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </AdminListComponent>
                <AdminListComponent
                    listItemText={'Уроки'}
                >
                    {lessonsList.map(({ id: childId, icon }) => {
                        return (
                            <ListItem disablePadding key={childId}>
                                <ListItemButton sx={item}>
                                    <ListItemIcon>{icon}</ListItemIcon>
                                    <ListItemText>{childId}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </AdminListComponent>
            </List>

            <Grid item sx={{ position: 'absolute', bottom: 30, justifyContent: 'center', marginLeft: 8 }}>
                <Logout />
            </Grid>

        </Drawer>

    );
};
export default NavigatorMenu;