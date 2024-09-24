// fetchAndSaveFlights.js
const axios = require('axios');
const fs = require('fs');
const cron = require('node-cron');

// Uçuş verilerini API'den çek ve JSON dosyasına kaydet
const fetchAndSaveFlights = async () => {
  try {
    const response = await axios.get('https://api.schiphol.nl/public-flights/flights', {
      params: {
        scheduleDate: '2024-11-11',
        scheduleTime: '12:00',
        flightName: 'KL1234',
        flightDirection: 'A',
        airline: 'KL',
        airlineCode: 'KL', // Burayı doğru bir değerle güncelleyin
        route: 'AMS',
        includedelays: false,
        page: 1,
        sort: '+scheduleTime',
        fromDateTime: '2024-11-11T00:00:00',
        toDateTime: '2024-11-11T23:59:59',
        searchDateTimeField: 'scheduleDateTime',
        fromScheduleDate: '2024-11-11',
        toScheduleDate: '2024-11-11',
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

    // JSON dosyasına yaz
    fs.writeFileSync('flights.json', JSON.stringify(response.data, null, 2), 'utf-8');
    console.log('Uçuş verileri başarıyla kaydedildi.');
    
    console.log('Request URL:', `https://api.schiphol.nl/public-flights/flights?scheduleDate=2024-11-11&scheduleTime=12:00&flightName=KL1234&flightDirection=A&airline=KL&airlineCode=KL&route=AMS&includedelays=false&page=1&sort=%2BscheduleTime&fromDateTime=2024-11-11T00:00:00&toDateTime=2024-11-11T23:59:59&searchDateTimeField=scheduleDateTime&fromScheduleDate=2024-11-11&toScheduleDate=2024-11-11&isOperationalFlight=true`);

  } catch (error) {
    console.error('Veri çekme hatası:', error.message);
  }
};

// Betiği belirli aralıklarla çalıştır (örneğin her gün saat 00:00'da)
cron.schedule('0 0 * * *', () => {
  console.log('Veriler güncelleniyor...');
  fetchAndSaveFlights();
});

// Başlangıçta verileri çek
fetchAndSaveFlights();
