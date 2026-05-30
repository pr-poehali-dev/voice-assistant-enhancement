import { useRef } from "react"
import { useReveal } from "@/hooks/use-reveal"

const audiences = [
  {
    num: "01",
    title: "Маркетологи",
    label: "Brand & Reputation",
    color: "from-blue-950/40 to-slate-900/20",
    accent: "bg-blue-400/20 text-blue-300 border-blue-400/20",
    utps: [
      "Как ИИ описывает ваш бренд — позитивно или нейтрально",
      "Видимость vs конкуренты по каждой LLM-платформе",
      "Еженедельные отчёты без ручного мониторинга",
      "Репутационные риски — до того, как стали проблемой",
    ],
  },
  {
    num: "02",
    title: "SEO-специалисты",
    label: "Search & Visibility",
    color: "from-emerald-950/40 to-slate-900/20",
    accent: "bg-emerald-400/20 text-emerald-300 border-emerald-400/20",
    utps: [
      "Какие страницы сайта цитируют ChatGPT и Perplexity",
      "Источники, которые LLM ставит выше вас — найди и обойди",
      "Рост видимости после публикации нового контента",
      "GEO-стратегия на реальных данных, а не догадках",
    ],
  },
  {
    num: "03",
    title: "Digital-агентства",
    label: "Agency & White-label",
    color: "from-violet-950/40 to-slate-900/20",
    accent: "bg-violet-400/20 text-violet-300 border-violet-400/20",
    utps: [
      "GEO-аудит в прайс — новая услуга с высокой маржой",
      "Несколько клиентов из одного кабинета",
      "White-label отчёты с логотипом вашего агентства",
      "Эффективность работы в цифрах для клиента",
    ],
  },
]

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.1)
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={ref}
      className="flex min-h-screen w-full flex-col justify-center py-24"
    >
      {/* Заголовок */}
      <div
        className={`mb-12 px-5 transition-all duration-700 md:mb-14 md:px-12 lg:px-16 ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
        }`}
      >
        <h2 className="mb-1 font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Для кого
        </h2>
        <p className="font-mono text-xs text-foreground/40 md:text-sm">/ Кому нужен Флоустат</p>
      </div>

      {/* Горизонтальный скролл */}
      <div
        ref={scrollRef}
        className={`flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6 pl-5 pr-5 transition-all duration-700 scrollbar-none md:gap-6 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
        style={{
          transitionDelay: "150ms",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {audiences.map((item, i) => (
          <div
            key={i}
            className={`relative flex w-[85vw] flex-shrink-0 snap-start flex-col justify-between overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br p-8 md:w-[42vw] md:p-10 lg:w-[34vw] ${item.color}`}
            style={{ minHeight: "480px" }}
          >
            {/* Большой номер — фоновый */}
            <div
              className="pointer-events-none absolute -bottom-6 -right-4 select-none font-sans font-bold leading-none text-white/[0.04]"
              style={{ fontSize: "clamp(8rem, 18vw, 16rem)" }}
            >
              {item.num}
            </div>

            {/* Верх */}
            <div>
              <div className="mb-8 flex items-start justify-between">
                <span className={`rounded-full border px-3 py-1 font-mono text-[10px] ${item.accent}`}>
                  {item.label}
                </span>
                <span className="font-mono text-xs text-white/20">{item.num}</span>
              </div>

              <h3 className="mb-0 font-sans text-3xl font-light text-white md:text-4xl lg:text-5xl">
                {item.title}
              </h3>
            </div>

            {/* Низ — УТП */}
            <div className="relative mt-10 space-y-3">
              {item.utps.map((utp, j) => (
                <div key={j} className="flex items-start gap-3">
                  <div className="mt-[5px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/30" />
                  <p className="font-mono text-xs leading-relaxed text-white/60 md:text-sm">
                    {utp}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Карточка-CTA */}
        <div
          className="relative flex w-[70vw] flex-shrink-0 snap-start flex-col items-start justify-center gap-6 rounded-3xl border border-foreground/10 p-8 md:w-[28vw] md:p-10 lg:w-[22vw]"
          style={{ minHeight: "480px" }}
        >
          <p className="font-sans text-2xl font-light leading-snug text-foreground/70 md:text-3xl">
            Готовы узнать, где ваш бренд в ИИ-поиске?
          </p>
          <button
            onClick={() => scrollToSection?.(5)}
            className="rounded-full bg-foreground px-6 py-3 font-sans text-sm font-medium text-background transition-all duration-200 hover:opacity-90 md:px-8 md:py-4 md:text-base"
          >
            Запросить демо
          </button>
        </div>
      </div>

      {/* Hint скролл */}
      <div
        className={`mt-6 flex items-center gap-3 px-5 transition-all duration-700 md:px-12 lg:px-16 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "350ms" }}
      >
        <div className="font-mono text-xs text-foreground/30">Листайте →</div>
        <div className="flex gap-1.5">
          {[...Array(audiences.length + 1)].map((_, i) => (
            <div key={i} className="h-1 w-6 rounded-full bg-foreground/10" />
          ))}
        </div>
      </div>

    </section>
  )
}
