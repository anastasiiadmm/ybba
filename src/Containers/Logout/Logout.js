import React, {useEffect} from 'react';
import {Spinner} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {logoutUser, userSelector} from "../../redux/user/userSlice.js";

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
    }, [user, tokens])

    return (
        <>
            {!loading && <button className='btn' onClick={logout}>Logout</button>}
            {loading && <Spinner animation="border" variant="primary"/>}
        </>
    );
}

export default Logout;