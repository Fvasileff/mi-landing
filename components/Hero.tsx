import { WHATSAPP_URL } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#10b981]/10 blur-[120px]" />
        <div className="absolute top-20 right-0 h-[300px] w-[400px] rounded-full bg-emerald-900/20 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="animate-fade-in-up mb-4 inline-block rounded-full border border-[#10b981]/30 bg-[#10b981]/10 px-4 py-1.5 text-sm text-[#10b981]">
            Tucumán, Argentina · Sistemas listos para usar
          </p>

          <h1 className="animate-fade-in-up animate-delay-100 font-[family-name:var(--font-syne)] text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Sistemas web listos para tu negocio
          </h1>

          <p className="animate-fade-in-up animate-delay-200 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
            Productos terminados que adapto a lo que necesitás. Sin vueltas, sin
            meses de espera.
          </p>

          <div className="animate-fade-in-up animate-delay-300 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#proyectos"
              className="w-full rounded-lg bg-[#10b981] px-6 py-3 text-center text-sm font-semibold text-black transition-colors hover:bg-[#0d9668] sm:w-auto"
            >
              Ver proyectos
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-lg border border-white/10 px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:border-[#10b981]/50 hover:bg-white/5 sm:w-auto"
            >
              Contactarme por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
