
const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});

// Example API call route
app.post('/getWeather', async (req, res) => {
    // Here you will fetch data from Weatherbit, Geonames, or Pixabay API
    // For now, let's just send back a dummy response
    res.json({ message: 'Weather data here' });
});

app.listen(8081, function () {
    console.log('Travel app listening on port 8081!');
});
