let yourName = prompt("Adınız:");
let myClock = document.querySelector("#myClock");
let textCenter = document.querySelector(".text-center");
if (yourName === "" || yourName === " ") {
  alert("isim girmediniz");
  textCenter.style.display = "none";
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
