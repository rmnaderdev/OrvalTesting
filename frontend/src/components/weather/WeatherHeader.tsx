type WeatherHeaderProps = {
  onRefresh: () => void;
};

export function WeatherHeader({ onRefresh }: WeatherHeaderProps) {
  return (
    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h2 id="weather-heading" className="m-0 text-[1.45rem] font-semibold tracking-[0.2px] text-slate-50">
          Weather Forecast
        </h2>
        <p className="mt-1 text-sm text-slate-300">Live conditions from your API</p>
      </div>
      <button
        className="self-start rounded-lg border border-violet-300/70 bg-gradient-to-b from-violet-600 to-violet-700 px-3.5 py-2 text-sm font-semibold text-violet-50 transition hover:-translate-y-px hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
        onClick={onRefresh}
      >
        Refresh
      </button>
    </div>
  );
}
