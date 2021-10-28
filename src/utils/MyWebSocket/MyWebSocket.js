
export class ReduxWebSocket extends WebSocket {

    /**
     * Sends action when ws open
     * @param {object} action Redux action object
     */
    sendWsAction(action) {
        if (this.readyState === this.OPEN) {
            this.send(JSON.stringify(action))
        }
    }

}