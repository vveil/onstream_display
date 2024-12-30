// server.js
import { WebSocketServer } from 'ws';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// Create WebSocket server
const wss = new WebSocketServer({ port: 3031 });

// Store current text state
let currentState = {
	text: '',
	fontSize: 32,
	color: '#ffffff'
};

// Handle WebSocket connections
wss.on('connection', (ws) => {
	// Send current state to new connections
	ws.send(JSON.stringify(currentState));

	ws.on('message', (message) => {
		// Update current state
		currentState = JSON.parse(message.toString());

		// Broadcast to all clients except sender
		wss.clients.forEach((client) => {
			if (client !== ws && client.readyState === WebSocket.OPEN) {
				client.send(JSON.stringify(currentState));
			}
		});
	});
});
