import { useReveal } from "@/hooks/use-reveal"

const audiences = [
  {
    num: "01",
    title: "Марке-\nтологи",
    tag: "Brand & Reputation",
    lead: "Управляйте тем, что ИИ говорит о вашем бренде — до того, как это стало проблемой.",
    utps: [
      "Тональность ответов ChatGPT и Алисы о вашем бренде",
      "Видимость против конкурентов в каждой LLM-платформе",
      "Автоматические еженедельные отчёты об изменениях",
      "Репутационные угрозы — раньше, чем они проявились",
    ],
  },
  {
    num: "02",
    title: "SEO-\nспециалисты",
    tag: "Search & Visibility",
    lead: "Займите первые позиции в ИИ-поиске — пока конкуренты ещё не знают о GEO.",
    utps: [
      "Страницы сайта, которые цитируют ChatGPT и Perplexity",
      "Источники выше вас в LLM-выдаче — найди и обойди",
      "Динамика роста видимости после каждой публикации",
      "GEO-стратегия на реальных данных, а не догадках",
    ],
  },
  {
    num: "03",
    title: "Digital-\nагентства",
    tag: "Agency & White-label",
    lead: "Добавьте GEO-продвижение в прайс — новая услуга с высокой маржой и низкой конкуренцией.",
    utps: [
      "GEO-аудит как новая высокомаржинальная услуга",
      "Все клиенты из единого рабочего пространства",
      "White-label отчёты с логотипом вашего агентства",
      "Доказательства эффективности в цифрах для клиента",
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

        {/* Шапка газеты */}
        <div className={`mb-0 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}>
          <div className="flex items-end justify-between border-b-2 border-foreground pb-3">
            <h2 className="font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Для кого
            </h2>
            <span className="mb-1 font-mono text-xs text-foreground/30 md:text-sm">Флоустат · 2025</span>
          </div>
          <div className="flex items-center justify-between border-b border-foreground/15 py-2">
            <span className="font-mono text-[10px] text-foreground/30 md:text-xs">/ Кому нужен Флоустат</span>
            <span className="font-mono text-[10px] text-foreground/30 md:text-xs">AI Visibility Analytics · LLM Monitoring · GEO</span>
          </div>
        </div>

        {/* Три колонки */}
        <div
          className={`mt-0 grid grid-cols-1 divide-y divide-foreground/10 md:grid-cols-3 md:divide-x md:divide-y-0 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "100ms" }}
        >
          {audiences.map((item, i) => (
            <div key={i} className="px-0 py-8 md:px-8 md:py-10 md:first:pl-0 md:last:pr-0">

              {/* Номер */}
              <span className="mb-4 block font-mono text-[10px] text-foreground/25 md:text-xs">
                {item.num} — {item.tag}
              </span>

              {/* Крупный заголовок ЦА */}
              <h3
                className="mb-5 whitespace-pre-line font-sans font-light leading-[0.95] tracking-tight text-foreground"
                style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)" }}
              >
                {item.title}
              </h3>

              {/* Лид */}
              <p className="mb-6 border-t border-foreground/10 pt-5 font-sans text-sm leading-relaxed text-foreground/60 md:text-base">
                {item.lead}
              </p>

              {/* УТП — нумерованный список */}
              <ol className="space-y-3">
                {item.utps.map((utp, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="mt-px flex-shrink-0 font-mono text-[10px] text-foreground/20 md:text-xs">
                      {String(j + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-xs leading-relaxed text-foreground/55 md:text-sm">
                      {utp}
                    </span>
                  </li>
                ))}
              </ol>

              {/* Ссылка */}
              <button
                onClick={() => scrollToSection?.(5)}
                className="mt-8 font-mono text-xs text-foreground/40 underline underline-offset-4 transition-colors hover:text-foreground"
              >
                Запросить демо →
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
