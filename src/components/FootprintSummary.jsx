import { Footprints, Recycle } from "lucide-react";

function Bar({ label, value, max }) {
  const width = max > 0 ? Math.min(100, Math.round((value / max) * 100)) : 0;
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs text-slate-500">
        <span>{label}</span>
        <span>{value.toFixed(1)} kg CO₂e</span>
      </div>
      <div className="h-2.5 w-full rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-emerald-500 transition-[width]"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function FootprintSummary({ breakdown, total }) {
  const max = Math.max(1, ...Object.values(breakdown));
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-800">Your Footprint</h2>
        <div className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-1.5 text-emerald-700">
          <Footprints className="h-4 w-4" />
          <span className="text-sm font-medium">{total.toFixed(1)} kg CO₂e / day</span>
        </div>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="grid gap-3">
          <Bar label="Car" value={breakdown.car} max={max} />
          <Bar label="Bus" value={breakdown.bus} max={max} />
          <Bar label="Train/Metro" value={breakdown.train} max={max} />
          <Bar label="Flights" value={breakdown.flight} max={max} />
          <Bar label="Electricity" value={breakdown.electricity} max={max} />
          <Bar label="Diet (meat meals)" value={breakdown.diet} max={max} />
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
          <Recycle className="h-4 w-4 text-emerald-600" />
          Estimates only — factors vary by region and lifestyle.
        </div>
      </div>
    </section>
  );
}
