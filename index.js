const mongoConnect = require("./db");
const deviceSchema = require("./model/deviceModel");
const deviceAlertsSchema = require("./model/deviceAlertsModel");
const { faker } = require("@faker-js/faker");

mongoConnect();

function generateRandomData() {
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
        lat: 18.4861,
        lon: -69.9312,
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

async function saveDataToMongo(inputJSON) {
  try {
    const result = await deviceSchema.insertMany(inputJSON);
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

function sendDataToMongoEvery3Hours() {
  setInterval(() => {
    const dummyData = generateRandomData();
    saveDataToMongo([dummyData])
      .then((result) => {
        console.log(result.message);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, 5000); // 3 hours in milliseconds
}

// Call the function to start sending data
sendDataToMongoEvery3Hours();
