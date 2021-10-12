import React, {useEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import PropTypes from 'prop-types';



const Window = (props) => {

    const {
        children, handleClose
    } = props

    const [container, setContainer] = useState(null);
    const newWindow = useRef(null);

    useEffect(() => {
        setContainer(document.createElement('div'));
    }, []);

    useEffect(() => {
        if (container) {
            newWindow.current = window.open(
                '',
                '',
                'width=1000,height=1000,left=0,top=0'
            );
            const styles = document.getElementsByTagName('style')
            for (let i = 0; i < styles.length; i++) {
                const styleCopy = styles[i].cloneNode(true)
                newWindow.current.document.head.appendChild(styleCopy)
            }
            newWindow.current.document.body.appendChild(container);
            newWindow.current.onbeforeunload = handleClose

            const curWindow = newWindow.current;

            return () => curWindow.close()
        }
    }, [container]);

    return container && createPortal(children, container);
}

Window.propTypes = {
    setState: PropTypes.func,
    handleClose: PropTypes.func
}

export default Window;
