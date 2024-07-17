const http = require("http");
const socketIo = require("socket.io");
const app = require("./app");
const { PORT } = require("./config/config");

const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin:"*"
    }
});

require("./sockets/socketHandler")(io);
require("./mqtt/mqttClient");


server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})