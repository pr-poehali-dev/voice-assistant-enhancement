import { useReveal } from "@/hooks/use-reveal"

const audiences = [
  {
    num: "01",
    title: "Маркетологи",
    tag: "Brand & Reputation",
    reverse: false,
    visual: "📣",
    visualBg: "bg-blue-50",
    stats: [{ value: "84%", label: "средняя видимость" }, { value: "12+", label: "LLM платформ" }],
    utps: [
      "Тональность бренда в ChatGPT и Алисе — позитивно или негативно",
      "Видимость против конкурентов в каждой LLM-платформе",
      "Автоматические еженедельные отчёты без ручной работы",
      "Репутационные угрозы — до того, как стали проблемой",
    ],
  },
  {
    num: "02",
    title: "SEO-специалисты",
    tag: "Search & Visibility",
    reverse: true,
    visual: "🔍",
    visualBg: "bg-emerald-50",
    stats: [{ value: "↑3×", label: "рост цитирований" }, { value: "24/7", label: "мониторинг" }],
    utps: [
      "Страницы сайта, которые цитируют ChatGPT и Perplexity",
      "Источники выше вас в LLM-выдаче — найди и обойди их",
      "Динамика роста видимости после каждой публикации",
      "GEO-стратегия на реальных данных, а не на догадках",
    ],
  },
  {
    num: "03",
    title: "Digital-агентства",
    tag: "Agency & White-label",
    reverse: false,
    visual: "🏢",
    visualBg: "bg-violet-50",
    stats: [{ value: "WL", label: "white-label" }, { value: "∞", label: "клиентов" }],
    utps: [
      "GEO-аудит — новая высокомаржинальная услуга в прайсе",
      "Все клиенты из единого рабочего пространства",
      "White-label отчёты с логотипом вашего агентства",
      "Цифры эффективности для каждого клиента",
    ],
  },
]

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.1)

  return (
    <section
      ref={ref}
      className="w-full px-5 py-24 md:px-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* Заголовок */}
        <div className={`mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
          <h2 className="mb-1 font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Для кого
          </h2>
          <p className="font-mono text-xs text-foreground/40 md:text-sm">/ Кому нужен Флоустат</p>
        </div>

        {/* Зебра */}
        <div
          className={`flex flex-col gap-24 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "150ms" }}
        >
          {audiences.map((item, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24 ${item.reverse ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              {/* Текст */}
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="font-mono text-xs text-foreground/25">{item.num}</span>
                  <span className="h-px flex-1 bg-foreground/10" />
                  <span className="font-mono text-xs text-foreground/25">{item.tag}</span>
                </div>

                <h3 className="mb-6 font-sans text-4xl font-light text-foreground md:text-5xl lg:text-6xl">
                  {item.title}
                </h3>

                <ul className="mb-8 space-y-4">
                  {item.utps.map((utp, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground/30" />
                      <span className="font-mono text-sm leading-relaxed text-foreground/60">
                        {utp}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollToSection?.(5)}
                  className="rounded-full bg-foreground px-6 py-3 font-sans text-sm font-medium text-background transition-opacity hover:opacity-80"
                >
                  Попробовать
                </button>
              </div>

              {/* Визуал */}
              <div className={`flex flex-col gap-4 rounded-3xl ${item.visualBg} p-10 md:p-12`}>
                <div className="text-7xl md:text-8xl">{item.visual}</div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {item.stats.map((s, j) => (
                    <div key={j} className="rounded-2xl bg-white/60 px-5 py-4 backdrop-blur-sm">
                      <div className="font-sans text-3xl font-light text-foreground">{s.value}</div>
                      <div className="font-mono text-xs text-foreground/40">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
