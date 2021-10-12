import React, {useState, useRef, useEffect} from 'react';

import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

import {authSelector} from '../../redux/auth/authSlice';
import Jitsi from '../Jitsi/Jitsi';
import {jitsiTools} from '../../constants';


const WebCam = (props) => {

    const widthDivRef = useRef()

    const {meetingId, onClick} = props
    const [windowHeight, setWindowHeight] = useState(null)

    const {user} = useSelector(authSelector)

    const userInfo = {
        displayName: user.email
    }

    const tools = [
        jitsiTools.mic
    ]

    useEffect(() => {
        if (widthDivRef.current) {
            setWindowHeight(widthDivRef.current.offsetWidth)

            widthDivRef.current.addEventListener('resize', () => {
                setWindowHeight(widthDivRef.current.offsetWidth)
            })
        }
    }, [widthDivRef])

    return (
        <div className='game__person game__person_child' onClick={onClick}>
            <div className='game__person-in' style={{height: windowHeight}}>
                <div
                    className='w-100'
                    ref={widthDivRef}
                />
                {windowHeight && (
                    <Jitsi
                        meetingId={meetingId}
                        userInfo={userInfo}
                        width='100%'
                        height='100%'
                        toolbarItems={tools}
                    />
                )}
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