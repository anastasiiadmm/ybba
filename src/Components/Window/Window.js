import React, {useEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import PropTypes from 'prop-types';
import {envs} from '../../constants';
import config from '../../config';



const Window = (props) => {

    const {
        children, handleClose
    } = props

    const [container, setContainer] = useState(null);
    const newWindow = useRef(null);

    const importStylesFor = {
        [envs.local]: () => {
            const styles = document.getElementsByTagName('style')

            for (let i = 0; i < styles.length; i++) {
                const styleCopy = styles[i].cloneNode(true)
                newWindow.current.document.head.appendChild(styleCopy)
            }
        },
        [envs.development]: () => {
            const stylesheets = Array.from(document.styleSheets);
            stylesheets.forEach(stylesheet => {
                const css = stylesheet;

                if (stylesheet.href) {
                    const newStyleElement = document.createElement('link');
                    newStyleElement.rel = 'stylesheet';
                    newStyleElement.href = stylesheet.href;
                    newWindow.current.document.head.appendChild(newStyleElement);
                } else if (css && css.cssRules && css.cssRules.length > 0) {
                    const newStyleElement = document.createElement('style');
                    Array.from(css.cssRules).forEach(rule => {
                        newStyleElement.appendChild(document.createTextNode(rule.cssText));
                    });
                    newWindow.current.document.head.appendChild(newStyleElement);
                }
            })
        }
    }


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

            importStylesFor[config.appEnvironment]()

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
