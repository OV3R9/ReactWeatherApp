import React, { useState } from 'react';
import Heading from './Heading/Heading.jsx';
import LoadingScreen from './LoadingScreen/LoadingScreen.jsx';
import NowStatus from './NowStatus/NowStatus.jsx';
import ForecastSoon from './ForecastSoon/ForecastSoon.jsx';
import AdvancedStats from './AdvancedStats/AdvancedStats.jsx';
import ForecastToday from './ForecastToday/ForecastToday.jsx';

function App() {
  const [cityQuery, setCityQuery] = useState('');
  const [tempNow, setTempNow] = useState('-');
  const [cityName, setCityName] = useState('-');
  const [weather, setWeather] = useState('-');
  const [co, setCo] = useState('0');
  const [no2, setNo2] = useState('0');
  const [o3, setO3] = useState('0');
  const [pm25, setPm25] = useState('0');
  const [pressure, setPressure] = useState('-');
  const [humidity, setHumidity] = useState('-');
  const [windSpeed, setWindSpeed] = useState('-');
  const [visibility, setVisibility] = useState('-');
  const [forecastData, setForecastData] = useState({});
  const [forecastToday, setForecastToday] = useState([]);
  const [loading, setLoading] = useState(false);

  const key = '810a91170100550fe815b25c4d1a55d7';

  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  let year = date.getFullYear();
  let today = `${day}.${month}.${year}`;

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const getNextDays = () => {
    let result = [];
    for (let i = 0; i < 5; i++) {
      let nextDate = new Date();
      nextDate.setDate(date.getDate() + i);
      let dayOfWeek = daysOfWeek[nextDate.getDay()];
      let dayOfMonth = nextDate.getDate();
      result.push(`${dayOfWeek} ${dayOfMonth}`);
    }
    return result;
  };

  const TrueDaysOfWeek = getNextDays();

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      setCityQuery(event.target.value);
      searchData(event.target.value);
      event.target.value = '';
    }
  };

  async function searchData(city) {
    setLoading(true);
    try {
      const nowForecastUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
      const nowForecastResponse = await fetch(nowForecastUrl);
      const nowForecastData = await nowForecastResponse.json();
      console.log(nowForecastData);
  
      const airPollutionUrl = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${nowForecastData.coord.lat}&lon=${nowForecastData.coord.lon}&appid=${key}`;
      const airPollutionResponse = await fetch(airPollutionUrl);
      const airPollutionData = await airPollutionResponse.json();
      console.log(airPollutionData);
  
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${nowForecastData.coord.lat}&lon=${nowForecastData.coord.lon}&appid=${key}&units=metric`;
      const forecastResponse = await fetch(forecastUrl);
      const forecastData = await forecastResponse.json();
      console.log(forecastData);
  
      setTempNow(nowForecastData.main.temp.toFixed(1) + '°C');
      setCityName(`${nowForecastData.sys.country}, ${nowForecastData.name}`);
      setWeather(nowForecastData.weather[0].main);
  
      setCo(airPollutionData.list[0].components.co);
      setNo2(airPollutionData.list[0].components.no2);
      setO3(airPollutionData.list[0].components.o3);
      setPm25(airPollutionData.list[0].components.pm2_5);
  
      setPressure(nowForecastData.main.pressure);
      setHumidity(nowForecastData.main.humidity);
      setWindSpeed(nowForecastData.wind.speed.toFixed());
      setVisibility((nowForecastData.visibility / 1000).toFixed());
  
      setForecastData({
        firstDayTemp: forecastData.list[0].main.temp.toFixed(1),
        secondDayTemp: forecastData.list[8].main.temp.toFixed(1),
        thirdDayTemp: forecastData.list[16].main.temp.toFixed(1),
        fourthDayTemp: forecastData.list[24].main.temp.toFixed(1),
        fifthDayTemp: forecastData.list[32].main.temp.toFixed(1),
        firstDayIcon: forecastData.list[0].weather[0].icon,
        secondDayIcon: forecastData.list[8].weather[0].icon,
        thirdDayIcon: forecastData.list[16].weather[0].icon,
        fourthDayIcon: forecastData.list[24].weather[0].icon,
        fifthDayIcon: forecastData.list[32].weather[0].icon,
      });
  
      const todayForecast = forecastData.list.slice(0, 8).map((entry) => ({
        hour: new Date(entry.dt_txt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        temp: entry.main.temp.toFixed(1),
        icon: entry.weather[0].icon
      }));
      setForecastToday(todayForecast);
    } catch (error) {
      console.error('Error fetching weather data: ', error);
    } finally {
      setLoading(false);
    }
  }
  

  return (
    <>
      {loading && <LoadingScreen />}
      <Heading />
      <div className="searchBarContainer">
        <input
          type="text"
          className="searchBar"
          placeholder="City name"
          onKeyPress={handleSearch}
        />
      </div>
      <main>
        <NowStatus
          tempNow={tempNow}
          todayDate={today}
          cityName={cityName}
          weather={weather}
        />
        <ForecastSoon
  firstDay={TrueDaysOfWeek[0]}
  firstDayTemp={forecastData.firstDayTemp}
  firstDayIcon={forecastData.firstDayIcon}
  secondDay={TrueDaysOfWeek[1]}
  secondDayTemp={forecastData.secondDayTemp}
  secondDayIcon={forecastData.secondDayIcon}
  thirdDay={TrueDaysOfWeek[2]}
  thirdDayTemp={forecastData.thirdDayTemp}
  thirdDayIcon={forecastData.thirdDayIcon}
  fourthDay={TrueDaysOfWeek[3]}
  fourthDayTemp={forecastData.fourthDayTemp}
  fourthDayIcon={forecastData.fourthDayIcon}
  fifthDay={TrueDaysOfWeek[4]}
  fifthDayTemp={forecastData.fifthDayTemp}
  fifthDayIcon={forecastData.fifthDayIcon}
/>
        <AdvancedStats
          co={co}
          no2={no2}
          o3={o3}
          pm25={pm25}
          pressure={pressure}
          humidity={humidity}
          windSpeed={windSpeed}
          visibility={visibility}
        />
        <ForecastToday forecasts={forecastToday} />
      </main>
    </>
  );
}

export default App;