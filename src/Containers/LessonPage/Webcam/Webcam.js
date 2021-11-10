import React, { useState, useContext, useEffect, useCallback } from 'react';

import { useSelector } from 'react-redux';

import { addClasses } from 'utils/addClasses/addClasses.js';
import Jitsi from 'Components/Jitsi/Jitsi.js';
import { userRoles } from 'constants.js';
import PropTypes from 'prop-types';
import { checkUserRole } from 'utils/user.js';
import { lessonSelector } from 'redux/lesson/lessonSlice.js';
import { JitsiContext } from 'context/JitsiContext/JitsiContext.js';
import { authSelector } from 'redux/auth/authSlice.js';
import soundOn from 'assets/img/soundOn.png'
import soundOff from 'assets/img/soundOff.png'

import 'Containers/LessonPage/Webcam/webcam.css'


const Webcam = (props) => {

    const {
        meetingId, switchChildWebcamSize
    } = props

    const { isParentWebcamIncreased } = useSelector(lessonSelector)
    const { user } = useSelector(authSelector)
    const { api } = useContext(JitsiContext)

    const [isWebcamInZoom, setWebcamInZoom] = useState(false)
    const [isMuted, setIsMuted] = useState(false)

    const setMuted = useCallback(async () => {
        const muted = await api.isAudioMuted()
        await setIsMuted(muted)
    }, [api])

    const toggleMute = useCallback(async () => {
        if (api) {
            api.executeCommand('toggleAudio')
            await setMuted(!isMuted)
        }
    }, [api, isMuted, setMuted])

    const toggleChildWebcamSize = async () => await switchChildWebcamSize(!isParentWebcamIncreased)
    const toggleTherapistWebcamSize = async () => await setWebcamInZoom(!isWebcamInZoom)

    const webcamZoomToggle = async () => {
        const toggles = {
            [userRoles.parent]: toggleChildWebcamSize,
            [userRoles.therapist]: toggleTherapistWebcamSize
        }
        toggles[user.role]()
    }

    const isTherapistWebcamInZoom = () => isWebcamInZoom
    const isParentWebcamInZoom = () => isParentWebcamIncreased

    const isUserWebcamInZoom = () => {
        const usersChecks = {
            [userRoles.parent]: isParentWebcamInZoom,
            [userRoles.therapist]: isTherapistWebcamInZoom
        }

        return usersChecks[user?.role]()
    }


    useEffect(() => {
        if (api) {
            setMuted()
        }
    }, [api, setMuted])

    return (
        <div
            className={addClasses('', {
                'gamef__person-child': checkUserRole(userRoles.therapist),
                'gamef__person-teacher': checkUserRole(userRoles.parent)
            })}
        >
            <div className={addClasses('gamef__person-in webcam', {
                'webcamZoom': (
                    (checkUserRole(userRoles.therapist) && isWebcamInZoom) ||
                    (checkUserRole(userRoles.parent) && isParentWebcamIncreased)
                ),
            })}>
                <button
                    className='gamef__person-btn zoomBtn'
                    type='button'
                    onClick={webcamZoomToggle}
                >
                    {isUserWebcamInZoom() ? '-' : '+'}
                </button>
                <button
                    className='gamef__person-btn soundBtn d-flex align-items-center justify-content-center'
                    type='button'
                    onClick={toggleMute}
                >
                    <img src={isMuted ? soundOff : soundOn} alt='sound'/>
                </button>
                <Jitsi
                    meetingId={meetingId}
                    height={195}
                />
                {checkUserRole(userRoles.parent) && (
                    <div className='bg-dark dragBlock'>
                        перетащить
                    </div>
                )}
            </div>
        </div>
    );
}

Webcam.propTypes = {
    meetingId: PropTypes.string.isRequired,
    switchChildWebcamSize: PropTypes.func
}

export default Webcam;