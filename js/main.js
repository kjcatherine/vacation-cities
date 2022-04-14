const bodyEl = document.querySelector("body");
const imgTheme = document.querySelector(".themeImg");
const textTheme = document.querySelector("h1");

const btnTheme = document.querySelector(".btn");

document.querySelector("#btn").addEventListener("click", run);

function run() {
  const monthOfBirth = document
    .querySelector("#birthMonth")
    .value.toLowerCase();
  if (monthOfBirth === "january") {
    imgTheme.classList.add("hidden");
    textTheme.classList.add("hidden");
    //btnTheme.classList.add("hidden");
    //monthOfBirth.classList.add("hidden");
    bodyEl.style.background = "url(maldives2.webp) no-repeat";
    bodyEl.style.backgroundColor = "skyblue";
    bodyEl.style.backgroundSize = "100% 100vh";
    let msg = new SpeechSynthesisUtterance();
    let voices = window.speechSynthesis.getVoices();
    msg.voice = voices[1];
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 2;
    msg.lang = "en-US";
    msg.text = "Your next vacation city is maldives";
    speechSynthesis.speak(msg);
  } else if (monthOfBirth === "february") {
    imgTheme.classList.add("hidden");
    textTheme.classList.add("hidden");
    bodyEl.style.background = "url(marrakech.jpg) no-repeat";
    bodyEl.style.backgroundColor = "skyblue";
    bodyEl.style.backgroundSize = "100% 100vh";
    let msg = new SpeechSynthesisUtterance();
    let voices = window.speechSynthesis.getVoices();
    msg.voice = voices[3];
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 2;
    msg.lang = "en-US";
    msg.text = "Your next vacation city is marrakech";
    speechSynthesis.speak(msg);
  } else if (monthOfBirth === "march") {
    imgTheme.classList.add("hidden");
    textTheme.classList.add("hidden");
    bodyEl.style.background = "url(parisstock.jpg) no-repeat";
    bodyEl.style.backgroundColor = "skyblue";
    bodyEl.style.backgroundSize = "100% 100vh";
    let msg = new SpeechSynthesisUtterance();
    let voices = window.speechSynthesis.getVoices();
    msg.voice = voices[1];
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 2;
    msg.lang = "en-US";
    msg.text = "Your next vacation city is paris";
    speechSynthesis.speak(msg);
  } else if (monthOfBirth === "april") {
    imgTheme.classList.add("hidden");
    textTheme.classList.add("hidden");
    bodyEl.style.background = "url(dubaistock.webp) no-repeat";
    bodyEl.style.backgroundColor = "skyblue";
    bodyEl.style.backgroundSize = "100% 100vh";
    let msg = new SpeechSynthesisUtterance();
    let voices = window.speechSynthesis.getVoices();
    msg.voice = voices[2];
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 2;
    msg.lang = "en-US";
    msg.text = "Your next vacation city is dubai";
    speechSynthesis.speak(msg);
  } else if (monthOfBirth === "may") {
    imgTheme.classList.add("hidden");
    textTheme.classList.add("hidden");
    bodyEl.style.background = "url(montreal2.jpg) no-repeat";
    bodyEl.style.backgroundColor = "skyblue";
    bodyEl.style.backgroundSize = "100% 100vh";
    let msg = new SpeechSynthesisUtterance();
    let voices = window.speechSynthesis.getVoices();
    msg.voice = voices[1];
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 2;
    msg.lang = "en-US";
    msg.text = "Your next vacation city is montreal!";
    speechSynthesis.speak(msg);
  } else if (monthOfBirth === "june") {
    imgTheme.classList.add("hidden");
    textTheme.classList.add("hidden");
    bodyEl.style.background = "url(bali2.jpg) no-repeat";
    bodyEl.style.backgroundColor = "skyblue";
    bodyEl.style.backgroundSize = "100% 100vh";
    let msg = new SpeechSynthesisUtterance();
    let voices = window.speechSynthesis.getVoices();
    msg.voice = voices[1];
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 2;
    msg.lang = "en-US";
    msg.text = "Your next vacation city is Bali!";
    speechSynthesis.speak(msg);
  } else if (monthOfBirth === "july") {
    imgTheme.classList.add("hidden");
    textTheme.classList.add("hidden");
    bodyEl.style.background = "url(hawaii3.jpg) no-repeat";
    bodyEl.style.backgroundColor = "skyblue";
    bodyEl.style.backgroundSize = "100% 100vh";
    let msg = new SpeechSynthesisUtterance();
    let voices = window.speechSynthesis.getVoices();
    msg.voice = voices[1];
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 2;
    msg.lang = "en-US";
    msg.text = "Your next vacation city is Hawai";
    speechSynthesis.speak(msg);
  } else if (monthOfBirth === "august") {
    imgTheme.classList.add("hidden");
    textTheme.classList.add("hidden");
    bodyEl.style.background = "url(singapore4.jpg) no-repeat";
    bodyEl.style.backgroundColor = "skyblue";
    bodyEl.style.backgroundSize = "100% 100vh";
    let msg = new SpeechSynthesisUtterance();
    let voices = window.speechSynthesis.getVoices();
    msg.voice = voices[1];
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 2;
    msg.lang = "en-US";
    msg.text = "Your next vacation city is singapore";
    speechSynthesis.speak(msg);
  } else if (monthOfBirth === "september") {
    imgTheme.classList.add("hidden");
    textTheme.classList.add("hidden");
    bodyEl.style.background = "url(rome.jpg) no-repeat";
    bodyEl.style.backgroundColor = "skyblue";
    bodyEl.style.backgroundSize = "100% 100vh";
    let msg = new SpeechSynthesisUtterance();
    let voices = window.speechSynthesis.getVoices();
    msg.voice = voices[1];
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 2;
    msg.lang = "en-US";
    msg.text = "Your next vacation city is rome";
    speechSynthesis.speak(msg);
  } else if (monthOfBirth === "october") {
    imgTheme.classList.add("hidden");
    textTheme.classList.add("hidden");
    bodyEl.style.background = "url(mykonos3.jpg) no-repeat";
    bodyEl.style.backgroundColor = "skyblue";
    bodyEl.style.backgroundSize = "100% 100vh";
    let msg = new SpeechSynthesisUtterance();
    let voices = window.speechSynthesis.getVoices();
    msg.voice = voices[1];
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 2;
    msg.lang = "en-US";
    msg.text = "Your next vacation city is mykonos";
    speechSynthesis.speak(msg);
  } else if (monthOfBirth === "november") {
    imgTheme.classList.add("hidden");
    textTheme.classList.add("hidden");
    bodyEl.style.background = "url(peru.jpg) no-repeat";
    bodyEl.style.backgroundColor = "skyblue";
    bodyEl.style.backgroundSize = "100% 100vh";
    let msg = new SpeechSynthesisUtterance();
    let voices = window.speechSynthesis.getVoices();
    msg.voice = voices[1];
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 2;
    msg.lang = "en-US";
    msg.text = "Your next vacation city is peru";
    speechSynthesis.speak(msg);
  } else if (monthOfBirth === "december") {
    imgTheme.classList.add("hidden");
    textTheme.classList.add("hidden");
    bodyEl.style.background = "url(turksandcaicos.jpg) no-repeat";
    bodyEl.style.backgroundColor = "skyblue";
    bodyEl.style.backgroundSize = "100% 100vh";
    let msg = new SpeechSynthesisUtterance();
    let voices = window.speechSynthesis.getVoices();
    msg.voice = voices[1];
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 2;
    msg.lang = "en-US";
    msg.text = "Your next vacation city is turks and caicos";
    speechSynthesis.speak(msg);
  }
}

//let voices = window.speechSynthesis.getVoices();
//console.log(voices);
