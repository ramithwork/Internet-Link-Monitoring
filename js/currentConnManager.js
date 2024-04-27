// currentConnManagerObj - [MODULE]
// Manages the current connection state and time.

let currentConnManagerObj = {
    state: "true/false",
    stateIniTime: "new Date()"
}

function resetCurrentConnManager(){
    currentConnManagerObj = {
        state: "true/false",
        stateIniTime: "new Date()"
    }
}

function updateCurrentConnManager(event){
    if (currentConnManagerObj.state != event.connStat){
        currentConnManagerObj.state = event.connStat
        currentConnManagerObj.stateIniTime = event.time
    }
}


export { resetCurrentConnManager as resetCurrentConnManager } 
export { updateCurrentConnManager as updateCurrentConnManager }
export { currentConnManagerObj as currentConnManagerObj }