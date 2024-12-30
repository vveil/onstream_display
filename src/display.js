import { wsClient } from './websocket.js';

// Create display UI
document.body.innerHTML = `
    <div id="displayText"></div>
`;

const displayText = document.getElementById('displayText');

// Update display from WebSocket data
wsClient.addListener((data) => {
	displayText.textContent = data.text;
	displayText.style.fontSize = `${data.fontSize}px`;
	displayText.style.color = data.color;
});
