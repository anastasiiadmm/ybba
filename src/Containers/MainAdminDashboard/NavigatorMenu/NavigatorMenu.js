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

import logo from 'assets/img/logo.svg';


const categories = [
    {
        id: 'Пользователи',
        icon: <PeopleIcon />,
        children: [
            {
                id: 'Дети',
                icon: <PeopleIcon />,
                active: true,
            },
            { id: 'Пользователи', icon: <DnsRoundedIcon /> },
            { id: 'Профили', icon: <PermMediaOutlinedIcon /> },
            { id: 'Токены регистрации', icon: <PublicIcon /> }
        ],
    },
    {
        id: 'Диагностики',
        children: [
            { id: 'Протоколы обследований' },
            { id: 'Речевые карты' },
        ],
    },
    {
        id: 'Игры',
        children: [
            { id: 'Игры' },
            { id: 'Типы игр' },
        ],
    },
    {
        id: 'Уроки',
        children: [
            { id: 'Временные ячейки' },
            { id: 'Уроки' },
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

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

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
                    <AdminListComponent
                        key={id}
                        listItemText={id}
                        listItemIcon={<PeopleIcon />}
                        onClick={handleClick}
                        open={open}
                    >
                         {children.map(({ id: childId, icon, active }) => (
                             <ListItem disablePadding key={childId}>
                                 <ListItemButton selected={active} sx={item}>
                                     <ListItemIcon>{icon}</ListItemIcon>
                                     <ListItemText>{childId}</ListItemText>
                                 </ListItemButton>
                             </ListItem>
                         ))}
                    </AdminListComponent>
                ))}
            </List>
        </Drawer>
    );
};
export default NavigatorMenu;