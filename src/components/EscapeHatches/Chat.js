export const createConnection = () => {
    // A real implementation would actually connect to the server
    return {
        connect() {
            console.log("✅ Connecting...");
        },
        disconnect() {
            console.log("❌ Disconnecting...");
        }
    }
}