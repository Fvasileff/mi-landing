import { WHATSAPP_URL } from "@/lib/whatsapp";

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-[#10b981]"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CrmMockup() {
  const metrics = [
    { label: "Ventas del mes", value: "$1.2M", color: "text-[#10b981]" },
    { label: "Clientes activos", value: "84", color: "text-white" },
    { label: "Cuotas vencidas", value: "12", color: "text-amber-400" },
    { label: "Cobrado hoy", value: "$48K", color: "text-[#10b981]" },
  ];

  return (
    <div className="rounded-xl border border-white/10 bg-[#111] p-4">
      <div className="mb-3 flex items-center gap-2 border-b border-white/5 pb-3">
        <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <div className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#10b981]/70" />
        <span className="ml-2 text-xs text-zinc-500">CRM Dashboard</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-lg border border-white/5 bg-[#0a0a0a] p-3"
          >
            <p className="text-[10px] text-zinc-500">{m.label}</p>
            <p className={`mt-1 text-lg font-bold ${m.color}`}>{m.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 space-y-1.5">
        {[
          { name: "García, Juan", status: "Al día", statusColor: "bg-[#10b981]/20 text-[#10b981]" },
          { name: "López, María", status: "Vencida", statusColor: "bg-red-500/20 text-red-400" },
          { name: "Ruiz, Pedro", status: "Pendiente", statusColor: "bg-amber-500/20 text-amber-400" },
        ].map((row) => (
          <div
            key={row.name}
            className="flex items-center justify-between rounded-md bg-white/[0.03] px-3 py-2"
          >
            <span className="text-xs text-zinc-400">{row.name}</span>
            <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${row.statusColor}`}>
              {row.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BarMockup() {
  const orders = [
    { id: "#042", table: "Mesa 3", status: "Pendiente", color: "bg-amber-500/20 text-amber-400 border-amber-500/30" },
    { id: "#041", table: "Delivery", status: "Preparando", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
    { id: "#040", table: "Mesa 7", status: "En camino", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
    { id: "#039", table: "Mesa 1", status: "Entregado", color: "bg-[#10b981]/20 text-[#10b981] border-[#10b981]/30" },
  ];

  return (
    <div className="rounded-xl border border-white/10 bg-[#111] p-4">
      <div className="mb-3 flex items-center justify-between border-b border-white/5 pb-3">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#10b981]/70" />
          <span className="ml-2 text-xs text-zinc-500">Panel de Pedidos</span>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-[#10b981]/20 px-2 py-0.5 text-[10px] text-[#10b981]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#10b981]" />
          En vivo
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {orders.map((order) => (
          <div
            key={order.id}
            className={`rounded-lg border p-3 ${order.color}`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold">{order.id}</span>
              <span className="text-[10px] opacity-70">{order.table}</span>
            </div>
            <p className="mt-2 text-[11px] font-medium">{order.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const crmFeatures = [
  "Dashboard con resumen: ventas del mes, clientes activos, cuotas vencidas, cobrado",
  "Registro de ventas con financiamiento: precio, anticipo, plan de cuotas, interés",
  "Gestión de cuotas con estados: pendiente, vencida, pagada, en mora",
  "Recordatorios automáticos por WhatsApp",
  "Reportes: cobrado, deuda vencida, próximas a vencer",
  "Gestión de clientes: búsqueda por nombre, apellido, DNI o teléfono",
  "Catálogo de equipos con stock y precios",
];

const planBasicoFeatures = [
  "Menú digital por categorías con fotos y descripciones",
  "Pedidos online con carrito y nota para cocina",
  "Checkout con datos del cliente, dirección y método de pago (efectivo con vuelto / transferencia / tarjeta)",
  "Panel admin en tiempo real: estados Pendiente → Preparando → En camino → Entregado",
  "Impresión de comandas por ticketera (manual o automática al recibir pedido)",
  "Reportes de ventas: hoy / mes / año + productos más vendidos",
  "Configuración: nombre del bar, costo de envío, pedido mínimo, horarios",
  "Activar/desactivar el bar con un click",
  "Notificaciones con sonido al recibir pedido",
];

const planPremiumFeatures = [
  "Todo lo del plan básico",
  "Gestión de mesas: mapa visual con estado libre/ocupada",
  "El mozo carga el pedido desde su celular por mesa",
  "El pedido llega directo a cocina/caja en tiempo real",
  "Comanda impresa automáticamente por mesa",
  "Cierre de mesa con total a cobrar",
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-white sm:text-4xl">
            Sistemas listos para usar
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Productos terminados que adapto a tu negocio
          </p>
        </div>

        <div className="space-y-12">
          {/* CRM Card */}
          <article className="card-glow animate-fade-in-up overflow-hidden rounded-2xl border border-white/10 bg-[#111]/50">
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <span className="inline-block rounded-full bg-[#10b981]/20 px-3 py-1 text-xs font-medium text-[#10b981]">
                  Disponible
                </span>
                <h3 className="mt-4 font-[family-name:var(--font-syne)] text-2xl font-bold text-white">
                  Sistema de Gestión para Negocios de Celulares
                </h3>
                <p className="mt-3 text-zinc-400 leading-relaxed">
                  Todo lo que necesitás para vender y financiar celulares desde un
                  solo lugar. Controlá clientes, cuotas y stock sin planillas de
                  Excel.
                </p>

                <ul className="mt-6 space-y-2.5">
                  {crmFeatures.map((feature) => (
                    <li key={feature} className="flex gap-2.5 text-sm text-zinc-300">
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["CRM", "WhatsApp", "Cuotas", "Stock"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-block rounded-lg bg-[#10b981] px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#0d9668]"
                >
                  Quiero este sistema
                </a>
              </div>

              <div className="flex items-center">
                <CrmMockup />
              </div>
            </div>
          </article>

          {/* Bar Card */}
          <article className="card-glow animate-fade-in-up animate-delay-100 overflow-hidden rounded-2xl border border-white/10 bg-[#111]/50">
            <div className="p-6 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                <div>
                  <span className="inline-block rounded-full bg-[#10b981]/20 px-3 py-1 text-xs font-medium text-[#10b981]">
                    Disponible
                  </span>
                  <h3 className="mt-4 font-[family-name:var(--font-syne)] text-2xl font-bold text-white">
                    Sistema de Pedidos para Bares y Restaurantes
                  </h3>
                  <p className="mt-3 text-zinc-400 leading-relaxed">
                    Tus clientes piden desde el celular, vos gestionás todo en
                    tiempo real. Sin papel, sin errores, sin llamadas.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Pedidos online", "Ticketera", "Tiempo real", "Bares"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-400"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div className="flex items-center">
                  <BarMockup />
                </div>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {/* Plan Básico */}
                <div className="card-glow rounded-xl border border-white/10 bg-[#0a0a0a] p-6">
                  <h4 className="font-[family-name:var(--font-syne)] text-lg font-bold text-white">
                    Plan Básico
                  </h4>
                  <ul className="mt-4 space-y-2.5">
                    {planBasicoFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-2.5 text-sm text-zinc-300"
                      >
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block w-full rounded-lg border border-white/10 py-2.5 text-center text-sm font-medium text-white transition-colors hover:border-[#10b981]/50 hover:bg-white/5"
                  >
                    Quiero este plan
                  </a>
                </div>

                {/* Plan Premium */}
                <div className="card-glow relative rounded-xl border-2 border-[#10b981]/50 bg-[#0a0a0a] p-6">
                  <span className="absolute -top-3 right-4 rounded-full bg-[#10b981] px-3 py-0.5 text-xs font-semibold text-black">
                    Recomendado
                  </span>
                  <h4 className="font-[family-name:var(--font-syne)] text-lg font-bold text-white">
                    Plan Premium
                  </h4>
                  <ul className="mt-4 space-y-2.5">
                    {planPremiumFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-2.5 text-sm text-zinc-300"
                      >
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block w-full rounded-lg bg-[#10b981] py-2.5 text-center text-sm font-semibold text-black transition-colors hover:bg-[#0d9668]"
                  >
                    Quiero este plan
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
