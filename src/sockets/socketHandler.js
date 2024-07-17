const mqttController = require("../controllers/mqttController");

module.exports = (io) => {
    io.on("connection", (socket) => {
        console.log("new client connected");

        socket.on("iot/control", async (data) => {
            try {
                console.log(data);
                await mqttController.publishData(data);
                socket.emit("data_sent/status", { status: "success" });
            } catch (error) {
                socket.emit('data_sent/status', { status: "error", message: error.message });
            }
        });

        socket.on("unit/restart", async (data) => {
            try {
                console.log(data);
                await mqttController.publishData(data);
                socket.emit("data_sent/status", { status: "success" });
            } catch (error) {
                socket.emit("data_sent/status", { status: "error", message: error.message });
            }
        });

        socket.on("disconnect", () => {
            console.log("client disconnected");
        })
    })
}