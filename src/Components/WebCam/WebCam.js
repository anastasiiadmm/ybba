import React from 'react';

import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

import {authSelector} from '../../redux/auth/authSlice';
import Jitsi from '../Jitsi/Jitsi';
import {jitsiTools} from '../../constants';


const WebCam = (props) => {

    const {meetingId, onClick} = props

    const {user} = useSelector(authSelector)

    const userInfo = {
        displayName: user.email
    }

    const tools = [
        jitsiTools.mic
    ]

    console.log('=========================')
    console.log(window.innerHeight)
    console.log('=========================')

    return (
        <div className='game__person game__person_child' onClick={onClick}>
            <div className='game__person-in'>
                <Jitsi
                    meetingId={meetingId}
                    userInfo={userInfo}
                    width='100%'
                    height={window.innerHeight / 2.2}
                    toolbarItems={tools}
                />
                <button className='game__person-btn btn-zoom' type='button'/>
            </div>
        </div>
    );
}

WebCam.propTypes = {
    meetingId: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default WebCam;