// src/components/FilterForm.js
import React, { useState } from 'react';

const FilterForm = ({ onFilter }) => {
  const [scheduleDate, setScheduleDate] = useState('');
  const [flightDirection, setFlightDirection] = useState('A'); // Varsayılan değer 'A' (varış)

  const handleSubmit = (event) => {
    event.preventDefault();
    // Kullanıcıdan alınan tarih ve yön bilgilerini filtreleme fonksiyonuna gönder
    onFilter({ scheduleDate, flightDirection });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Planlanan Tarih:
          <input
            type="date"
            value={scheduleDate}
            onChange={(e) => setScheduleDate(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Uçuş Yönü:
          <select
            value={flightDirection}
            onChange={(e) => setFlightDirection(e.target.value)}
          >
            <option value="A">Varış</option>
            <option value="D">Kalkış</option>
          </select>
        </label>
      </div>
      <button type="submit">Filtrele</button>
    </form>
  );
};

export default FilterForm;
