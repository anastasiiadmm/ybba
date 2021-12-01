import config from 'config.js';

/**
 * Sync function to start jitsi recording
 * @param api
 */
export const startJitsiRecording = api => {
    if (config.dropBoxToken) {
        api.executeCommand('startRecording', {
            mode: 'file',
            dropboxToken: config.dropBoxToken
        })
    }
}

/**
 * Sync function to stop jitsi recording
 * @param api
 */
export const stopJitsiRecording = api => {
    api.executeCommand('stopRecording', {
        mode: 'file'
    })
}