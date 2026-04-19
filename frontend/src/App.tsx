import './App.css'
import { useGetWeatherForecast } from './api/weather-forecast/weather-forecast'


function App() {
  const { data: weatherForecast, isLoading, isError, refetch } = useGetWeatherForecast();

  return (
    <>
      <section className="weather-card" aria-labelledby="weather-heading">
        <div className="weather-head">
          <div>
            <h2 id="weather-heading">Weather Forecast</h2>
            <p className="weather-subtitle">Live conditions from your API</p>
          </div>
          <button className="weather-refresh" onClick={() => refetch()}>
            Refresh
          </button>
        </div>

        {isLoading && <p className="weather-status">Loading forecast...</p>}
        {isError && (
          <p className="weather-status weather-status-error">
            Could not load weather forecast.
          </p>
        )}
        {weatherForecast && (
          <ul className="weather-list">
            {weatherForecast.data.map((forecast) => (
              <li className="weather-item" key={forecast.date}>
                <span className="weather-date">{forecast.date}</span>
                <span className="weather-temp">{forecast.temperatureC}°C</span>
                <span className="weather-summary">{forecast.summary}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  )
}

export default App
