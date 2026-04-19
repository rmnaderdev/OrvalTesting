import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useGetWeatherForecast } from './api/weather-forecast/weather-forecast'


function App() {
  const [count, setCount] = useState(0);

  const { data: weatherForecast, isLoading, isError, refetch } = useGetWeatherForecast();

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <div>
        <h1>Weather Forecast</h1>
        <button onClick={() => refetch()}>Refresh</button>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error getting weather forecast</p>}
        {weatherForecast && (
          <ul>
            {weatherForecast.data.map((forecast) => (
              <li key={forecast.date}>
                {forecast.date}: {forecast.temperatureC}°C - {forecast.summary}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
