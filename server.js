const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/sensor_data', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

// Define routes
// Example route for receiving sensor data
app.post('/api/sensor-data', async (req, res) => {
  try {
    // Handle sensor data received from the device
    console.log('Received sensor data:', req.body);

    // Save sensor data to MongoDB
    // Example: Create a new sensorData document in MongoDB
    // Replace this with your actual schema and logic
    const SensorData = mongoose.model('SensorData', {
      value: Number,
      timestamp: { type: Date, default: Date.now }
    });

    const newData = new SensorData({
      value: req.body.value
    });
    await newData.save();

    res.status(201).json({ message: 'Sensor data received and stored successfully' });
  } catch (err) {
    console.error('Error handling sensor data:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
