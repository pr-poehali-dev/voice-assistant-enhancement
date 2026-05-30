import { useReveal } from "@/hooks/use-reveal"

const audiences = [
  {
    num: "01",
    title: "Маркетологи",
    tag: "Brand & Reputation",
    metric: "84%",
    metricLabel: "средняя видимость бренда в LLM",
    utps: [
      "Тональность ответов ChatGPT и Алисы о бренде",
      "Видимость против конкурентов по каждой LLM",
      "Автоматические отчёты без ручной работы",
      "Репутационные угрозы — до появления проблем",
    ],
  },
  {
    num: "02",
    title: "SEO-специалисты",
    tag: "Search & Visibility",
    metric: "↑3×",
    metricLabel: "рост цитирований после GEO-оптимизации",
    utps: [
      "Страницы сайта, которые цитирует ChatGPT",
      "Источники выше вас в LLM — найди и обойди",
      "Динамика роста после каждой публикации",
      "GEO-стратегия на реальных данных",
    ],
  },
  {
    num: "03",
    title: "Digital-агентства",
    tag: "Agency & White-label",
    metric: "12+",
    metricLabel: "LLM-платформ в одном кабинете",
    utps: [
      "GEO-аудит — новая высокомаржинальная услуга",
      "Все клиенты из единого рабочего пространства",
      "White-label отчёты с вашим логотипом",
      "Цифры эффективности для каждого клиента",
    ],
  },
]

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.1)

  return (
    <section
      ref={ref}
      className="flex min-h-screen w-full flex-col justify-center px-5 py-24 md:px-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* Заголовок */}
        <div className={`mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
          <h2 className="mb-1 font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Для кого
          </h2>
          <p className="font-mono text-xs text-foreground/40 md:text-sm">/ Кому нужен Флоустат</p>
        </div>

        {/* Три горизонтальные плитки */}
        <div className={`flex flex-col gap-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "150ms" }}>
          {audiences.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-1 overflow-hidden rounded-2xl border border-foreground/10 md:grid-cols-[220px_1px_1fr] lg:grid-cols-[280px_1px_1fr]"
            >
              {/* Левая — метрика */}
              <div className="flex flex-col justify-between bg-foreground/[0.02] p-7 md:p-8">
                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <span className="font-mono text-[10px] text-foreground/25">{item.num}</span>
                    <span className="font-mono text-[10px] text-foreground/25">·</span>
                    <span className="font-mono text-[10px] text-foreground/25">{item.tag}</span>
                  </div>
                  <h3 className="mt-3 font-sans text-2xl font-light text-foreground md:text-3xl">
                    {item.title}
                  </h3>
                </div>
                <div className="mt-6 md:mt-0">
                  <div className="font-sans text-5xl font-light tabular-nums text-foreground md:text-6xl">
                    {item.metric}
                  </div>
                  <p className="mt-1 font-mono text-[10px] leading-relaxed text-foreground/35 md:text-xs">
                    {item.metricLabel}
                  </p>
                </div>
              </div>

              {/* Разделитель */}
              <div className="hidden bg-foreground/8 md:block" />

              {/* Правая — УТП */}
              <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
                {item.utps.map((utp, j) => (
                  <div
                    key={j}
                    className={`flex items-start gap-3 p-6 md:p-7 ${
                      j % 2 === 0 ? "border-r border-foreground/8" : ""
                    } ${
                      j < 2 ? "border-b border-foreground/8" : ""
                    }`}
                  >
                    <span className="mt-px flex-shrink-0 font-mono text-[10px] text-foreground/20">
                      {String(j + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-xs leading-relaxed text-foreground/60 md:text-sm">
                      {utp}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Кнопки */}
        <div
          className={`mt-10 flex flex-wrap gap-3 transition-all duration-700 md:gap-4 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "300ms" }}
        >
          <button
            onClick={() => scrollToSection?.(5)}
            className="rounded-full bg-foreground px-6 py-3 font-sans text-sm font-medium text-background transition-opacity hover:opacity-80 md:px-8 md:py-4 md:text-base"
          >
            Запросить демо
          </button>
          <button
            onClick={() => scrollToSection?.(2)}
            className="rounded-full border border-foreground/20 px-6 py-3 font-sans text-sm font-medium text-foreground/70 transition-all hover:border-foreground/40 hover:text-foreground md:px-8 md:py-4 md:text-base"
          >
            Возможности
          </button>
        </div>

      </div>
    </section>
  )
}
