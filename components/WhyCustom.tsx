const points = [
  {
    title: "No pagás suscripción mensual",
    description:
      "Pagás una vez y el sistema es tuyo. Sin cuotas que se acumulan mes a mes.",
  },
  {
    title: "Es tuyo, lo controlás vos",
    description:
      "Tus datos, tus clientes, tus reglas. Nada queda en manos de una plataforma externa.",
  },
  {
    title: "Hecho para la forma en que trabajás",
    description:
      "Pensado para negocios locales: cuotas, WhatsApp, efectivo, ticketera. No software genérico importado.",
  },
];

export default function WhyCustom() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-[family-name:var(--font-syne)] text-3xl font-bold text-white sm:text-4xl">
          Por qué un sistema propio
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {points.map((point, i) => (
            <div
              key={point.title}
              className="animate-fade-in-up text-center"
              style={{ animationDelay: `${(i + 1) * 0.15}s` }}
            >
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#10b981]/10 text-lg font-bold text-[#10b981]">
                {i + 1}
              </div>
              <h3 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-white">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
