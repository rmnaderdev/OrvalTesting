import { useGetWeatherForecast } from './api/weather-forecast/weather-forecast'
import { WeatherCard } from './components/weather/WeatherCard'


function App() {
  const { data: weatherForecast, isLoading, isError, refetch } = useGetWeatherForecast();

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100 sm:px-6">
      <WeatherCard
        isError={isError}
        isLoading={isLoading}
        forecasts={weatherForecast?.data}
        onRefresh={() => refetch()}
      />
    </main>
  )
}

export default App
