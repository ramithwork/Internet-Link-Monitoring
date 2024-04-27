// detectDeviceType [MODULE] [ver 1.0.0]
// Detects and returns the device type as:
// MOBILE: 'mobile',
// TABLET: 'tablet',
// DESKTOP: 'desktop'

const deviceType = {
    MOBILE: 'mobile',
    TABLET: 'tablet',
    DESKTOP: 'desktop'
}

function detectDeviceType() {
    const userAgent = navigator.userAgent

    if (/Mobi/.test(userAgent)) {
        return deviceType.MOBILE
    } 
    else if (/Tablet|iPad/i.test(userAgent)) {
        return deviceType.TABLET
    } 
    else {
        return deviceType.DESKTOP
    }
}



export const device = detectDeviceType()