"use strict";

const bodyEl = document.querySelector(".container");
const imgTheme = document.querySelector(".themeImg");
const textTheme = document.querySelector("h1");
let msg = new SpeechSynthesisUtterance();
let voices = window.speechSynthesis.getVoices();
const btnTheme = document.querySelector(".btn");

document.querySelector("#btn").addEventListener("click", run);

function behaviour() {
  imgTheme.classList.add("hidden");
  textTheme.classList.add("hidden");
  //document.querySelector("#birthMonth").value = "";
  //bodyEl.style.backgroundColor = "skyblue";
  bodyEl.style.backgroundSize = "100% 90vh";
  //msg.voice = voices[0];
  msg.voice = voices.filter((voice) => voice.name == "Alex")[0];
  msg.volume = 1;
  msg.rate = 1;
  msg.pitch = 2;
  msg.lang = "en-US";
  speechSynthesis.speak(msg);
}

function run() {
  const monthOfBirth = document
    .querySelector("#birthMonth")
    .value.toLowerCase();
  if (monthOfBirth === "january") {
    msg.text = "Your next vacation city is maldives";
    bodyEl.style.background = "url(./images/maldives2.webp) no-repeat";
    behaviour();
  } else if (monthOfBirth === "february") {
    msg.text = "Your next vacation city is marrakech";
    bodyEl.style.background = "url(./images/marrakech.jpg) no-repeat";
    behaviour();
  } else if (monthOfBirth === "march") {
    msg.text = "Your next vacation city is paris";
    bodyEl.style.background = "url(./images/parisstock.jpg) no-repeat";
    behaviour();
  } else if (monthOfBirth === "april") {
    msg.text = "Your next vacation city is dubai";
    bodyEl.style.background = "url(./images/dubaistock.webp) no-repeat";
    behaviour();
  } else if (monthOfBirth === "may") {
    msg.text = "Your next vacation city is montreal!";
    bodyEl.style.background = "url(./images/montreal2.jpg) no-repeat";
    behaviour();
  } else if (monthOfBirth === "june") {
    msg.text = "Your next vacation city is Bali!";
    bodyEl.style.background = "url(./images/bali2.jpg) no-repeat";
    behaviour();
  } else if (monthOfBirth === "july") {
    msg.text = "Your next vacation city is Hawai";
    bodyEl.style.background = "url(./images/hawaii3.jpg) no-repeat";
    behaviour();
  } else if (monthOfBirth === "august") {
    msg.text = "Your next vacation city is singapore";
    bodyEl.style.background = "url(./images/singapore4.jpg) no-repeat";
    behaviour();
  } else if (monthOfBirth === "september") {
    msg.text = "Your next vacation city is rome";
    bodyEl.style.background = "url(./images/rome.jpg) no-repeat";
    behaviour();
  } else if (monthOfBirth === "october") {
    msg.text = "Your next vacation city is mykonos";
    bodyEl.style.background = "url(./images/mykonos3.jpg) no-repeat";
    behaviour();
  } else if (monthOfBirth === "november") {
    msg.text = "Your next vacation city is peru";
    bodyEl.style.background = "url(./images/peru.jpg) no-repeat";
    behaviour();
  } else if (monthOfBirth === "december") {
    msg.text = "Your next vacation city is turks and caicos";
    bodyEl.style.background = "url(./images/turksandcaicos.jpg) no-repeat";
    behaviour();
  }
}
// let voice = window.speechSynthesis.getVoices();
// console.log(voice);
