import styles from "./AdvancedStats.module.css";

function AdvancedStats({
  co,
  no2,
  o3,
  pm25,
  pressure,
  humidity,
  windSpeed,
  visibility,
}) {
  return (
    <div className={styles.advStats}>
      <h1 className={styles.info}>Advanced Statistics</h1>
      <div className={styles.airQualityContainer}>
        <h1 className={styles.containerInfo}>Air Pollution (µg/m³)</h1>
        <div className={styles.pollution}>CO: {co}</div>
        <div className={styles.pollution}>NO2: {no2}</div>
        <div className={styles.pollution}>O3: {o3}</div>
        <div className={styles.pollution}>PM2_5: {pm25}</div>
        <div className={styles.aqi}>AQI: Good</div>
      </div>
      <div className={styles.advancedStatsContainer}>
        <h1 className={styles.containerInfo}>More Statistics</h1>
        <div className={styles.stat}>Pressure: {pressure}hPa</div>
        <div className={styles.stat}>Humidity: {humidity}%</div>
        <div className={styles.stat}>Wind Speed: {windSpeed}km/h</div>
        <div className={styles.stat}>Visibility: {visibility}km</div>
      </div>
    </div>
  );
}

export default AdvancedStats;
