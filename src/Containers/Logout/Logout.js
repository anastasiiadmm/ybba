import React, {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router';

import Button from '../../Components/Button/Button.js';
import {logoutUser, userSelector} from '../../redux/user/userSlice.js';


const Logout = () => {

    const {user, tokens, loading} = useSelector(userSelector)

    const dispatch = useDispatch()
    const history = useHistory()

    const logout = () => {
        const data = {refresh: tokens.refresh}
        dispatch(logoutUser(data))
    }

    useEffect(() => {
        if (!user || !tokens) {
            history.push('/login/')
        }
        // eslint-disable-next-line
    }, [user, tokens])

    return (
        <Button
            className='main-nav__enter border-0 bg-transparent'
            onClick={logout}
            loading={loading}
        >
            Выход
        </Button>
    );
}

export default Logout;