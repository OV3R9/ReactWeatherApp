import React from 'react';
import styles from './ForecastToday.module.css';

function ForecastToday({ forecasts }) {
  return (
    <div className={styles.forecastToday}>
      <h1 className={styles.info}>Forecast for soon (3h timestamps)</h1>
      {forecasts.map((forecast, index) => (
        <div key={index} className={styles.today}>
          <img
            src={`http://openweathermap.org/img/wn/${forecast.icon}.png`}
            alt="weather icon"
            className={styles.icon}
          />
          <div className={styles.hour}>{forecast.hour}</div>
          <div className={styles.temp}>{forecast.temp}°C</div>
        </div>
      ))}
    </div>
  );
}

export default ForecastToday;