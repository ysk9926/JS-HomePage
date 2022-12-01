const clockTitle = document.querySelector(".js-clock");

function clock() {
    const masTime = new Date("2022-12-25");
    const todayTime = new Date();
    
    const diff = masTime - todayTime;

    const dDay = Math.floor(diff / (1000*60*60*24));
    const dHour = Math.floor((diff / (1000*60*60)) % 24);
    const dMin = Math.floor((diff / (1000*60)) % 60);
    const dSec = Math.floor(diff / 1000 % 60);
    clockTitle.innerText = `${dDay}d ${dHour}h ${dMin}m ${dSec}s`;
}
clock()
setInterval(clock, "1000");
