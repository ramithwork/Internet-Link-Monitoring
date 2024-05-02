# Internet-Link-Monitoring
A PWA (Progressive Web App) that monitors browser internet connectivity. Sends notifications when connected/disconnected. Maintain and export log.

App: https://4uwebsite.github.io/Internet-Link-Monitoring/

# Features:
- Internet connected/disconnected status.
- Connection Data.
- Session duration.
- Time elapsed since last connected/disconnected.
- Data logging:
    - Data Structure:
        event = {
            id: "timestamp",
            sessionid: "SIDtimestamp",
            conStat: "con/dis",
            connData: "4G/10mbps/100ms"
        }
- Log Export.
- Notifications.
- Disable when not desktop.
- Title should reflect connection state.

# UI/UX
https://www.figma.com/file/zBX8YoUKD0slplxnrkFstl/Internet-Link-Monitoring?type=design&node-id=0%3A1&mode=design&t=JnhE6p0iW3f8bZ1B-1
*** Modifed in implementation.



## Known Issues
- Connection favicon preloading fails when offline. This is scheduled to be fixed when the project is released as a Progressive Web App (PWA) with a Service Worker.
- Requesting Permission by button:
    Unable to implement this feature.

# Feature Pipeline
- Show Connection State averages.
- Data usage meter.

# Versioning
2.0.19
- Non-code changes.
- Temp about page added (link in index, img asset).
- Bug: why are shell assets getting added to dynamic cache?
2.0.18
- Non-code changes.
- Service Worker cache versioning implemented. 
2.0.17
- Bug fix: Root path should be given as "/". Other paths in folders without "/".
2.0.16
- Modified asset path to be like this "css/button.css".
2.0.15
- Only caching index page and one css file. No images.
2.0.14
- Only caching index page and one image. 
2.0.13
- Only caching index page and images. 
2.0.12
- Only caching index page. 
2.0.11
- Try/catch in assets caching function removed.
- Caching only pages and images.
2.0.10
- Bug Fix: Assets not caching. Added a try/catch block to assets caching function. 
2.0.9
- Bug Fix: Assets not caching. Changed paths for index and one image in the sw.js assets const.
2.0.8
- App icons relative paths in manifest fixed. 
2.0.7
- Colours for theme/apple-app-bar (index head) changed to dark orange (#FF7300).
2.0.6
- Relative paths modified inside index page and manifest.
2.0.5
- Relative paths modified for sw.js and sw-support.js.
2.0.4
- Non-code changes.
- Switched load order so sw-support.js loads before manifest.
2.0.3
- Bug Fix. sw-support.js wasn't added to the assets array in the Service Worker.
2.0.2
- Non-code changes.
- Service worker implementation:
    - Reg [done]
    - Install [done]
    - Activated [done]
    - Precaching [done]
    - fetch handling [done]
    - Cache versioning [NEXT]
2.0.1
- Non-code changes.
- Service worker implementation
2.0.0
- Manifest file and PWA compatibility.
- Currently only Desktop support.
1.0.8
- Mobile view Refresh Page button implemented. 
1.0.7
- Non-code fixes.
1.0.6
- Non-code fixes.
- Completed build.