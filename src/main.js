import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'
//
// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `
//
// setupCounter(document.querySelector('#counter'))


const controls = document.getElementById('controls');
const textInput = document.getElementById('textInput');
const displayText = document.getElementById('displayText');
const colorPicker = document.getElementById('colorPicker');
const fontSizeDisplay = document.getElementById('fontSizeDisplay');
let fontSize = 32;

function updateText() {
  displayText.textContent = textInput.value;
}

function changeFontSize(delta) {
  fontSize = Math.max(8, fontSize + delta);
  displayText.style.fontSize = fontSize + 'px';
  fontSizeDisplay.textContent = fontSize;
}

function updateColor() {
  displayText.style.color = colorPicker.value;
}

// Toggle controls visibility with Ctrl+C
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'c') {
    controls.classList.toggle('hidden');
  }
});

document.getElementById('updateBtn').addEventListener('click', updateText);
document.getElementById('increaseFontSizeBtn').addEventListener('click', () => changeFontSize(4));
document.getElementById('decreaseFontSizeBtn').addEventListener('click', () => changeFontSize(-4));
document.getElementById('colorPicker').addEventListener('change', updateColor);
// Initialize with white text color
updateColor();
