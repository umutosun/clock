let yourName = prompt("Adınız:");
let myClock = document.querySelector("#myClock");
let date = new Date();
let gunler = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];
if (yourName === "" || yourName === " ") alert("İsminizi Girmediniz");
else document.querySelector("#myName").innerHTML = yourName;

function currentTime() {
  myClock.innerHTML = `
    ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${
    gunler[date.getDay()]
  } 
`;
}

currentTime();
setInterval(currentTime, 1000);
