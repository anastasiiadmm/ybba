import React, { useState, useCallback } from 'react';

import { JitsiContext } from 'context/JitsiContext/JitsiContext.js';


const JitsiBlock = (props) => {
    const {
        children
    } = props;

    const [api, setApi] = useState(null);

    const startMeet = useCallback(({ meetingId, width, height, toolbarItems, userInfo, jitsiBlockSelector }) => {
        const options = {
            roomName: meetingId,
            width: width,
            height: height,
            configOverwrite: {
                prejoinPageEnabled: false,
                notifications: [],
            },
            interfaceConfigOverwrite: {
                TOOLBAR_BUTTONS: toolbarItems || [],
                SHOW_WATERMARK_FOR_GUESTS: false,
                SHOW_CHROME_EXTENSION_BANNER: false,
            },
            parentNode: document.querySelector(jitsiBlockSelector),
            userInfo: { ...userInfo },
        };
        const apiObj = new window.JitsiMeetExternalAPI('meet.jit.si', options);
        apiObj.executeCommand('subject', ' ');
        setApi(apiObj);
    }, []);

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