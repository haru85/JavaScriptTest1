const hours = document.getElementById("h");
const minutes = document.getElementById("m");
const seconds = document.getElementById("s");
const c_seconds = document.getElementById("cs");
const startable =  document.getElementById("start");

let count = true;
startable.disabled = false;

let time =0;
let hour = 0;
let minute = 0;
let second = 0;
let c_second = 0;
let timer = null;


function countTime() {
    time ++;
    let hour = Math.floor(time / 36000);
    let minute = Math.floor((time % 36000) / 600);
    let second = Math.floor(((time % 36000) % 600) / 10 );
    let c_second =((time % 36000) % 600) % 10;

    hours.innerHTML = hour;
    minutes.innerHTML = minute;
    seconds.innerHTML = second;
    c_seconds.innerHTML = c_second;
}

function start() {
    startable.disabled = true;
    timer = setInterval(countTime, 100);
}

function stop() {
    clearInterval(timer);
    startable.disabled = false;
}

function reset() {
    hours.innerHTML=0;
    minutes.innerHTML=0;
    seconds.innerHTML=0;
    c_seconds.innerHTML=0;
    time = 0;
}