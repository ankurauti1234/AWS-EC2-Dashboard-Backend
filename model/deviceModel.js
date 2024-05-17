const mongoose = require("mongoose");

const devSchema = new mongoose.Schema({
  device: { type: Number, required: true },

  Location: {
    ID: { type: Number, required: true },
    TS: { type: Number, required: true },
    Type: { type: Number, required: true },
    Cell_Info: {
      lat: { type: Number, required: true },
      lon: { type: Number, required: true },
    },
    Installing: { type: Boolean, required: true, default: true },
  },

  GUEST_REGISTRATION: {
    ID: { type: Number, required: true },
    TS: { type: Number, required: true },
    Type: { type: Number, required: true },
    guest_id: { type: Number, required: true },
    registering: { type: Boolean, required: true },
    guest_age: { type: Number, required: true },
    guest_male: { type: Boolean, required: true },
  },

  MEMBER_GUEST_DECLARATION: {
    ID: { type: Number, required: true },
    TS: { type: Number, required: true },
    Type: { type: Number, required: true },
    member_keys: [{ type: Boolean, required: true }],
    guests: [{ type: Boolean, required: true }],
    confidence: { type: Number, required: true },
  },

  Fingerprint_id: {
    ID: { type: Number, required: true },
    TS: { type: Number, required: true },
    Type: { type: Number, required: true },
    reporting_time: { type: Number, required: true },
    id: { type: Number, required: true },
    confidence: { type: Number, required: true },
  },

  FINGERPRINT_TS: {
    ID: { type: Number, required: true },
    TS: { type: Number, required: true },
    Type: { type: Number, required: true },
    reporting_time: { type: Number, required: true },
    embedded_time: { type: Number, required: true },
    confidence: { type: Number, required: true },
    offset: { type: Number, required: true },
  },

  CONFIGURATION: {
    ID: { type: Number, required: true },
    TS: { type: Number, required: true },
    Type: { type: Number, required: true },
    differential_mode: { type: Boolean, required: true },
    member_keys: [{ type: Boolean, required: true }],
    guest_cancellation_time: { type: Number, required: true },
    software_version: { type: String, required: true },
    power_pcb_firmware_version: { type: String, required: true },
    remote_firmware_version: { type: String, required: true },
    audio_configuration: [{ type: Boolean, required: true }],
    audience_day_start_time: { type: Number, required: true },
    no_of_sessions: { type: Number, required: true },
  },

  Meter_Installation: {
    ID: { type: Number, required: true },
    TS: { type: Number, required: true },
    Type: { type: Number, required: true },
    HHID: { type: String, required: true },
    Success: { type: Boolean, required: true },
  },

  VOLTAGE_STATS: {
    ID: { type: Number, required: true },
    TS: { type: Number, required: true },
    Type: { type: Number, required: true },
    high_rail_voltage: { type: Number, required: true },
    mid_rail_voltage: { type: Number, required: true },
    gsm_rail_voltage: { type: Number, required: true },
    rtc_battery_voltage: { type: Number, required: true },
    li_ion_battery_voltage: { type: Number, required: true },
    remote_battery_voltage: { type: Number, required: true },
  },

  TEMPERATURE_STATS: {
    ID: { type: Number, required: true },
    TS: { type: Number, required: true },
    Type: { type: Number, required: true },
    battery_temp: { type: Number, required: true },
    arm_core_temp: { type: Number, required: true },
    power_pcb_temp: { type: Number, required: true },
    rtc_temp: { type: Number, required: true },
  },

  NTP_SYNC: {
    ID: { type: Number, required: true },
    TS: { type: Number, required: true },
    Type: { type: Number, required: true },
    server: { type: String, required: true },
    system_time: { type: Number, required: true },
    success: { type: Boolean, required: true },
    error_code: { type: Number, required: true },
    drift: { type: Number, required: true },
    jumped: { type: Boolean, required: true },
  },

  AUDIENCE_SESSION_CLOSE: {
    ID: { type: Number, required: true },
    TS: { type: Number, required: true },
    Type: { type: Number, required: true },
    stop_time: { type: Number, required: true },
    viewing_member_keys: [{ type: Boolean, required: true }],
    viewing_guests: [{ type: Boolean, required: true }],
    tv_on: { type: Boolean, required: true },
    last_watermark_id: { type: Number, required: true },
    tv_event_ts: { type: Number, required: true },
    last_watermark_id_ts: { type: Number, required: true },
    marked: { type: Number, required: true },
  },

  Network_Latch: {
    ID: { type: Number, required: true },
    TS: { type: Number, required: true },
    Type: { type: Number, required: true },
    Ip_up: { type: Boolean, required: true },
    Sim: { type: Number, required: true }, // 1 for sim1 2 for sim2
  },

  REMOTE_PAIRING: {
    ID: { type: Number, required: true },
    TS: { type: Number, required: true },
    Type: { type: Number, required: true },
    remote_id: { type: Number, required: true },
    success: { type: Boolean, required: true },
  },

  REMOTE_ACTIVITY: {
    ID: { type: Number, required: true },
    TS: { type: Number, required: true },
    Type: { type: Number, required: true },
    lock: { type: Boolean, required: true },
    orr: { type: Boolean, required: true },
    absent_key_press: { type: Boolean, required: true },
    drop: { type: Boolean, required: true },
  },

  SYSTEM_INFO: {
    ID: { type: Number, required: true },
    TS: { type: Number, required: true },
    Type: { type: Number, required: true },
    rpi_serial: { type: String, required: true },
    pcb_serial: { type: String, required: true },
    imei: { type: String, required: true },
    imsi_1: { type: String, required: true },
    imsi_2: { type: String, required: true },
    eeprom: { type: Number, required: true },
    wifi_serial: { type: String, required: true },
    mac_serial: { type: String, required: true },
    remote_serial: { type: Number, required: true },
  },

  CONFIG_UPDATE: {
    ID: { type: Number, required: true },
    TS: { type: Number, required: true },
    Type: { type: Number, required: true },
    key: { type: String, required: true },
    value: { type: String, required: true },
    old_value: { type: String, required: true },
  },

  ALIVE: {
    ID: { type: Number, required: true },
    TS: { type: Number, required: true },
    Type: { type: Number, required: true },
    state: { type: Boolean, required: true },
  },

  METER_OTA: {
    ID: { type: Number, required: true },
    TS: { type: Number, required: true },
    Type: { type: Number, required: true },
    previous: { type: String, required: true },
    update: { type: String, required: true },
    success: { type: Boolean, required: true },
  },

  Power: {
    Tv: { type: Boolean, required: true },
    Main: { type: Boolean, required: true },
    Smps: { type: Boolean, required: true },
  },

  BATTERY_VOLTAGE: {
    ID: { type: Number, required: true },
    TS: { type: Number, required: true },
    Type: { type: Number, required: true },
    Rtc: { type: Number, required: true },
    Meter: { type: Number, required: true },
  },

  BOOT: {
    ID: { type: Number, required: true },
    TS: { type: Number, required: true },
    Type: { type: Number, required: true },
    boot_ts: { type: Number },
    install: { type: Number},
    last_boot: { type: Number },
    relay_status: [{ type: Boolean }],
  },

  BOOT_V2: {
    ID: { type: Number, required: true },
    TS: { type: Number, required: true },
    Type: { type: Number, required: true },
    boot_ts: { type: Number},
    install: { type: Number },
    last_boot: { type: Number },
    relay_status: [{ type: Boolean }],
  },

  STB_DERIVED_TV_STATUS: {
    ID: { type: Number },
    TS: { type: Number},
    Type: { type: Number},
    derived: { type: Boolean, },
  },

  AUDIO_SOURCE: {
    ID: { type: Number, required: true },
    TS: { type: Number, required: true },
    Type: { type: Number, required: true },
    source: { type: String },
  },
});

const Device = mongoose.model("deviceInfo", devSchema, "iot_device_info");

module.exports = Device;
