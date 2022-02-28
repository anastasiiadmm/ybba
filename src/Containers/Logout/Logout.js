import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import Button from 'Components/Button/Button.js';
import { logoutUser, authSelector } from 'redux/auth/authSlice.js';


const Logout = () => {

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
          type='button'
          className='main-nav__enter border-0 bg-transparent'
          onClick={logout}
          loading={loading}
      >
        Выход
      </Button>
  );
}

export default Logout;
