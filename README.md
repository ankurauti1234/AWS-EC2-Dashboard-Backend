# Node.js IoT Data Server

This Node.js server is designed to send sample data to MongoDB. It will later be modified to receive data from IoT devices through MQTT and then send it to MongoDB.

## Usage

1. Start the server on ec2:
   ```
   pm2 start index.js
   ```

2. The server will start sending sample data to MongoDB at regular intervals.

## Configuration

1. Edit the `index.js` file to modify the data generation logic or interval for sending data.

2. Modify the server to receive data from IoT devices through MQTT.

## Dependencies

- MongoDB: Make sure you have MongoDB installed and running.

- MQTT Broker: Set up an MQTT broker to receive data from IoT devices.

- `@faker-js/faker`: Used for generating sample data.

## GitHub Actions

This project includes a GitHub Actions workflow for continuous integration. The workflow is defined in `.github/workflows/node.js.yml`. It automates the process of testing the code whenever there is a push to the `main` branch
