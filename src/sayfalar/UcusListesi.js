// src/components/UcusListesi.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUcusList, clearUcusList } from '../aksiyonlar/ucusAksiyon';

class UcusListesi extends Component {
  componentDidMount() {
    this.props.fetchUcusList();
  }

  componentWillUnmount() {
    this.props.clearUcusList();
  }

  render() {
    const { ucusListesi, loading, error } = this.props;

    if (loading) {
      return <p>Yükleniyor...</p>;
    }

    if (error) {
      return <p>Hata: {error}</p>;
    }

    return (
      <ul>
        {ucusListesi.map((ucus, index) => (
          <li key={index}>
            {ucus.flightName} - {ucus.scheduleTime}
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  ucusListesi: state.ucusListReducer.ucusListesi,
  loading: state.ucusListReducer.loading,
  error: state.ucusListReducer.error,
});

const mapDispatchToProps = {
  fetchUcusList,
  clearUcusList,
};

export default connect(mapStateToProps, mapDispatchToProps)(UcusListesi);
