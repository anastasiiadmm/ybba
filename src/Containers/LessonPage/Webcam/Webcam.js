import React, { useState, useContext, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { addClasses } from 'utils/addClasses/addClasses.js';
import Jitsi from 'Components/Jitsi/Jitsi.js';
import { userRoles } from 'constants.js';
import PropTypes from 'prop-types';
import { checkUserRole } from 'utils/user.js';
import { lessonSelector } from 'redux/lesson/lessonSlice.js';
import { JitsiContext } from 'context/JitsiContext/JitsiContext.js';
import soundOn from 'assets/img/soundOn.png'
import soundOff from 'assets/img/soundOff.png'

import 'Containers/LessonPage/Webcam/webcam.css'


const Webcam = (props) => {

    const {
        meetingId, switchChildWebcamSize
    } = props

    const { isParentWebcamIncreased } = useSelector(lessonSelector)
    const { api } = useContext(JitsiContext)

    const [isWebcamInZoom, setWebcamInZoom] = useState(false)
    const [isMuted, setIsMuted] = useState(false)

    const setMuted = async () => {
        const muted = await api.isAudioMuted()
        setIsMuted(muted)
    }

    const webcamZoomToggle = () => {
        if (checkUserRole(userRoles.parent)) {
            switchChildWebcamSize(!isParentWebcamIncreased)
            setWebcamInZoom(!isParentWebcamIncreased)
        } else if (checkUserRole(userRoles.therapist)) {
            setWebcamInZoom(!isWebcamInZoom)
        }
    }

    const toggleMute = () => {
        if (api) {
            api.executeCommand('toggleAudio')
            setMuted(!isMuted)
        }
    }

    useEffect(() => {
        if (api) {
            setMuted()
        }
        // eslint-disable-next-line
    }, [api])

    useEffect(() => {

    }, [isMuted])

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
                    {isWebcamInZoom ? '-' : '+'}
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
                    className=''
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