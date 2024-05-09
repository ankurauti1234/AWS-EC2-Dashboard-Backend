const mongoConnect = require("./db");
const deviceSchema = require("./model/deviceModel");
const deviceAlertsSchema = require("./model/deviceAlertsModel");
const { faker } = require("@faker-js/faker");

mongoConnect();

const dominicanRepublicLocations = [
  { lat: 18.4861, lon: -69.9312 }, // Santo Domingo
  { lat: 19.7808, lon: -70.6871 }, // Santiago
  { lat: 18.4274, lon: -68.9728 }, // Punta Cana
  { lat: 19.0502, lon: -70.1496 }, // Puerto Plata
  { lat: 18.809, lon: -69.811 }, // La Romana
  { lat: 18.7357, lon: -70.1627 }, // San Pedro de Macorís
  { lat: 19.5513, lon: -71.0758 }, // Mao
  { lat: 19.217, lon: -69.336 }, // Nagua
  { lat: 19.6122, lon: -71.2186 }, // Monte Cristi
  { lat: 18.5885, lon: -68.4053 }, // Higüey
];

function generateRandomData() {
  const randomDominicanRepublicLocation =
    dominicanRepublicLocations[
      Math.floor(Math.random() * dominicanRepublicLocations.length)
    ];

  return {
    Watermark_id: {
      reporting_time: Date.now(),
      id: 69,
      confidence: faker.number.int({ min: 0, max: 100 }),
    },
    Meter_Installation: {
      HHID: "APM32",
      Success: faker.datatype.boolean(),
    },
    Power: {
      Tv: faker.datatype.boolean(),
      Main: faker.datatype.boolean(),
      Smps: faker.datatype.boolean(),
    },
    Location: {
      Cell_Info: {
        lat: randomDominicanRepublicLocation.lat,
        lon: randomDominicanRepublicLocation.lon,
      },
      Installing: faker.datatype.boolean(),
    },
    Network_Latch: {
      Ip_up: faker.datatype.boolean(),
      Sim: faker.number.int({ min: 1, max: 2 }),
    },
    METER_OTA: {
      previous: faker.system.semver(),
      update: faker.system.semver(),
      success: faker.datatype.boolean(),
    },
  };
}

function generateRandomAlertData() {
  const eventType = faker.number.int({ min: 1, max: 5 }); // Generate a random event type

  switch (eventType) {
    case 1: // TAMPER_ALARM
      return {
        ID: faker.number.int(),
        TS: Date.now(),
        Type: 1,
        Details: {
          Meter_tamper: faker.datatype.boolean(),
          Tv_plug_tamper: faker.datatype.boolean(),
          Tamper_ts: Date.now(),
        },
      };

    case 2: // SOS_ALARM
      return {
        ID: faker.number.int(),
        TS: Date.now(),
        Type: 2,
        Details: { sos: true },
      };

    case 3: // BATTERY_ALARM
      return {
        ID: faker.number.int(),
        TS: Date.now(),
        Type: 3,
        Details: {
          main_bat_fail: faker.datatype.boolean(),
          rtc_fail: faker.datatype.boolean(),
          rtc_bat_low: faker.datatype.boolean(),
        },
      };

    case 4: // SIM_ALERT
      return {
        ID: faker.number.int(),
        TS: Date.now(),
        Type: 4,
        Details: {
          sim1_absent: faker.datatype.boolean(),
          sim1_changed: faker.datatype.boolean(),
          sim2_absent: faker.datatype.boolean(),
          sim2_changed: faker.datatype.boolean(),
        },
      };

    case 5: // SYSTEM_ALARM
      return {
        ID: faker.number.int(),
        TS: Date.now(),
        Type: 5,
        Details: {
          name: "System Error",
          error_code: faker.number.int({ min: 400, max: 599 }),
          message: faker.lorem.words(),
        },
      };

    default:
      return null;
  }
}

async function saveDataToMongo(inputJSON, schema) {
  try {
    const result = await schema.insertMany(inputJSON);
    if (result.length > 0) {
      return {
        statusCode: 200,
        message: "Document inserted successfully",
      };
    } else {
      throw new Error("Document not inserted");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

function sendDataToMongoEvery5sec() {
  setInterval(() => {
    const dummyData = generateRandomData();
    saveDataToMongo([dummyData], deviceSchema)
      .then((result) => {
        console.log(result.message);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, 5000); // 5 seconds in milliseconds
}

function sendDataToMongoEvery5min() {
  setInterval(() => {
    const dummyData = generateRandomAlertData();
    saveDataToMongo([dummyData], deviceAlertsSchema)
      .then((result) => {
        console.log(result.message, "alert");
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, 60000); // 5 minute in milliseconds
}

// Call the functions to start sending data
sendDataToMongoEvery5sec();
sendDataToMongoEvery5min();
