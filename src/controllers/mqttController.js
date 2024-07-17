const mqttClient = require("../mqtt/mqttClient");

exports.publishData = async (data) => {
    return new Promise((resolve, reject) => {
        const { topic, payload } = data;
        console.log(topic, payload);

        mqttClient.publish("test", "test");
        mqttClient.publish(topic, JSON.stringify(payload), (err) => {
            if (err) {
                console.log(err);
                return reject(err);
            }
            resolve();
        })
    })
};