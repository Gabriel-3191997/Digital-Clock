const currentTime = new Date();
let displayTime = currentTime.toTimeString();

document.getElementById('clock').innerHTML = displayTime;