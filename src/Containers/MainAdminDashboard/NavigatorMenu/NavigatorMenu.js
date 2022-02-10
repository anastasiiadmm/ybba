import * as React from 'react';
import { Link } from 'react-router-dom';

import AdminListComponent from 'Components/AdminListComponent/AdminListComponent';

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


import logo from 'assets/img/logo.svg';
import Logout from '../../Logout/Logout';

const usersList = [
    { id: 'Дети', icon: <PeopleIcon /> },
    { id: 'Пользователи', icon: <DnsRoundedIcon /> },
    { id: 'Профили', icon: <PermMediaOutlinedIcon /> },
    { id: 'Токены регистрации', icon: <PublicIcon /> }
];

const diagnosticList = [
    { id: 'Протоколы обследований', icon: <PublicIcon /> },
    { id: 'Речевые карты', icon: <SettingsEthernetIcon /> },
];

const gamesList = [
    { id: 'Игры', icon: <PublicIcon />  },
    { id: 'Типы игр', icon: <PublicIcon />  },
];

const lessonsList = [
    { id: 'Временные ячейки', icon: <PublicIcon />  },
    { id: 'Уроки', icon: <PublicIcon />  },
];

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
    py: 1.5,
    px: 3,
};

const NavigatorMenu = props => {
    const { ...other } = props;

    return (
        <>
            <Drawer variant='permanent' {...other}>
                <List disablePadding>
                    <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
                        <header className='header'>
                            <Link to='/admin-dashboard/' className='header__logo'>
                                <img src={logo} alt='Биба'/>
                            </Link>
                        </header>
                    </ListItem>
                    <AdminListComponent
                        listItemText={'Пользователи'}
                    >
                        {usersList.map(({ id: childId, icon  }) => {
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
                        listItemText={'Диагностики'}
                    >
                        {diagnosticList.map(({ id: childId, icon  }) => {
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
                        {gamesList.map(({ id: childId, icon  }) => {
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
                        {lessonsList.map(({ id: childId, icon  }) => {
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
                    <Logout />
                </List>
            </Drawer>
        </>
    );
};
export default NavigatorMenu;