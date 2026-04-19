import type { WeatherForecast } from '../../api/backendV1.schemas';
import { ForecastList } from './ForecastList';
import { WeatherHeader } from './WeatherHeader';

type WeatherCardProps = {
  isError: boolean;
  isLoading: boolean;
  forecasts?: WeatherForecast[];
  onRefresh: () => void;
};

export function WeatherCard({ isError, isLoading, forecasts, onRefresh }: WeatherCardProps) {
  return (
    <section
      className="mx-auto w-full max-w-4xl rounded-2xl border border-indigo-400/30 bg-[radial-gradient(circle_at_8%_0%,rgba(124,58,237,0.24),transparent_38%),radial-gradient(circle_at_100%_100%,rgba(59,130,246,0.18),transparent_42%),linear-gradient(160deg,#121428,#0f1222_58%,#0b0e1b)] p-5 shadow-[0_12px_34px_rgba(2,4,12,0.52),inset_0_1px_0_rgba(255,255,255,0.06)] sm:p-6"
      aria-labelledby="weather-heading"
    >
      <WeatherHeader onRefresh={onRefresh} />

      {isLoading && (
        <p className="mb-3 rounded-lg border border-blue-300/30 bg-blue-900/40 px-3 py-2 text-blue-100">
          Loading forecast...
        </p>
      )}
      {isError && (
        <p className="mb-3 rounded-lg border border-rose-400/45 bg-rose-950/70 px-3 py-2 text-rose-100">
          Could not load weather forecast.
        </p>
      )}
      {forecasts && <ForecastList forecasts={forecasts} />}
      {!isLoading && !isError && forecasts?.length === 0 && (
        <p className="rounded-lg border border-slate-600 bg-slate-900/70 px-3 py-2 text-slate-300">
          No forecast data available.
        </p>
      )}
    </section>
  );
}
