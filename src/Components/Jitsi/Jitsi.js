import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';


const Jitsi = (props) => {

    const {meetingId, userInfo, toolbarItems, width, height} = props

    const [api, setApi] = useState(null)

    const startMeet = () => {
        const options = {
            roomName: meetingId,
            width: width,
            height: height,
            configOverwrite: {prejoinPageEnabled: false},
            interfaceConfigOverwrite: {
                TOOLBAR_BUTTONS: toolbarItems,
                SHOW_WATERMARK_FOR_GUESTS: false
            },
            parentNode: document.querySelector('#jitsi-iframe'),
            userInfo: {...userInfo}
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

    return <div
        id='jitsi-iframe'
        style={{
            width,
            height
        }}
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
    toolbarItems: PropTypes.arrayOf(PropTypes.string)
}

export default Jitsi;