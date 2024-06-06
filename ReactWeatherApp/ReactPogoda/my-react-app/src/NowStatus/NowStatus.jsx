import React from "react";

import styles from "./NowStatus.module.css";

function NowStatus({ tempNow, todayDate, cityName, weather }) {
  return (
    <>
      <div className={styles.today}>
        <h1 className={styles.nowHeader}>Now</h1>
        <div className={styles.todayStatsContainer}>
          <p className={styles.tempToday}>{tempNow}</p>
          <p className={styles.weatherLike}>{weather}</p>
          <div className={styles.weatherStatusNow}></div>
        </div>
        <div className={styles.datePlaceContainer}>
          <p className={styles.todayDate}>
            <i className="bx bx-calendar-alt"></i> {todayDate}
          </p>
          <p className={styles.cityName}>
            <i className="bx bx-current-location"></i> {cityName}
          </p>
        </div>
      </div>
    </>
  );
}

export default NowStatus;
