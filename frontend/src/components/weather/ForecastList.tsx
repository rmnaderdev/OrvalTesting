import type { WeatherForecast } from '../../api/backendV1.schemas';

type ForecastListProps = {
  forecasts: WeatherForecast[];
};

export function ForecastList({ forecasts }: ForecastListProps) {
  return (
    <ul className="m-0 grid list-none gap-2 p-0">
      {forecasts.map((forecast, index) => (
        <li
          className="grid grid-cols-1 gap-1 rounded-xl border border-indigo-300/25 bg-slate-900/80 px-3 py-2.5 text-left sm:grid-cols-[1.5fr_auto_1fr] sm:items-center sm:gap-3"
          key={`${forecast.date ?? 'forecast'}-${index}`}
        >
          <span className="text-slate-200">{forecast.date ?? 'Unknown date'}</span>
          <span className="font-bold tracking-wide text-amber-300">
            {forecast.temperatureC ?? '-'} C
          </span>
          <span className="text-slate-400 sm:justify-self-end">{forecast.summary ?? 'No summary'}</span>
        </li>
      ))}
    </ul>
  );
}
