import React, { useEffect, useState, useCallback } from 'react';
import { WsContext } from 'context/WsContext/WsContext.js';
import { ReduxWebSocket } from 'utils/MyWebSocket/MyWebSocket.js';
import config from 'config.js';
import { useSelector, useDispatch } from 'react-redux';
import { authSelector, refreshToken } from 'redux/auth/authSlice.js';
import PropTypes from 'prop-types';
import { clearWebSocket, webSocketSelector } from 'redux/webSocker/webSockerSlice.js';
import { DISCONNECT } from 'redux/actionTypes.js';

function WebSocket(props) {

    const {
        children, onOpenMessages
    } = props

    const [ws, setWs] = useState(null)
    const [lastSentData, setLastSentData] = useState(null)

    const { tokens } = useSelector(authSelector)
    const { status } = useSelector(webSocketSelector)

    const dispatch = useDispatch()

    const connectToWs = useCallback(() => {
        if (ws) {
            ws.close()
        }
        const newWsConnection = new ReduxWebSocket(`${config.wsUrl}?token=${tokens.access}`);
        setWs(newWsConnection)
    }, [tokens.access])

    const sendWsAction = (action, setLastSent = true) => {
        if (ws && ws.readyState && ws.OPEN) {
            ws.sendWsAction(action)
            if (setLastSent) {
                setLastSentData(action)
            }
        }
    }

    const refreshAccessToken = async () => {
        ws.onclose = () => console.log('Ws closed')
        ws.close()
        await dispatch(refreshToken())
        dispatch(clearWebSocket())
    }

    useEffect(() => {
        console.log('Status', status)
        if (status === DISCONNECT) {
            refreshAccessToken()
        }
        // eslint-disable-next-line
    }, [status])

    useEffect(() => {
        if (ws) {
            ws.onopen = () => {
                if (onOpenMessages) {
                    onOpenMessages.forEach(message => {
                        sendWsAction(message)
                    })
                }
                if (lastSentData) {
                    sendWsAction(lastSentData)
                    setLastSentData(null)
                }
            };
            ws.onclose = async () => {
                console.log('ws closed');
                console.log('Try to reconnect ws')
                await setTimeout(() => {
                    connectToWs()
                }, 1000)
            }

            ws.onmessage = msg => {
                const action = JSON.parse(msg.data)
                if (action?.type) {
                    dispatch(action)
                }
            };

            ws.onerror = () => {
                ws.close()
            }
        }
    }, [ws])

    useEffect(() => {
        connectToWs()
    }, [tokens.access])

    useEffect(() => {
        dispatch(clearWebSocket())

        return () => {
            if (ws) {
                ws.onclose = () => console.log('ws closed!')
                ws.close();
            }
        };
        // eslint-disable-next-line
    }, []);

    const contextData = {
        sendWsAction, ws
    }

    return (
        <WsContext.Provider value={contextData}>
            {children}
        </WsContext.Provider>
    );
}

WebSocket.propTypes = {
    onOpenMessages: PropTypes.any
}

export default WebSocket;