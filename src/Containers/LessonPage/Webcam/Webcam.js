import React, { useState } from 'react';
import { addClasses } from 'utils/addClasses/addClasses.js';
import Jitsi from 'Components/Jitsi/Jitsi.js';
import { jitsiTools, userRoles } from 'constants.js';
import PropTypes from 'prop-types';
import { checkUserRole } from 'utils/user.js';

const Webcam = (props) => {

    const {
        meetingId
    } = props

    const [isWebcamInZoom, setWebcamInZoom] = useState(false)

    const webcamZoomToggle = () => {
        setWebcamInZoom(!isWebcamInZoom)
    }

    return (
        <div className={addClasses('', {
            'gamef__person-child': checkUserRole(userRoles.therapist),
            'gamef__person-teacher': checkUserRole(userRoles.parent)
        })}>
            <div className={addClasses('gamef__person-in position-relative', {
                'zoom': isWebcamInZoom
            })}>
                <button
                    className='gamef__person-btn zoomBtn'
                    type='button'
                    onClick={webcamZoomToggle}
                >
                    {isWebcamInZoom ? '-' : '+'}
                </button>
                <Jitsi
                    meetingId={meetingId}
                    height={195}
                    className='gamef__teacher-screen'
                    toolbarItems={Object.values(jitsiTools)}
                />
            </div>
        </div>
    );
}

Webcam.propTypes = {
    meetingId: PropTypes.string.isRequired
}

export default Webcam;