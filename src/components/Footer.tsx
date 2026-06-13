export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent-purple/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-bold tracking-[0.2em]">
              <span className="text-gradient">PRIME</span> RESELL
            </p>
            <p className="mt-3 max-w-sm text-xs leading-relaxed text-muted">
              Prime Resell is een onafhankelijke reseller. Wij zijn niet
              gelieerd aan, noch geautoriseerd door de genoemde merken. Alle
              merknamen en logo&apos;s zijn eigendom van hun respectievelijke
              houders.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:items-end">
            <nav className="flex gap-6">
              <a
                href="#collectie"
                className="text-xs font-medium text-muted transition-colors hover:text-accent-cyan"
              >
                Collectie
              </a>
              <a
                href="mailto:info@primeresell.nl"
                className="text-xs font-medium text-muted transition-colors hover:text-accent-coral"
              >
                Contact
              </a>
            </nav>
            <p className="text-xs text-muted/60">
              © {currentYear} Prime Resell. Alle rechten voorbehouden.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
