class WebSocketClient {
	constructor() {
		this.connect();
		this.listeners = new Set();
	}

	connect() {
		this.ws = new WebSocket('ws://localhost:3031');

		this.ws.onmessage = (event) => {
			const data = JSON.parse(event.data);
			this.notifyListeners(data);
		};

		this.ws.onclose = () => {
			setTimeout(() => this.connect(), 1000);
		};
	}

	addListener(callback) {
		this.listeners.add(callback);
	}

	removeListener(callback) {
		this.listeners.delete(callback);
	}

	notifyListeners(data) {
		this.listeners.forEach(callback => callback(data));
	}

	sendUpdate(data) {
		if (this.ws.readyState === WebSocket.OPEN) {
			this.ws.send(JSON.stringify(data));
		}
	}
}

// Create a single instance to be shared
export const wsClient = new WebSocketClient();
