FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the Vite app
RUN npm run build

# Expose both ports (preview and websocket)
EXPOSE 3030
EXPOSE 3031

# Start both servers using a shell script
COPY start.sh /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"]
