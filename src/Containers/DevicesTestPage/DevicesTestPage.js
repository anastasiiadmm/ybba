import React, { useRef, useEffect, useState } from 'react';

import { v4 as uuidv4 } from 'uuid'

import SidebarContainer from 'Components/SidebarContainer/SidebarContainer';
import Jitsi from 'Components/Jitsi/Jitsi';
import { jitsiTools } from 'constants.js';
import JitsiBlock from 'Components/JitsiBlock/JitsiBlock.js';


const DevicesTestPage = () => {

    const jitsiWrapper = useRef(null)
    const [jitsiWindowHeight, setJitsiWindowHeight] = useState(0)

    const tools = [
        jitsiTools.mic,
        jitsiTools.camera
    ]

    const randomMeetingId = uuidv4()

    useEffect(() => {
        if (jitsiWrapper.current) {
            setJitsiWindowHeight(jitsiWrapper.current.offsetHeight)
        }
    }, [])

    return (
        <SidebarContainer>
            <div className='main__inner' ref={jitsiWrapper}>
                {jitsiWindowHeight && (
                    <JitsiBlock>
                        <Jitsi
                            meetingId={randomMeetingId}
                            height={jitsiWindowHeight}
                            width='100%'
                            toolbarItems={tools}
                        />
                    </JitsiBlock>
                )}
            </div>
        </SidebarContainer>
    );
}

export default DevicesTestPage;