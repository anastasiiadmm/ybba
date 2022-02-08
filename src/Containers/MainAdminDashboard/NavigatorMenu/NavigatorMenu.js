import * as React from 'react';
import { Link } from 'react-router-dom';

import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';

import logo from '../../../assets/img/logo.svg';


const categories = [
    {
        id: 'Пользователи',
        children: [
            {
                id: 'Дети',
                icon: <PeopleIcon />,
                active: true,
            },
            { id: 'Пользователи', icon: <DnsRoundedIcon /> },
            { id: 'Профили', icon: <PermMediaOutlinedIcon /> },
            { id: 'Токены регистрации', icon: <PublicIcon /> },
        ],
    },
    {
        id: 'Диагностики',
        children: [
            { id: 'Протоколы обследований', icon: <SettingsIcon /> },
            { id: 'Речевые карты', icon: <TimerIcon /> },
        ],
    },
    {
        id: 'Игры',
        children: [
            { id: 'Игры', icon: <SettingsIcon /> },
            { id: 'Типы игр', icon: <TimerIcon /> },
        ],
    },
    {
        id: 'Уроки',
        children: [
            { id: 'Временные ячейки', icon: <TimerIcon /> },
            { id: 'Уроки', icon: <SettingsIcon /> },
        ],
    },
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
        <Drawer variant='permanent' {...other}>
            <List disablePadding>
                <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
                    <header className='header'>
                        <Link to='/admin-dashboard/' className='header__logo'>
                            <img src={logo} alt='Биба'/>
                        </Link>
                    </header>
                </ListItem>
                {categories.map(({ id, children }) => (
                    <Box key={id} sx={{ bgcolor: '#101F33' }}>
                        <ListItem sx={{ py: 2, px: 3 }}>
                            <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
                        </ListItem>
                        {children.map(({ id: childId, icon, active }) => (
                            <ListItem disablePadding key={childId}>
                                <ListItemButton selected={active} sx={item}>
                                    <ListItemIcon>{icon}</ListItemIcon>
                                    <ListItemText>{childId}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))}

                        <Divider sx={{ mt: 2 }} />
                    </Box>
                ))}
            </List>
        </Drawer>
    );
};
export default NavigatorMenu;