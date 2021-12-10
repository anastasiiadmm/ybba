import React, { useState, useContext, useEffect, useCallback } from 'react';

import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { addClasses } from 'utils/addClasses/addClasses.js';
import Jitsi from 'Components/Jitsi/Jitsi.js';
import { userRoles, envs } from 'constants.js';
import { checkUserRole } from 'utils/user.js';
import { lessonSelector } from 'redux/lesson/lessonSlice.js';
import { JitsiContext } from 'context/JitsiContext/JitsiContext.js';
import { authSelector } from 'redux/auth/authSlice.js';
import { startJitsiRecording, stopJitsiRecording } from 'utils/jitsi/utils.js';
import { checkEnv } from 'utils/common/commonUtils.js';
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

    const startRecording = useCallback(() => {
        if (api && !checkEnv(envs.local)) {
            startJitsiRecording(api)
        }
    }, [api])

    const stopRecording = useCallback(() => {
        if (api && !checkEnv(envs.local)) {
            stopJitsiRecording(api)
        }
    }, [api])

    useEffect(() => {
        startRecording()
        return () => {
            stopRecording()
        }
    }, [api, startRecording, stopRecording])

    useEffect(() => {
        if (api) {
            setMuted()
        }
    }, [api, setMuted])

    return (
        <div
            className={addClasses('webcam', {
                'gamef__person-child': checkUserRole(userRoles.therapist),
                'gamef__person-teacher': checkUserRole(userRoles.parent),
                'webcamZoom': (
                    (checkUserRole(userRoles.therapist) && isWebcamInZoom) ||
                    (checkUserRole(userRoles.parent) && isParentWebcamIncreased)
                ),
            })}
            style={{ transformOrigin: `${checkUserRole(userRoles.parent) ? '100% 0' : ''}` }}
        >
            <div className='gamef__person-in'>
                <button
                    className='gamef__person-btn zoomBtn'
                    type='button'
                    onClick={webcamZoomToggle}
                >
                    {isUserWebcamInZoom() ? '-' : '+'}
                </button>
                <div
                    className={addClasses('frontWebcamBlock', {
                        'dragBlock': checkUserRole(userRoles.parent)
                    })}
                />
                {checkUserRole(userRoles.therapist) && (
                    <button
                        className='gamef__person-btn soundBtn d-flex align-items-center justify-content-center'
                        type='button'
                        onClick={toggleMute}
                    >
                        <img src={isMuted ? soundOff : soundOn} alt='sound'/>
                    </button>
                )}
                <Jitsi
                    meetingId={meetingId}
                    height={195}
                />
            </div>
        </div>
    );
}

Webcam.propTypes = {
    meetingId: PropTypes.string.isRequired,
    switchChildWebcamSize: PropTypes.func
}

export default Webcam;