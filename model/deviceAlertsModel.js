const mongoose = require("mongoose");

const devAlertSchema = new mongoose.Schema({
  Tamper_Alarm: {
    Meter_tamper: { type: Boolean },
    Tv_plug_tamper: { type: Boolean },
    Tamper_ts: { type: Number },
  },
  SOS_Alarm: {
    SOS: { type: Boolean },
  },
  Battery_Alarm: {
    Main_bat_fail: { type: Boolean },
    Rtc_fail: { type: Boolean },
    Rtc_bat_low: { type: Boolean },
  },
  Power_Alarm: {
    Power_supply_bad: { type: Boolean },
    Power_supply_fail: { type: Boolean },
  },

  Sim_Alert: {
    Sim1_Absent: { type: Boolean },
    Sim1_Changed: { type: Boolean },
    Sim2_Absent: { type: Boolean },
    Sim2_Changed: { type: Boolean },
  },
  System_Alarm: {
    Name: { type: String }, // name of alarm
    Details: { type: String }, // Must be valid JSON
  },
});

const deviceAlertsSchema = mongoose.model(
  "deviceAlerts",
  devAlertSchema,
  "iot_device_alert"
);

module.exports = deviceAlertsSchema;
