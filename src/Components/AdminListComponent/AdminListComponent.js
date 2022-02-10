import React, { useState } from 'react';

import ListItemButton from '@mui/material/ListItemButton';
import { Collapse, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

const AdminListComponent = (props) => {
    const { listItemText, children } = props;

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    
    return (
        <Box sx={{ bgcolor: '#101F33' }}>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary={`${listItemText}`} sx={{ color: '#fff' }}/>
                {open ? <ExpandLess sx={{ color: '#fff' }}/> : <ExpandMore sx={{ color: '#fff' }}/>}
            </ListItemButton>
            <Collapse in={open} timeout='auto' unmountOnExit>
                {children}
            </Collapse>
            <Divider sx={{ mt: 2 }} />
        </Box>
    );
};

export default AdminListComponent;