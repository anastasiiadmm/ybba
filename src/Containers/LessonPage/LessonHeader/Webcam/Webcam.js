import React, { useEffect, useMemo, useRef, useState } from 'react';

import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { lessonSelector } from 'redux/lesson/lessonSlice.js';
import { authSelector } from 'redux/auth/authSlice.js';

import { addClasses } from 'utils/addClasses/addClasses.js';
import { checkUserRole } from 'utils/user.js';
import { userRoles } from 'constants.js';

import Jitsi from 'Components/Jitsi/Jitsi.js';
import './webcam.css'

const Webcam = (props) => {
    const {
        switchChildWebcamSize,
        webcamHeight,
        meetingId,
    } = props;

    const { isParentWebcamIncreased } = useSelector(lessonSelector);
    const { user } = useSelector(authSelector);

    const [isWebcamInZoom, setWebcamInZoom] = useState(false);

    const toggleChildWebcamSize = async () => await switchChildWebcamSize(!isParentWebcamIncreased);
    const toggleTherapistWebcamSize = async () => await setWebcamInZoom(!isWebcamInZoom);

    const webcamZoomToggle = async () => {
        const toggles = {
            [userRoles.parent]: toggleChildWebcamSize,
            [userRoles.therapist]: toggleTherapistWebcamSize,
        }
        toggles[user.role]()
    }

    const isTherapistWebcamInZoom = () => isWebcamInZoom;
    const isParentWebcamInZoom = () => isParentWebcamIncreased;
    const userInfo = useMemo(() => ({
        displayName: user.email,
        email: user.email,
    }), [user]);

    const isUserWebcamInZoom = () => {
        const usersChecks = {
            [userRoles.parent]: isParentWebcamInZoom,
            [userRoles.therapist]: isTherapistWebcamInZoom,
        }

        return usersChecks[user?.role]();
    }

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
                <Jitsi
                    meetingId={meetingId}
                    height={webcamHeight}
                    userInfo={userInfo}
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