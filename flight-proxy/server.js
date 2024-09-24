// server.js
const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const port = 3001;

// Tüm isteklere CORS izni ver
app.use(cors());

// Uçuş verilerini API'den çek ve yanıtla
app.get('/api/flights', async (req, res) => {
  const { scheduleDate = '2024-11-11', flightDirection = 'A' } = req.query; // İstemciden tarih ve yön bilgilerini al

  try {
    const response = await axios.get('https://api.schiphol.nl/public-flights/flights', {
      params: {
        scheduleDate,
        flightDirection,
        includedelays: false,
        page: 1,
        sort: '+scheduleTime',
        fromDateTime: `${scheduleDate}T00:00:00`,
        toDateTime: `${scheduleDate}T23:59:59`,
        searchDateTimeField: 'scheduleDateTime',
        isOperationalFlight: true,
      },
      headers: {
        'ResourceVersion': 'v4',
        'app_id': 'ab4e13c2',
        'app_key': '98295aa5489938ad56f4da9ce9fe8b31',
      }
    });

    // Gelen yanıtı kontrol et
    console.log('Gelen Yanıt:', response.data);

    if (response.data.flights && response.data.flights.length > 0) {
      res.json(response.data);
    } else {
      res.status(404).send('Uçuş bulunamadı');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
