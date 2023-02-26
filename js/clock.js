let Name = prompt("Adınız:")
let myClock = document.querySelector('#myClock')
if(Name === ""){
    alert("İsminizi Girmediniz")
}
else{
    document.querySelector('#myName').innerHTML= Name;
}
function currentTime(){
    let date = new Date();
    let gunler =["Pazar","Pazartesi", "Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    myClock.innerHTML = `
    ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${gunler[date.getDay()]} 
`
}

currentTime();
setInterval(currentTime, 1000);