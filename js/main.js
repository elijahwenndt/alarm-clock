function liveUpdate () {
    const currentTime = new Date ();
    let hours = currentTime.getHours();
    if (hours < 10){
        hours = "0" + hours
    }
    
    let minutes = currentTime.getMinutes ();
    if (minutes < 10){
        minutes = "0" + minutes
    }
    
    let seconds = currentTime.getSeconds ();
    if (seconds < 10){
        seconds = "0" + seconds
    }
    
    let timeComplete = hours + ":" + minutes + ":" + seconds;
    document.getElementById('clock-face').innerHTML = timeComplete;
    
    let alarmTime = document.getElementById('alarmSelector').value 
    console.log(alarmTime)
     
    if (alarmTime + ':00' === timeComplete) {
             document.getElementById('alarm').innerHTML = "Get Your Ass Out Of Bed";
            // alert('get up')
        };
    
    document.getElementById("btn").addEventListener("click", () => {
             document.getElementById('alarm').innerHTML = " ";
        })    
     
};
setInterval(liveUpdate, 1000);

const currentDate = new Date();

let month = currentDate.getMonth() + 1;
let day = currentDate.getDate();
let year = currentDate.getFullYear();

let dateComplete = month + "/" + day + "/" + year;
document.getElementById('full-date').innerHTML = dateComplete;

// let alarmtime = document.getElementById('alarmSelector').value 
// console.log(alarmtime)