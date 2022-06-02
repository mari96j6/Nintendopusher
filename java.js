// header js
window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

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
  document.querySelector("#button3container").classList.add("buttonClicked");
}
