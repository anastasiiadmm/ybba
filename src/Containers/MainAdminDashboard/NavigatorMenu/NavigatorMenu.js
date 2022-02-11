import * as React from 'react';
import { Link } from 'react-router-dom';

import AdminListComponent from 'Components/AdminListComponent/AdminListComponent';
import ListItemComponent from 'Components/AdminListComponent/ListItemComponent';
import Logout from 'Containers/Logout/Logout';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import { Grid } from '@mui/material';

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
    { id: 'Дети', icon: <PeopleIcon/>, to: '/admin/account/child/add/' },
    { id: 'Пользователи', icon: <DnsRoundedIcon/>, to: '/admin/account/user/add/' },
    { id: 'Профили', icon: <PermMediaOutlinedIcon/>, to: '/admin/account/profile/add/' },
    { id: 'Токены регистрации', icon: <PublicIcon/>, to: '/admin/account/registrationtoken/add/' }
];

const diagnosticList = [
    { id: 'Протоколы обследований', icon: <PublicIcon/>, to: '/admin/examinationprotocol/' },
    { id: 'Речевые карты', icon: <SettingsEthernetIcon/>, to: '/admin/speechcard/' },
];

const gamesList = [
    { id: 'Игры', icon: <PublicIcon/>, to: '/admin/game/' },
    { id: 'Типы игр', icon: <PublicIcon/>, to: '/admin/gametype/' },
];

const lessonsList = [
    { id: 'Временные ячейки', icon: <PublicIcon/>, to: '/admin/lesson/timeslot/' },
    { id: 'Уроки', icon: <PublicIcon/>, to: '/admin/lesson/' },
];

const NavigatorMenu = props => {
    const { ...other } = props;

    return (
        <Grid container>
            <Grid item xs>
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
                                    <ListItemComponent
                                        key={childId}
                                        icon={icon}
                                        itemName={childId}
                                        to={to}
                                    />
                                )
                            })}
                        </AdminListComponent>
                        <AdminListComponent
                            listItemText={'Диагностики'}
                        >
                            {diagnosticList.map(({ id: childId, icon, to }) => {
                                return (
                                    <ListItemComponent
                                        key={childId}
                                        icon={icon}
                                        itemName={childId}
                                        to={to}
                                    />
                                )
                            })}
                        </AdminListComponent>
                        <AdminListComponent
                            listItemText={'Игры'}
                        >
                            {gamesList.map(({ id: childId, icon, to }) => {
                                return (
                                    <ListItemComponent
                                        key={childId}
                                        icon={icon}
                                        itemName={childId}
                                        to={to}
                                    />
                                )
                            })}
                        </AdminListComponent>
                        <AdminListComponent
                            listItemText={'Уроки'}
                        >
                            {lessonsList.map(({ id: childId, icon, to }) => {
                                return (
                                    <ListItemComponent
                                        key={childId}
                                        icon={icon}
                                        itemName={childId}
                                        to={to}
                                    />
                                )
                            })}
                        </AdminListComponent>
                    </List>
                </Drawer>
            </Grid>

            <Grid item>
                <Grid item xs>
                    <Logout />
                </Grid>
            </Grid>
        </Grid>
    );
};
export default NavigatorMenu;