// updateUI - [MODULE]
// Update the UI elements based on online/offline and colours for connection data.

import { currentConnManagerObj } from "./currentConnManager.js"
import { formatTime } from "./formatTime.js"

let notificationStateObj = {
    con: false,
    dis: false
}


function updateUI(event){
    // Main function to update UI elements.

    // Core UI functions.
    updateTitleBarBG(event)
    updateConnectedStatus(event)
    updateCurrentConnectionTimeElapsed(event)
    updateConnType(event)
    updateDownlink(event)
    updateRTT(event)
    updateConnectionIcon(event)
    updateTitle(event)

    // Validate and trigger notification.
    notificationTrigger()

}

function updateTitleBarBG(eventObj){
    // Change title bar background based on internet connectivity.
    let titleBarDiv = document.getElementById("title-bar")

    if (eventObj.connStat){
        titleBarDiv.classList.remove("bg-red")
        titleBarDiv.classList.add("bg-green")
    }
    else{
        titleBarDiv.classList.remove("bg-green")
        titleBarDiv.classList.add("bg-red")
    }
}

function updateConnectedStatus(eventObj){
    // Change connected-status text based on internet connectivity.
    let connectedStatusDiv = document.getElementById("connected-status")

    if (eventObj.connStat){
        connectedStatusDiv.innerText = "INTERNET CONNECTED"
    }
    else{
        connectedStatusDiv.innerText = "INTERNET DISCONNECTED"
    }
}

function updateCurrentConnectionTimeElapsed(eventObj){
    // Updates the time elapsed DIV by deducting the connection's initial state time from the event object time (current time).
    let timeElapsed = eventObj.time - currentConnManagerObj.stateIniTime
    let timeElapsedDiv = document.getElementById("time-elapsed")
    let timeElapsedFormatted = `${formatTime(timeElapsed).hours}h ${formatTime(timeElapsed).minutes}m ${formatTime(timeElapsed).seconds}s`
    timeElapsedDiv.innerText = timeElapsedFormatted
}

function updateConnType(eventObj){
    // Update the connection effective type. i.e. "3G", "4G". Update as "-" if disconnected.
    let connDataTypeSpan = document.getElementById("conn-data-type")
    if (eventObj.connStat){
        connDataTypeSpan.innerText = eventObj.effType
    }
    else{
        connDataTypeSpan.innerText = "-"
    }
}

function updateDownlink(eventObj){
    // Update connection downlink speed in mbps.
    let connDataDownlinkSpan = document.getElementById("conn-data-downlink")
    if (eventObj.connStat){
        connDataDownlinkSpan.innerText = `${eventObj.downlink}mbps`
    }
    else{
        connDataDownlinkSpan.innerText = "-"
    }
}

function updateRTT(eventObj){
    // Update the RTT in ms.
    let connDataRTTSpan = document.getElementById("conn-data-rtt")
    if(eventObj.connStat){
        connDataRTTSpan.innerText = `${eventObj.rtt}ms`
    }
    else{
        connDataRTTSpan.innerText = "-"
    }
}

function updateConnectionIcon(eventObj){
    // Change the connection icon.
    let connectedImgIcon = document.getElementById("connected-icon")
    let disconnectedImgIcon = document.getElementById("disconnected-icon")
    if(eventObj.connStat){
        connectedImgIcon.classList.remove("display-none")
        connectedImgIcon.classList.add("display-block")
        disconnectedImgIcon.classList.remove("display-block")
        disconnectedImgIcon.classList.add("display-none")
    }
    else{
        connectedImgIcon.classList.remove("display-block")
        connectedImgIcon.classList.add("display-none")
        disconnectedImgIcon.classList.remove("display-none")
        disconnectedImgIcon.classList.add("display-block")
    }
}

function updateTitle(eventObj){
    // Change title text.
    let title = document.querySelector("title")
    if(eventObj.connStat){
        title.innerText = "CONNECTED - Internet Link Monitoring"
    }
    else{
        title.innerText = "DISCONNECTED - Internet Link Monitoring"
    }
}

function updateSession(session){
    // Change the session
    let sessionDiv = document.getElementById("session")
    sessionDiv.innerText = `Session for ${session}`
}

function updateNotificationStatus(result){
    // Change notification-status.
    let notificationStatusDiv = document.getElementById("notification-status")
    
    if (result === "granted"){
        notificationStatusDiv.classList.add("color-green")
        notificationStatusDiv.classList.remove("color-red")
        notificationStatusDiv.innerText = `Notifications Enabled`
    }
    else if (result === "denied"){
        notificationStatusDiv.classList.add("color-red")
        notificationStatusDiv.classList.remove("color-green")
        notificationStatusDiv.innerText = `Notifications Disabled`
    }
}

function notificationTrigger(){
    // Manages the notification tiggering event.
    if (navigator.onLine && !notificationStateObj.con){
        // App is online and hasn't been notified.
        
        renderNotification() // Create and show the notification.
        
        // Set notification tigger management object to.
        notificationStateObj.con = true
        notificationStateObj.dis = false

    }
    else if (!navigator.onLine && !notificationStateObj.dis){
        // App is offline and hasn't been notified.

        renderNotification() // Create and show the notification.

        // Set notification tigger management object.
        notificationStateObj.con = false
        notificationStateObj.dis = true
    }
}

function renderNotification(){
    // Create and trigger the notification.
    let connectedSatusString
    if (navigator.onLine){
        connectedSatusString = "CONNECTED 🟢"
    }
    else{
        connectedSatusString = "DISCONNECTED 🔴"
    }
    if (Notification.permission === 'granted') {
        var notification = new Notification('Internet Connectivity Alert', {
            body: `Internet ${connectedSatusString}`,
            icon: iconSwitcher() 
        });

        // Close the notification after 5 seconds
        setTimeout(notification.close.bind(notification), 5000);
    } else {
        console.log('Notification permission not granted.');
    }
}

function iconSwitcher(){
    // Switch the notification icon for connected/disconnected.
    if (navigator.onLine){
        return "./assets/connected.png"
    }
    else if (!navigator.onLine){
        return "./assets/disconnected.png"
    }
}


export { updateUI as uiUpdate }
export { updateSession as updateSession }
export { updateNotificationStatus as uiUpdateNotificationStatus }