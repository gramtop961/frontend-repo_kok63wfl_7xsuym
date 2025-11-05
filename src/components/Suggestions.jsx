import { Lightbulb, Bike, Leaf, Train, Bus, Plug } from "lucide-react";

function Suggestion({ icon: Icon, title, body }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="font-medium text-slate-800">{title}</div>
          <p className="mt-1 text-sm text-slate-600">{body}</p>
        </div>
      </div>
    </div>
  );
}

export default function Suggestions({ values, breakdown }) {
  const ideas = [];

  if (values.carKm > 5) {
    ideas.push({
      icon: Bike,
      title: "Swap short car trips",
      body: "For trips under 3 km, try walking, cycling, or public transit. Even one car‑free day per week cuts emissions noticeably.",
    });
  }
  if (values.busKm + values.trainKm === 0 && values.carKm > 0) {
    ideas.push({
      icon: Bus,
      title: "Explore public transport",
      body: "Mix in bus or metro for regular routes. A weekly transit pass can be cheaper and far lower carbon than daily driving.",
    });
  }
  if (values.flightHoursMonthly > 1) {
    ideas.push({
      icon: Train,
      title: "Consider rail for regional trips",
      body: "For journeys under 800 km, rail can cut emissions by up to 80% compared to flying.",
    });
  }
  if (values.electricityKwh > 5) {
    ideas.push({
      icon: Plug,
      title: "Reduce electricity use",
      body: "Switch to LED bulbs, unplug idle devices, and run appliances on eco modes. Consider a green electricity plan if available.",
    });
  }
  if (values.meatMealsWeekly > 3) {
    ideas.push({
      icon: Leaf,
      title: "Add plant‑based days",
      body: "Try a meat‑free day each week. Beans, tofu, and lentils offer protein with a fraction of the footprint.",
    });
  }

  // General tip always present
  ideas.push({
    icon: Lightbulb,
    title: "Set a small, specific goal",
    body: "Pick one habit to adjust this week (e.g., bike 2 commutes, one plant‑based meal, or a 5% energy reduction). Small wins add up!",
  });

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold text-slate-800">Eco‑friendly Alternatives</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {ideas.map((it, i) => (
          <Suggestion key={i} icon={it.icon} title={it.title} body={it.body} />
        ))}
      </div>
    </section>
  );
}
