/* eslint-disable react/prop-types */

const WeatherWiev = ({ weather }) => {
  if (weather) {
    return (
      <div>
        <h3>Weather in {weather.name}</h3>
        <div>Temperature: {weather.main.temp} Celcius</div>
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='' />
        <div>Wind: {weather.wind.speed} m/s</div>
      </div>
    );
  }
};

export default WeatherWiev;
