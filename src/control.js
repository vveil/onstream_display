import { wsClient } from './websocket.js';

let currentState = {
	text: '',
	fontSize: 32,
	color: '#ffffff'
};

// Create control panel UI
document.body.innerHTML = `
    <div class="control-panel">
        <h2>Text Control Panel</h2>
        <div class="control-group">
            <input type="text" id="textInput" placeholder="Enter your text here">
            <button id="updateBtn">Update Text</button>
        </div>
        <div class="control-group">
            <label>Font Size: <span id="fontSizeDisplay">32</span>px</label>
            <button id="decreaseFont">-</button>
            <button id="increaseFont">+</button>
        </div>
        <div class="control-group">
            <label>Text Color:</label>
            <input type="color" id="colorPicker" value="#ffffff">
        </div>
        <div class="display-url">
            Display URL (add to OBS): ${window.location.origin}/display
        </div>
    </div>
`;

// Get DOM elements
const textInput = document.getElementById('textInput');
const colorPicker = document.getElementById('colorPicker');
const fontSizeDisplay = document.getElementById('fontSizeDisplay');

// Update UI from WebSocket data
wsClient.addListener((data) => {
	currentState = data;
	updateUI();
});

function updateUI() {
	textInput.value = currentState.text;
	fontSizeDisplay.textContent = currentState.fontSize;
	colorPicker.value = currentState.color;
}

// Event listeners
textInput.addEventListener('input', () => {
	currentState.text = textInput.value;
	wsClient.sendUpdate(currentState);
});

colorPicker.addEventListener('change', () => {
	currentState.color = colorPicker.value;
	wsClient.sendUpdate(currentState);
});

document.getElementById('decreaseFont').addEventListener('click', () => {
	currentState.fontSize = Math.max(8, currentState.fontSize - 4);
	fontSizeDisplay.textContent = currentState.fontSize;
	wsClient.sendUpdate(currentState);
});

document.getElementById('increaseFont').addEventListener('click', () => {
	currentState.fontSize = currentState.fontSize + 4;
	fontSizeDisplay.textContent = currentState.fontSize;
	wsClient.sendUpdate(currentState);
});
