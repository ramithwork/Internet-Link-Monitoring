// updateUI - [MODULE]
// Update the UI elements based on online/offline and colours for connection data.

import { currentConnManagerObj } from "./currentConnManager.js"
import { formatTime } from "./formatTime.js"


function updateUI(event){
    // Main function to update UI elements.
    updateTitleBarBG(event)
    updateConnectedStatus(event)
    updateCurrentConnectionTimeElapsed(event)
    updateConnType(event)
    updateDownlink(event)
    updateRTT(event)
    updateConnectionIcon(event)
    updateFavicon(event)
    updateTitle(event)
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
    let connectionIconIMG = document.getElementById("connection-icon")
    if(eventObj.connStat){
        connectionIconIMG.src = "./assets/connected.png"
    }
    else{
        connectionIconIMG.src = "./assets/disconnected.png"
    }
}

function updateFavicon(eventObj){
    // Change the favicon.
    let favicon = document.getElementById("favicon")
    if(eventObj.connStat){
        favicon.href = "./assets/favicon.ico"
    }
    else{
        favicon.href = "./assets/faviconDC.ico"
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

export { updateUI as uiUpdate }