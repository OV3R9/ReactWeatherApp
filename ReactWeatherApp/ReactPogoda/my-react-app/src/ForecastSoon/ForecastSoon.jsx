import styles from "./ForecastSoon.module.css";

function ForecastSoon({ firstDay, secondDay, thirdDay, fourthDay, fifthDay, firstDayTemp, secondDayTemp, thirdDayTemp, fourthDayTemp, fifthDayTemp, firstDayIcon, secondDayIcon, thirdDayIcon, fourthDayIcon, fifthDayIcon }) {
  return (
    <>
      <div className={styles.forecastSoon}>
        <h1 className={styles.forecastFive}>Forecast for next 5 days</h1>
        <div className={styles.flexContainer}>
          <div className={styles.dayContainer}>
            <div className={styles.day}>
              <div className={styles.infoForSoon}>
                <p className={styles.dateForSoon}>
                  <i className="bx bx-calendar-alt"></i>{" "}
                  <span className={styles.actualDate}>{firstDay}</span>
                </p>
                <p className={styles.tempForSoon}>{firstDayTemp}°C</p>
              </div>
              <div className={styles.icon} style={{ backgroundImage: `url(http://openweathermap.org/img/wn/${firstDayIcon}@2x.png)` }}></div>
            </div>
            <div className={styles.day}>
              <div className={styles.infoForSoon}>
                <p className={styles.dateForSoon}>
                  <i className="bx bx-calendar-alt"></i>{" "}
                  <span className={styles.actualDate}>{secondDay}</span>
                </p>
                <p className={styles.tempForSoon}>{secondDayTemp}°C</p>
              </div>
              <div className={styles.icon} style={{ backgroundImage: `url(http://openweathermap.org/img/wn/${secondDayIcon}@2x.png)` }}></div>
            </div>
            <div className={styles.day}>
              <div className={styles.infoForSoon}>
                <p className={styles.dateForSoon}>
                  <i className="bx bx-calendar-alt"></i>{" "}
                  <span className={styles.actualDate}>{thirdDay}</span>
                </p>
                <p className={styles.tempForSoon}>{thirdDayTemp}°C</p>
              </div>
              <div className={styles.icon} style={{ backgroundImage: `url(http://openweathermap.org/img/wn/${thirdDayIcon}@2x.png)` }}></div>
            </div>
            <div className={styles.day}>
              <div className={styles.infoForSoon}>
                <p className={styles.dateForSoon}>
                  <i className="bx bx-calendar-alt"></i>{" "}
                  <span className={styles.actualDate}>{fourthDay}</span>
                </p>
                <p className={styles.tempForSoon}>{fourthDayTemp}°C</p>
              </div>
              <div className={styles.icon} style={{ backgroundImage: `url(http://openweathermap.org/img/wn/${fourthDayIcon}@2x.png)` }}></div>
            </div>
            <div className={styles.day}>
              <div className={styles.infoForSoon}>
                <p className={styles.dateForSoon}>
                  <i className="bx bx-calendar-alt"></i>{" "}
                  <span className={styles.actualDate}>{fifthDay}</span>
                </p>
                <p className={styles.tempForSoon}>{fifthDayTemp}°C</p>
              </div>
              <div className={styles.icon} style={{ backgroundImage: `url(http://openweathermap.org/img/wn/${fifthDayIcon}@2x.png)` }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForecastSoon;