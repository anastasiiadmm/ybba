import React, { useRef } from 'react';

import { useDraggable } from 'hooks/useDraggable/useDraggable.js';

import 'Components/Drag/drag.css'


const Drag = (props) => {

    const {
        children
    } = props

    const jitsiRef = useRef(null)
    useDraggable(jitsiRef)

    return (
        <div
            className='position-absolute drag'
            ref={jitsiRef}
        >
            {children}
        </div>
    );
}

export default Drag;