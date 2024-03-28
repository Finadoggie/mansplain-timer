let lastSplain;
let counterText = document.getElementById("counter");

function loadTimer(){
    if(localStorage.length == 0) localStorage.setItem("lastSplain", Date.now());
    lastSplain = localStorage.getItem("lastSplain");
}

function resetTimer(){
    localStorage.setItem("lastSplain", Date.now());
    lastSplain = localStorage.getItem("lastSplain");
}

function updateText(){
    timeSince = Date.now() - lastSplain;
    timeSince /= 1000;
    console.log(timeSince)
    
    days = Math.floor(timeSince / (24 * 60 * 60)).toLocaleString('en-US', { minimumIntegerDigits: 3, useGrouping: false });
    timeSince %= (24 * 60 * 60);

    hours = Math.floor(timeSince / (60 * 60)).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    timeSince %= (60 * 60);

    minutes = Math.floor(timeSince / (60)).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    timeSince %= (60);

    seconds = Math.floor(timeSince).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    
    counterText.innerHTML = `<h1>${days}:${hours}:${minutes}:${seconds}</h1>`;
}

loadTimer()
window.setInterval(updateText, 1000);