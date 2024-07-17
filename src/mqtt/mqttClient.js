const mqtt = require("mqtt");

const { MQTT_BROKER_URL } = require("../config/config");

const client = mqtt.connect(MQTT_BROKER_URL);

client.on("connect", () => {
    console.log("connected to MQTT broker");
});

client.on("disconnect", () => {
    console.log("disconnected from the MQTT broker");
})

client.on("error", (err) => {
    console.log("MQTT connection error",err);
})

module.exports = client;