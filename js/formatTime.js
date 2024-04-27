// formatTime - [MODULE]
// When passed a date object, will return object.
// obj:{
//     hours: hours,
//     minutes: minutes,
//     seconds: seconds
// } 

function formatTime(time){
    var hours = Math.floor(time / 3600000); // 1 hour = 3600000 milliseconds
    var minutes = Math.floor((time % 3600000) / 60000); // 1 minute = 60000 milliseconds
    var seconds = Math.floor(((time % 3600000) % 60000) / 1000); // 1 second = 1000 milliseconds

    // Return the formatted time
    return {
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}


export { formatTime as formatTime }