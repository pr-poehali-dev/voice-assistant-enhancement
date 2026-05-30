import { useReveal } from "@/hooks/use-reveal"

const audiences = [
  {
    num: "01",
    title: "Маркетологи",
    tag: "Brand & Reputation",
    featured: false,
    cta: "Начать мониторинг",
    utps: [
      "Тональность бренда в ChatGPT и Алисе",
      "Видимость против конкурентов",
      "Автоматические еженедельные отчёты",
      "Репутационные угрозы заранее",
      "Мониторинг упоминаний в 12+ LLM",
    ],
  },
  {
    num: "02",
    title: "SEO-\nспециалисты",
    tag: "Search & Visibility",
    featured: true,
    cta: "Попробовать бесплатно",
    utps: [
      "Страницы сайта, которые цитирует ChatGPT",
      "Источники выше вас — найди и обойди",
      "Динамика роста после публикаций",
      "GEO-стратегия на реальных данных",
      "Сравнение с конкурентами по каждой LLM",
    ],
  },
  {
    num: "03",
    title: "Агентства",
    tag: "Agency & White-label",
    featured: false,
    cta: "Обсудить условия",
    utps: [
      "GEO-аудит — новая высокомаржинальная услуга",
      "Все клиенты из единого кабинета",
      "White-label отчёты с вашим брендом",
      "Цифры эффективности для клиентов",
      "Мультибрендовый доступ без доплат",
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

        {/* Три карточки */}
        <div
          className={`grid grid-cols-1 items-stretch gap-4 md:grid-cols-3 md:gap-5 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "150ms" }}
        >
          {audiences.map((item) => (
            <div
              key={item.num}
              className={`relative flex flex-col rounded-3xl p-8 md:p-9 ${
                item.featured
                  ? "bg-foreground text-white ring-0"
                  : "border border-foreground/10 bg-foreground/[0.02]"
              }`}
            >
              {/* Бейдж */}
              {item.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-white px-4 py-1 font-mono text-[10px] font-medium text-foreground">
                    Популярный выбор
                  </span>
                </div>
              )}

              {/* Номер + тег */}
              <div className="mb-6 flex items-center gap-2">
                <span className={`font-mono text-[10px] ${item.featured ? "text-white/30" : "text-foreground/25"}`}>
                  {item.num}
                </span>
                <span className={`h-px flex-1 ${item.featured ? "bg-white/15" : "bg-foreground/10"}`} />
                <span className={`font-mono text-[10px] ${item.featured ? "text-white/30" : "text-foreground/25"}`}>
                  {item.tag}
                </span>
              </div>

              {/* Заголовок */}
              <h3
                className={`mb-8 whitespace-pre-line font-sans font-light leading-none ${
                  item.featured ? "text-white" : "text-foreground"
                }`}
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
              >
                {item.title}
              </h3>

              {/* УТП */}
              <ul className="mb-8 flex-1 space-y-3.5">
                {item.utps.map((utp, j) => (
                  <li key={j} className="flex items-start gap-3">
                    {/* Галочка */}
                    <span className={`mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full ${
                      item.featured ? "bg-white/15" : "bg-foreground/8"
                    }`}>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1.5 4L3 5.5L6.5 2" stroke={item.featured ? "white" : "currentColor"} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity={item.featured ? "0.7" : "0.4"} />
                      </svg>
                    </span>
                    <span className={`font-mono text-xs leading-relaxed ${
                      item.featured ? "text-white/65" : "text-foreground/55"
                    } md:text-sm`}>
                      {utp}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Кнопка */}
              <button
                onClick={() => scrollToSection?.(5)}
                className={`mt-auto w-full rounded-2xl py-3.5 font-sans text-sm font-medium transition-opacity hover:opacity-80 ${
                  item.featured
                    ? "bg-white text-foreground"
                    : "border border-foreground/20 text-foreground/70 hover:border-foreground/40"
                }`}
              >
                {item.cta}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
