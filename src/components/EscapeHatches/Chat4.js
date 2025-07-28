export const createConnection = ({ serverUrl, roomID }) => {
    // A real implementation would actually connect to the server
    return {
        connect() {
            console.log('✅ Connecting to "' + roomID + '" room at ' + serverUrl + '...');
        },
        disconnect() {
            console.log('❌ Disconnected from "' + roomID + '" room at ' + serverUrl);
        }
    }
}