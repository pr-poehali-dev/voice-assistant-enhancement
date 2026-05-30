import { useReveal } from "@/hooks/use-reveal"

const audiences = [
  {
    num: "01",
    title: "Маркетологи",
    utps: [
      { label: "Тональность", text: "ChatGPT о вашем бренде — позитивно или негативно" },
      { label: "Конкуренты", text: "Видимость бренда против конкурентов в каждой LLM" },
      { label: "Автоматика", text: "Еженедельные отчёты без единого ручного действия" },
      { label: "Риски", text: "Репутационные угрозы раньше, чем они проявились" },
    ],
  },
  {
    num: "02",
    title: "SEO-специалисты",
    utps: [
      { label: "Источники", text: "Страницы сайта, которые цитирует ChatGPT и Perplexity" },
      { label: "Гэп-анализ", text: "Источники выше вас в LLM — найди и обойди" },
      { label: "Динамика", text: "Рост видимости после каждой публикации контента" },
      { label: "GEO", text: "Стратегия продвижения на реальных данных LLM" },
    ],
  },
  {
    num: "03",
    title: "Digital-агентства",
    utps: [
      { label: "Новая услуга", text: "GEO-аудит — высокомаржинальный продукт с низкой конкуренцией" },
      { label: "Мультикаб", text: "Все клиенты из единого рабочего пространства" },
      { label: "White-label", text: "Отчёты с логотипом и брендбуком вашего агентства" },
      { label: "Доказательства", text: "Рост видимости клиента в цифрах после каждого спринта" },
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
        <div className={`mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
          <h2 className="mb-1 font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Для кого
          </h2>
          <p className="font-mono text-xs text-foreground/40 md:text-sm">/ Кому нужен Флоустат</p>
        </div>

        {/* Блоки стопкой */}
        <div
          className={`flex flex-col gap-px overflow-hidden rounded-3xl border border-foreground/10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "150ms" }}
        >
          {audiences.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-1 bg-foreground/[0.015] md:grid-cols-[200px_1fr] lg:grid-cols-[260px_1fr]"
            >
              {/* Левая — название */}
              <div className="flex flex-col justify-center gap-1 border-b border-foreground/8 bg-foreground/[0.03] px-8 py-8 md:border-b-0 md:border-r md:py-10">
                <span className="font-mono text-xs text-foreground/25">{item.num}</span>
                <h3 className="font-sans text-2xl font-light text-foreground md:text-3xl">
                  {item.title}
                </h3>
                <button
                  onClick={() => scrollToSection?.(5)}
                  className="mt-4 w-fit font-mono text-xs text-foreground/30 underline underline-offset-4 transition-colors hover:text-foreground/60"
                >
                  Попробовать →
                </button>
              </div>

              {/* Правая — 4 УТП в 2×2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {item.utps.map((utp, j) => (
                  <div
                    key={j}
                    className={`px-7 py-6 ${j % 2 === 0 && j < 3 ? "border-r border-foreground/8" : ""} ${j < 2 ? "border-b border-foreground/8" : ""}`}
                  >
                    <p className="mb-1.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-foreground/25">
                      {utp.label}
                    </p>
                    <p className="font-mono text-xs leading-relaxed text-foreground/60 md:text-sm">
                      {utp.text}
                    </p>
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
