import { device } from "./detectDeviceType.js" // Returns the type of device.
import { switchView } from "./viewSwitcher.js" // Switch between mobile/desktop views.
import { uiUpdate } from "./updateUI.js" // Updating the UI.
import { resetCurrentConnManager, updateCurrentConnManager } from "./currentConnManager.js" // Reset the current connection state.

resetCurrentConnManager() // Reset the current connection state.

// DEMSKTOP/MOBILE decision.
switchView(device) // Switching view between desktop/mobile.
if (device === "desktop"){
    let eventsObjArr = [] // Holds all eventObj.
    let iniSession = new Date() // Session initialised.

    setInterval(function() {
        // Code runs each time as per duration set.
        
        // Create eventObj & add to eventsObjArr
        const eventObj = {
            connStat: navigator.onLine,
            time: new Date(),
            session: iniSession,
            effType: navigator.connection.effectiveType,
            downlink: navigator.connection.downlink,
            rtt: navigator.connection.rtt
        }

        eventsObjArr.push(eventObj) // event is added to array containing all event objects.

        updateCurrentConnManager(eventObj) // Update the current connection object.
        
        uiUpdate(eventObj) // Update the UI elements based on online/offline and colours for connection data.

        // console.log(eventsObjArr)
    
    }, 1000)
}

