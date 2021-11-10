import React, { useEffect, useContext } from 'react';

import PropTypes from 'prop-types';

import { JitsiContext } from 'context/JitsiContext/JitsiContext.js';


const Jitsi = (props) => {

    const { meetingId, userInfo, toolbarItems, width, height, className } = props

    const { startMeet } = useContext(JitsiContext)

    useEffect(() => {
        if (window.JitsiMeetExternalAPI && meetingId) {
            startMeet({
                meetingId,
                width,
                height,
                toolbarItems,
                userInfo,
                jitsiBlockSelector: '#jitsi-iframe'
            })
        } else {
            alert('JitsiMeetExternalAPI not loaded');
        }
    }, [height, meetingId, startMeet, toolbarItems, userInfo, width])

    return <div
        id='jitsi-iframe'
        style={{
            width,
            height
        }}
        className={className}
    />
}

Jitsi.propTypes = {
    meetingId: PropTypes.string.isRequired,
    userInfo: PropTypes.object,
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    height: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    toolbarItems: PropTypes.arrayOf(PropTypes.string),
    className: PropTypes.string
}

export default React.memo(Jitsi);