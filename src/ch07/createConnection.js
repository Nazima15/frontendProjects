export function createConnection(roomId) {
    return {
        connect() {
            console.log(`${roomId}방에 접속했습니다`);
        },
        disconnect() {
            console.log(`${roomId}방에서 나갔습니다`);
        }
    };
}
