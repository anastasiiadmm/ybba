import config from 'config.js';

/**
 * Sync function initialize sessionStack session
 */
export const initSessionStack = () => {
    if (config.sessionStackId) {
        (
            function (a, b) {
                let c = window;
                c.SessionStackKey = a
                c[a] = c[a] || {
                    t: b,
                    q: []
                };
                let d = ['start', 'stop', 'identify', 'getSessionId', 'log', 'setOnDataCallback'], e = 0;
                for (; e < d.length; e++) (function (b) {
                    c[a][b] = c[a][b] || function () {
                        c[a].q.push([b].concat([].slice.call(arguments, 0)));
                    }
                })(d[e]);
                const f = document.createElement('script');
                f.async = 1
                f.crossOrigin = 'anonymous'
                f.src = 'https://cdn.sessionstack.com/sessionstack.js';
                var g = document.getElementsByTagName('script')[0];
                g.parentNode.insertBefore(f, g)
            }
        )('SessionStack', config.sessionStackId);
    }
}

/**
 * Sync function defines user info for sessionStack
 * @param {string} userId
 * @param {string} email
 * @param {string} displayName
 * @param {string} role
 */
export const defineUser = ({ userId, email, displayName, role }) => {
    if (window.SessionStack) {
        window.SessionStack.identify({
            userId,
            email,
            displayName,
            role,
        });
    }
}

/**
 * Sync function to stop sessionStack recording
 */
export const stopSessionStackRecording = () => {
    if (!!window.SessionStack) {
        window.SessionStack.stop()
    }
}