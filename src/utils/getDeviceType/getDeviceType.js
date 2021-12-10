import { deviceTypes } from 'constants.js';

/**
 * Sync function to get type of the user device (mobile, tablet or desktop)
 * @returns {string} Type of user device
 */
export const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return deviceTypes.tablet;
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return deviceTypes.mobile;
    }
    return deviceTypes.desktop;
};