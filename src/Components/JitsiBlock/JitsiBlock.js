import React, { useState } from 'react';

import { JitsiContext } from 'context/JitsiContext/JitsiContext.js';


const JitsiBlock = (props) => {

    const {
        children
    } = props

    const [api, setApi] = useState(null)

    const startMeet = ({ meetingId, width, height, toolbarItems, userInfo }) => {
        const options = {
            roomName: meetingId,
            width: width,
            height: height,
            configOverwrite: { prejoinPageEnabled: false },
            interfaceConfigOverwrite: {
                TOOLBAR_BUTTONS: toolbarItems || [],
                SHOW_WATERMARK_FOR_GUESTS: false
            },
            parentNode: document.querySelector('#jitsi-iframe'),
            userInfo: { ...userInfo }
        }
        const apiObj = new window.JitsiMeetExternalAPI('meet.jit.si', options);
        setApi(apiObj)
    }

    const context = {
        startMeet,
        api
    }

    return (
        <JitsiContext.Provider value={context}>
            {children}
        </JitsiContext.Provider>
    );
}

export default JitsiBlock;