export const createConnection = (serverUrl, roomID) => {
    // A real implementation would actually connect to the server
    let connectedCallback;
    let timeout;

    return {
        connect() {
            timeout = setTimeout(() => {
                if (connectedCallback) {
                    connectedCallback();
                }
            }, 1000); // Simulate a connection delay
            console.log(`✅ Connecting to '${roomID}' room at ${serverUrl}...`);
        },
        on(event, callback) {
            if (connectedCallback) {
                throw Error("Cannot add the handler twice.");
            }
            if (event !== "connected") {
                throw Error('Only "connected" event is supported.');
            }
            connectedCallback = callback;
        },
        disconnect() {
            clearTimeout(timeout);
        }
    }
}