require("dotenv").config();

module.exports = {
    PORT: process.env.PORT,
    MQTT_BROKER_URL: process.env.MQTT_BROKER_URL
};