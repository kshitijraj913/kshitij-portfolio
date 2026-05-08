export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg animate-grid-shift opacity-40" />
      <div
        className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full blur-3xl animate-glow-pulse"
        style={{ background: "radial-gradient(circle, #B6FF00 0%, transparent 70%)", opacity: 0.22 }}
      />
      <div
        className="absolute top-1/2 -right-40 h-[500px] w-[500px] rounded-full blur-3xl animate-glow-pulse"
        style={{ background: "radial-gradient(circle, #EAFEF7 0%, transparent 70%)", opacity: 0.15, animationDelay: "1.5s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full blur-3xl animate-glow-pulse"
        style={{ background: "radial-gradient(circle, #B6FF00 0%, transparent 70%)", opacity: 0.15, animationDelay: "2.5s" }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 0%, #111315 80%)" }} />
    </div>
  );
}
