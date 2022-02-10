import React from 'react';

import ListItemButton from '@mui/material/ListItemButton';
import { Collapse, ListItemIcon, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

const AdminListComponent = (props) => {
    const { key, onClick, open, listName, listItemText, childrenIcon, listItemIcon } = props;
    
    return (
        <Box key={key} sx={{ bgcolor: '#101F33' }}>
            <ListItemButton onClick={onClick}>
                <ListItemIcon>
                    {listItemIcon}
                </ListItemIcon>
                <ListItemText primary={`${listItemText}`} sx={{ color: '#fff' }}/>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            {childrenIcon}
                        </ListItemIcon>
                        <ListItemText primary={`${listName}`} sx={{ color: '#fff' }}/>
                    </ListItemButton>
                </List>
            </Collapse>
            <Divider sx={{ mt: 2 }} />
        </Box>
    );
};

export default AdminListComponent;