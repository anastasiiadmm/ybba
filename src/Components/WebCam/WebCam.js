import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {userSelector} from '../../redux/user/userSlice';

const WebCam = (props) => {

    const {meetingId, onClick} = props

    const {user} = useSelector(userSelector)

    const [api, setApi] = useState(null)

    const startMeet = () => {
        const options = {
            roomName: meetingId,
            width: '100%',
            height: 500,
            configOverwrite: {prejoinPageEnabled: false},
            interfaceConfigOverwrite: {
                TOOLBAR_BUTTONS: ['microphone'],
                SHOW_WATERMARK_FOR_GUESTS: false
            },
            parentNode: document.querySelector('#jitsi-iframe'),
            userInfo: {
                displayName: user.email
            }
        }
        const apiObj = new window.JitsiMeetExternalAPI('meet.jit.si', options);
        setApi(apiObj)

    }


    useEffect(() => {
        if (window.JitsiMeetExternalAPI && meetingId) {
            startMeet()
        } else {
            alert('JitsiMeetExternalAPI not loaded');
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div className='game__person game__person_child' onClick={onClick}>
            <div className='game__person-in'>
                <div id='jitsi-iframe'/>
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