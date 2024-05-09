const mongoose = require("mongoose");

const devAlertSchema = new mongoose.Schema({
  ID: { type: Number, required: true }, // Event type
  Type: { type: Number, required: true }, // Event type
  TS: { type: Number, required: true }, // Timestamp of the alert
  Details: { type: mongoose.Schema.Types.Mixed }, // Details of the alert
});

const deviceAlertsSchema = mongoose.model(
  "deviceAlerts",
  devAlertSchema,
  "iot_device_alert"
);

module.exports = deviceAlertsSchema;
