let yourName = prompt("Adınız:");
let myClock = document.querySelector("#myClock");

if (yourName === "" || yourName === " ") {
  alert("İsminizi Girmediniz");
} else {
  document.querySelector("#myName").innerHTML = yourName;
}
function currentTime() {
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
  myClock.innerHTML = `
    ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${
    gunler[date.getDay()]
  } 
`;
}
currentTime();
setInterval(currentTime, 1000);
