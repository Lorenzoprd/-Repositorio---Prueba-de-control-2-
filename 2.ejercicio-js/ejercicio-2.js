
function time(seconds) {
    const interval = setInterval(()=>{
        const moment = new Date();
        
        if (seconds===5) {
            console.log(moment.getDay(),moment.getHours(),moment.getMinutes(),moment.getSeconds());
        } else {
            seconds++;
        }
    },5000);
}
time(5);