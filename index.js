function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase()) ;
}
function logWhisper(string) {
    console.log(string.toLowerCase()) ;
}
function sayHiToHeadphonedRoommate(string) {
    var answer1 = "I can't hear you!"
    var answer2 = "YES INDEED!"
    var answer3 ="I would love to!"
    if (string.toLowerCase() === string) {
        return answer1
    }
    else if (string.toUpperCase() === string) {
        return answer2
    } 
    else if("Let's have dinner together!" === string) {
        return answer3
    }
}