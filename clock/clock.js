const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date();
let time = a.getHours()-12 + ':' + a.getMinutes() + ':' + a.getSeconds();
let date = a.toLocaleDateString(undefined,options);
    document.getElementById("showtime").innerHTML = " "+time +  " <br>on " + date ;
}, 1000);
