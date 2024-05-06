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
      HHID: "83ecc6a7-bb6b-462f-85e8-9bb5abbdf43e",
      Success: faker.datatype.boolean(),
    },
    Power: {
      Tv: faker.datatype.boolean(),
      Main: faker.datatype.boolean(),
      Smps: faker.datatype.boolean(),
    },
    Location: {
      Cell_Info: {
        lat: faker.location.latitude(),
        lon: faker.location.longitude(),
      },
      Installing: faker.datatype.boolean(),
    },
    Network_Latch: {
      Ip_up: faker.datatype.boolean(),
      Sim: faker.number.int({ min: 1, max: 2 }),
    },
  };
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

// Call the function to start sending data
sendDataToMongoEvery3Hours();
