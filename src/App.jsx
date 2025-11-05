import { useMemo, useState } from "react";
import Header from "./components/Header";
import ActivityForm from "./components/ActivityForm";
import FootprintSummary from "./components/FootprintSummary";
import Suggestions from "./components/Suggestions";

const DEFAULT_VALUES = {
  carKm: 0,
  busKm: 0,
  trainKm: 0,
  flightHoursMonthly: 0,
  electricityKwh: 4,
  meatMealsWeekly: 3,
};

function computeBreakdown(v) {
  // Emission factors (rough global averages; kg CO2e per unit)
  const EF = {
    carPerKm: 0.192, // passenger car average
    busPerKm: 0.105,
    trainPerKm: 0.041,
    flightPerHour: 90, // short-haul economy per flight hour
    electricityPerKwh: 0.4, // grid average varies by region
    meatMeal: 3.0, // per meat-heavy meal
  };

  const car = v.carKm * EF.carPerKm;
  const bus = v.busKm * EF.busPerKm;
  const train = v.trainKm * EF.trainPerKm;
  const flightDaily = (v.flightHoursMonthly / 30) * EF.flightPerHour;
  const electricity = v.electricityKwh * EF.electricityPerKwh;
  const diet = (v.meatMealsWeekly / 7) * EF.meatMeal;

  const breakdown = { car, bus, train, flight: flightDaily, electricity, diet };
  const total = Object.values(breakdown).reduce((a, b) => a + b, 0);
  return { breakdown, total };
}

export default function App() {
  const [values, setValues] = useState(DEFAULT_VALUES);
  const { breakdown, total } = useMemo(() => computeBreakdown(values), [values]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="mx-auto max-w-5xl px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <ActivityForm values={values} onChange={setValues} />
          </div>

          <div className="space-y-6">
            <FootprintSummary breakdown={breakdown} total={total} />
          </div>
        </div>

        <div className="mt-10">
          <Suggestions values={values} breakdown={breakdown} />
        </div>

        <div className="mt-12 rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-600">
          These estimates are for personal awareness and education. For precise accounting, factors should be tailored to your region and energy mix.
        </div>
      </main>
    </div>
  );
}
