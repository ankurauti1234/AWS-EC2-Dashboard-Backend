const mongoose = require("mongoose");

const devSchema = new mongoose.Schema({
  Watermark_id: {
    reporting_time: { type: Number, required: true },
    id: { type: Number, required: true },
    confidence: { type: Number, required: true, default: 0, min: 0, max: 100 },
  },

  Meter_Installation: {
    HHID: { type: String, required: true },
    Success: { type: Boolean, required: true, default: false },
  },

  Power: {
    Tv: { type: Boolean, required: true, default: true },
    Main: { type: Boolean, required: true, default: true },
    Smps: { type: Boolean, required: true, default: true },
  },

  Location: {
    Cell_Info: {
      lat: { type: Number, required: true },
      lon: { type: Number, required: true },
    },
    Installing: { type: Boolean, required: true, default: true },
  },

  Network_Latch: {
    Ip_up: { type: Boolean, required: true },
    Sim: { type: Number, required: true }, // 1 for sim1 2 for sim2
  },

  METER_OTA: {
    previous: { type: String, required: true },
    update: { type: String, required: true },
    success: { type: Boolean, required: true },
  },
});

const deviceSchema = mongoose.model("device", devSchema, "iot_device_info");

module.exports = deviceSchema;
