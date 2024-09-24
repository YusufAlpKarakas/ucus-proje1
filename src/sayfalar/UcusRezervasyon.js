// src/components/UcusRezervasyon.js
import React, { Component } from 'react';

export default class UcusRezervasyon extends Component {
  state = {
    reservationDate: '',
    error: '',
  };

  handleDateChange = (event) => {
    this.setState({ reservationDate: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { reservationDate } = this.state;

    const today = new Date();
    const selectedDate = new Date(reservationDate);

    // Seçilen tarihin geçerli olup olmadığını kontrol et
    if (selectedDate < today) {
      this.setState({ error: 'Seçilen tarih geçmiş olamaz!' });
      return;
    }

    // Tarih geçerli ise, burada rezervasyon işlemini yapabilirsiniz
    console.log('Rezervasyon Tarihi:', reservationDate);
    this.setState({ error: '' }); // Hata mesajını temizle
    // Rezervasyon işlemi kodları buraya eklenebilir
  };

  render() {
    const { reservationDate, error } = this.state;

    return (
      <div>
        <h1>Uçuş Rezervasyon</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Gidiş Tarihi:
              <input
                type="date"
                value={reservationDate}
                onChange={this.handleDateChange}
                required
              />
            </label>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit">Rezervasyon Yap</button>
        </form>
      </div>
    );
  }
}
