import { Leaf } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 backdrop-blur">
            <Leaf className="h-6 w-6" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">EcoTrack — Your Daily Carbon Companion</h1>
        </div>
        <p className="mt-3 max-w-2xl text-white/90">
          Estimate your daily carbon footprint and discover practical, eco‑friendly alternatives for travel, home energy, and diet.
        </p>
      </div>
    </header>
  );
}
