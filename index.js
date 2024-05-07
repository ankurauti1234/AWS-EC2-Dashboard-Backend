function generateRandomData() {
  return {
    Watermark_id: {
      reporting_time: Date.now(),
      id: 69,
      confidence: faker.datatype.number({ min: 0, max: 100 }),
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
        lat: faker.datatype.number({ min: -90, max: 90 }),
        lon: faker.datatype.number({ min: -180, max: 180 }),
      },
      Installing: faker.datatype.boolean(),
    },
    Network_Latch: {
      Ip_up: faker.datatype.boolean(),
      Sim: faker.datatype.number({ min: 1, max: 2 }),
    },
    METER_OTA: {
      previous: null, // Will be updated every minute
      update: null, // Will be updated every minute
      success: null, // Will be updated every minute
    },
  };
}

function sendDataToMongoEvery5Seconds() {
  setInterval(() => {
    const dummyData = generateRandomData();
    saveDataToMongo([dummyData])
      .then((result) => {
        console.log(result.message);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, 5000); // 5 seconds in milliseconds
}

function updateMeterOTA() {
  setInterval(() => {
    const dummyData = {
      METER_OTA: {
        previous: faker.system.semver(),
        update: faker.system.semver(),
        success: faker.datatype.boolean(),
      },
    };
    saveDataToMongo([dummyData])
      .then((result) => {
        console.log(result.message);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, 60000); // 1 minute in milliseconds
}

// Call the functions to start sending data and updating METER_OTA
sendDataToMongoEvery5Seconds();
updateMeterOTA();
