//header javascript

// Lav variablen "btn", der henviser til ".toggle-btn"
const btn = document.querySelector(".toggle-btn");
// Lav variablen "menu", der henviser til ".main-menu"
const menu = document.querySelector(".main-menu");
const playstation = document.querySelector("#playstation");
const playstationBtn = document.querySelector("#ps-toggle-btn");
const xbox = document.querySelector("#xbox");
const xboxBtn = document.querySelector("#xboxBtn");
const nintendo = document.querySelector("#nintendo");
const nintendoBtn = document.querySelector("#nintendoBtn");
const sega = document.querySelector("#sega");
const segaBtn = document.querySelector("#segaBtn")
const andet = document.querySelector("#andet")
const andetBtn = document.querySelector("#andetBtn")
// Lav funktionen "toggleMenu()" med følgende funktionalitet


function toggleMenu() {

  // a) toggle klassen "shown" på menu vha. classList.toggle
  menu.classList.toggle("shown");
  // b) lav variablen "menuShown", som siger, at menu-variablen indeholder klassen "shown" via classList.contains("")
  const menuShown = menu.classList.contains("shown");
  // c) spørg om "menuShown" i if-sætningen nedenfor (=> if (menuShown)), og udskift teksten
  if (menuShown) {
    console.log(menuShown); // se i konsollen
    // sæt btn.textContent til "Luk", hvis menuShown er "true"
    btn.textContent  = "X";
  } else {
    console.log(menuShown); // se i konsollen
    // sæt btn.textContent til "Menu", hvis menuShown er "false"
    btn.textContent = "=";
  }
// "toggleMenu()" slutter her
}

function togglePlaysation() {
  playstation.classList.toggle("shown");
}

function toggleXbox() {
  xbox.classList.toggle("shown");
}

function toggleNintendo() {
  nintendo.classList.toggle("shown");
}

function toggleSega() {
  sega.classList.toggle("shown");
}

function toggleAndet() {
  andet.classList.toggle("shown");
}
// Tilføj et klik-event til "btn", der sætter toggleMenu-funktionen i gang
btn.addEventListener("click", toggleMenu);
playstationBtn.addEventListener("click", togglePlaysation);
xboxBtn.addEventListener("click", toggleXbox);
nintendoBtn.addEventListener("click", toggleNintendo)
segaBtn.addEventListener("click", toggleSega);
andetBtn.addEventListener("click", toggleAndet)



//forside javascript


window.addEventListener("load", sidenVises);


function sidenVises() {
  document.querySelector("#button1container").classList.add("buttonColor");
  document.querySelector("#button2container").classList.add("buttonColor");
  document.querySelector("#button3container").classList.add("buttonColor");
}

document.querySelector("#button1container").addEventListener("click", slide1);
document.querySelector("#button2container").addEventListener("click", slide2);
document.querySelector("#button3container").addEventListener("click", slide3);

function slide1() {
  console.log(slide1);
  document.querySelector("#button1container").classList.remove("buttonColor");
  document.querySelector("#slide1").classList.remove("hide");
  document.querySelector("#slide2").classList.remove("hide");
  document.querySelector("#slide3").classList.remove("hide");
  document.querySelector("#button1container").classList.remove("buttonClicked");
  document.querySelector("#button2container").classList.remove("buttonClicked");
  document.querySelector("#button3container").classList.remove("buttonClicked");
  document.querySelector("#button2container").classList.add("buttonColor");
  document.querySelector("#button3container").classList.add("buttonColor");

  document.querySelector("#slide2").classList.add("hide");
  document.querySelector("#slide3").classList.add("hide");
  document.querySelector("#button1container").classList.add("buttonClicked");
}

function slide2() {
  console.log(slide1);
  document.querySelector("#button2container").classList.remove("buttonColor");
  document.querySelector("#slide1").classList.remove("hide");
  document.querySelector("#slide2").classList.remove("hide");
  document.querySelector("#slide3").classList.remove("hide");
  document.querySelector("#button1container").classList.remove("buttonClicked");
  document.querySelector("#button2container").classList.remove("buttonClicked");
  document.querySelector("#button3container").classList.remove("buttonClicked");
  document.querySelector("#button1container").classList.add("buttonColor");
  document.querySelector("#button3container").classList.add("buttonColor");

  document.querySelector("#slide1").classList.add("hide");
  document.querySelector("#slide3").classList.add("hide");
  document.querySelector("#button2container").classList.add("buttonClicked");
}

function slide3() {
  console.log(slide1);
  document.querySelector("#button3container").classList.remove("buttonColor");
  document.querySelector("#slide1").classList.remove("hide");
  document.querySelector("#slide2").classList.remove("hide");
  document.querySelector("#slide3").classList.remove("hide");
  document.querySelector("#button1container").classList.remove("buttonClicked");
  document.querySelector("#button2container").classList.remove("buttonClicked");
  document.querySelector("#button3container").classList.remove("buttonClicked");
  document.querySelector("#button2container").classList.add("buttonColor");
  document.querySelector("#button1container").classList.add("buttonColor");

  document.querySelector("#slide2").classList.add("hide");
  document.querySelector("#slide1").classList.add("hide");
  document.querySelector("#button3container").classList.add("buttonClicked")
}

window.addEventListener("load", sidenVises);
  document.querySelector("#button3container").classList.add("buttonClicked");
