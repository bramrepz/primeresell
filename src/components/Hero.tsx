export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-accent-purple/20 blur-3xl" />
      <div className="pointer-events-none absolute top-0 -right-16 h-48 w-48 rounded-full bg-accent-cyan/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-32 w-32 rounded-full bg-accent-coral/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="max-w-2xl animate-slide-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-purple/30 bg-accent-purple/10 px-3 py-1.5 text-xs font-medium text-accent-purple">
            <span className="h-2 w-2 rounded-full bg-accent-green animate-pulse-glow" />
            Fresh drops · Op voorraad in NL
          </span>

          <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Exclusieve luxe,{" "}
            <span className="text-gradient">direct bij jou.</span>
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
            Designer petten en high-end horloges — curated, gecheckt en klaar
            om te shippen. Bestel via WhatsApp en heb het morgen in huis.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#collectie"
              className="inline-flex items-center rounded-full bg-gradient-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent-purple/20 transition-transform hover:scale-105"
            >
              Bekijk collectie
            </a>
            <span className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-2.5 text-xs font-medium text-muted">
              Verzending binnen 24–48 uur
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
