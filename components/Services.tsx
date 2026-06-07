const services = [
  {
    title: "Adaptación a tu negocio",
    description:
      "Ajusto el sistema a tus procesos, nombre y marca para que quede como si fuera hecho a medida.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1 1.36 1.36-5.1 9.4-9.4a2.12 2.12 0 013 3l-9.4 9.4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 13l-2.5 2.5M6 18h12" />
      </svg>
    ),
  },
  {
    title: "Capacitación incluida",
    description:
      "Te explico todo antes de entregar para que arranques a usarlo sin dudas ni sorpresas.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M8 11h6" />
      </svg>
    ),
  },
  {
    title: "Soporte post-entrega",
    description:
      "Te acompaño después del lanzamiento. Si algo no anda o tenés dudas, estoy.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.09 9.09 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Deploy en producción",
    description:
      "Lo dejo funcionando en internet, vos solo lo usás. Sin configuraciones raras.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m0 0l-2.25-2.25M12 15l2.25-2.25" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicios" className="border-t border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-[family-name:var(--font-syne)] text-3xl font-bold text-white sm:text-4xl">
          ¿Qué incluye trabajar conmigo?
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="card-glow animate-fade-in-up rounded-xl border border-white/10 bg-[#111]/50 p-6"
              style={{ animationDelay: `${(i + 1) * 0.1}s` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#10b981]/10 text-[#10b981]">
                {service.icon}
              </div>
              <h3 className="font-[family-name:var(--font-syne)] text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
