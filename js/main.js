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
    bodyEl.style.backgroundSize = "100%";
    let msg = new SpeechSynthesisUtterance();
    let voices = window.speechSynthesis.getVoices();
    msg.voice = voices[1];
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 2;
    msg.lang = "en-US";
    msg.text = "Your next vacation city is maldives";
    speechSynthesis.speak(msg);
  }
}
/*else if (monthOfBirth === "february") {
    bodyEl.style.background = "url(marrakech.jpg) no-repeat";
    bodyEl.style.backgroundSize = "100% 100vh";
    let msg = new SpeechSynthesisUtterance();
    let voices = window.speechSynthesis.getVoices();
    msg.voice = voices[1];
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 2;
    msg.lang = "en-US";
    msg.text = "Your next vacation city is marrakech";
    speechSynthesis.speak(msg);
  } else if (monthOfBirth === "march") {
    bodyEl.style.background = "url(parisstock.jpg) no-repeat";
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
    bodyEl.style.background = "url(dubaistock.webp) no-repeat";
    bodyEl.style.backgroundSize = "100% 100vh";
    let msg = new SpeechSynthesisUtterance();
    let voices = window.speechSynthesis.getVoices();
    msg.voice = voices[1];
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 2;
    msg.lang = "en-US";
    msg.text = "Your next vacation city is dubai";
    speechSynthesis.speak(msg);
  } else if (monthOfBirth === "may") {
    bodyEl.style.background = "url(maldives2.webp) no-repeat";
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
  } else if (monthOfBirth === "june") {
    bodyEl.style.background = "url(maldives2.webp) no-repeat";
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
  } else if (monthOfBirth === "july") {
    bodyEl.style.background = "url(maldives2.webp) no-repeat";
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
  } else if (monthOfBirth === "august") {
    bodyEl.style.background = "url(maldives2.webp) no-repeat";
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
  } else if (monthOfBirth === "september") {
    bodyEl.style.background = "url(maldives2.webp) no-repeat";
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
  } else if (monthOfBirth === "october") {
    bodyEl.style.background = "url(maldives2.webp) no-repeat";
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
  } else if (monthOfBirth === "november") {
    bodyEl.style.background = "url(maldives2.webp) no-repeat";
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
  } else if (monthOfBirth === "december") {
    bodyEl.style.background = "url(maldives2.webp) no-repeat";
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
  }
}*/

//let voices = window.speechSynthesis.getVoices();
//console.log(voices);
