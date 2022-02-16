import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector, logoutUser } from 'redux/auth/authSlice';
import { useHistory } from 'react-router';

import { Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const buttonStyle = {
    mt: 2,
    backgroundColor: 'rgba(254,84,34)',
    '&:hover, &:focus, &:active': {
        color: '#fff',
        backgroundColor: 'rgba(255,58,0,0.85)',
    },
}


const LogoutButton = () => {
    const { user, tokens, loading } = useSelector(authSelector)

    const dispatch = useDispatch()
    const history = useHistory()

    const logout = () => {
        dispatch(logoutUser())
    }

    useEffect(() => {
        if (!user || !tokens) {
            history.push('/login/')
        }
        // eslint-disable-next-line
    }, [user, tokens])
    
    return (
        <Button
            color='secondary'
            component='a'
            endIcon={(<OpenInNewIcon />)}
            fullWidth
            sx={ buttonStyle }
            variant='contained'
            onClick={logout}
            loading={loading}
        >
            Выход
        </Button>
    );
};

export default LogoutButton;