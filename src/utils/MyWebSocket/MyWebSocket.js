
export class ReduxWebSocket extends WebSocket {

    sendWsAction(action) {
        if (this.readyState === this.OPEN) {
            this.send(JSON.stringify(action))
        }
    }

}