import React from 'react';
import { Link } from 'react-router-dom';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IconButton } from '@mui/material';
import AddSharpIcon from '@mui/icons-material/AddSharp';

const item = {
    py: '2px',
    px: 3,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover, &:focus': {
        bgcolor: 'rgba(255, 255, 255, 0.08)',
    },
};

const hoverButton = {
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover, &:focus, &:active': {
        color: 'rgba(254,84,34,0.85)',
    },
};

const ListItemComponent = (props) => {
    const { key, icon, itemName, to } = props;

    return (
        <ListItem disablePadding key={key}>
            <ListItemButton sx={item}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText>{itemName}</ListItemText>
            </ListItemButton>

            <IconButton component={Link} to={`${to}`} sx={{ color: '#fff' }}>
                <AddSharpIcon sx={hoverButton} />
            </IconButton>
        </ListItem>
    );
};

export default ListItemComponent;