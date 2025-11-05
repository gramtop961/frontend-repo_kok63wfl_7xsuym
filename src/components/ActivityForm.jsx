import { Car, Bus, Train, Plane, Utensils, Zap } from "lucide-react";
import { useState, useEffect } from "react";

export default function ActivityForm({ values, onChange }) {
  const [local, setLocal] = useState(values);

  useEffect(() => {
    setLocal(values);
  }, [values]);

  const handle = (key) => (e) => {
    const next = { ...local, [key]: Number(e.target.value || 0) };
    setLocal(next);
    onChange(next);
  };

  const Field = ({ icon: Icon, label, unit, value, onChange, min = 0, step = 1 }) => (
    <label className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <div className="font-medium text-slate-800">{label}</div>
          <div className="text-xs text-slate-500">{unit}</div>
        </div>
      </div>
      <input
        type="number"
        min={min}
        step={step}
        value={value}
        onChange={onChange}
        className="w-28 rounded-lg border border-slate-200 px-3 py-2 text-right text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
    </label>
  );

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold text-slate-800">Daily Activities</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field icon={Car} label="Car travel" unit="kilometers per day" value={local.carKm} onChange={handle("carKm")} step={0.1} />
        <Field icon={Bus} label="Bus travel" unit="kilometers per day" value={local.busKm} onChange={handle("busKm")} step={0.1} />
        <Field icon={Train} label="Train/Metro" unit="kilometers per day" value={local.trainKm} onChange={handle("trainKm")} step={0.1} />
        <Field icon={Plane} label="Flights" unit="hours per month" value={local.flightHoursMonthly} onChange={handle("flightHoursMonthly")} step={0.1} />
        <Field icon={Zap} label="Electricity" unit="kWh per day" value={local.electricityKwh} onChange={handle("electricityKwh")} step={0.1} />
        <Field icon={Utensils} label="Meat-heavy meals" unit="meals per week" value={local.meatMealsWeekly} onChange={handle("meatMealsWeekly")} />
      </div>
    </section>
  );
}
