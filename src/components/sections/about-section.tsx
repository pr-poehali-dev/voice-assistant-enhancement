import { useReveal } from "@/hooks/use-reveal"

const audiences = [
  {
    num: "01",
    title: "Маркетологи",
    label: "Brand & Reputation",
    utps: [
      "Как ИИ описывает ваш бренд",
      "Видимость vs конкуренты по каждой LLM",
      "Еженедельные отчёты автоматически",
      "Репутационные риски заранее",
    ],
  },
  {
    num: "02",
    title: "SEO-специалисты",
    label: "Search & Visibility",
    utps: [
      "Какие страницы цитирует ChatGPT",
      "Источники, которые LLM ставит выше вас",
      "Рост видимости после новых публикаций",
      "GEO-стратегия на реальных данных",
    ],
  },
  {
    num: "03",
    title: "Digital-агентства",
    label: "Agency & White-label",
    utps: [
      "GEO-аудит — новая высокомаржинальная услуга",
      "Несколько клиентов из одного кабинета",
      "White-label отчёты с вашим логотипом",
      "Доказательства эффективности в цифрах",
    ],
  },
]

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.15)

  return (
    <section
      ref={ref}
      className="flex min-h-screen w-full flex-col justify-center px-5 py-24 md:px-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* Заголовок */}
        <div
          className={`mb-16 transition-all duration-700 md:mb-20 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-1 font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Для кого
          </h2>
          <p className="font-mono text-xs text-foreground/40 md:text-sm">/ Кому нужен Флоустат</p>
        </div>

        {/* Три колонки */}
        <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
          {audiences.map((item, i) => (
            <div
              key={i}
              className={`group border-t border-foreground/10 py-10 transition-all duration-700 md:border-l md:border-t-0 md:px-10 md:py-0 md:first:border-l-0 lg:px-14 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Номер + лейбл */}
              <div className="mb-6 flex items-center justify-between md:mb-8">
                <span className="font-mono text-xs text-foreground/25 md:text-sm">{item.num}</span>
                <span className="font-mono text-[10px] text-foreground/25 md:text-xs">{item.label}</span>
              </div>

              {/* Название */}
              <h3
                className="mb-8 font-sans font-light leading-none tracking-tight text-foreground transition-all duration-300 md:mb-10"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
              >
                {item.title}
              </h3>

              {/* Разделитель */}
              <div className="mb-8 h-px w-full bg-foreground/10 md:mb-10" />

              {/* УТП */}
              <ul className="space-y-5">
                {item.utps.map((utp, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground/30" />
                    <span className="font-mono text-xs leading-relaxed text-foreground/55 md:text-sm">
                      {utp}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Нижняя черта */}
        <div
          className={`mt-0 border-b border-foreground/10 transition-all duration-700 md:mt-0 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "450ms" }}
        />

        {/* Кнопки */}
        <div
          className={`mt-14 flex flex-wrap gap-3 transition-all duration-700 md:mt-16 md:gap-4 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <button
            onClick={() => scrollToSection?.(5)}
            className="rounded-full bg-foreground px-6 py-3 font-sans text-sm font-medium text-background transition-all duration-200 hover:opacity-90 md:px-8 md:py-4 md:text-base"
          >
            Запросить демо
          </button>
          <button
            onClick={() => scrollToSection?.(2)}
            className="rounded-full border border-foreground/20 px-6 py-3 font-sans text-sm font-medium text-foreground/80 transition-all duration-200 hover:border-foreground/40 hover:text-foreground md:px-8 md:py-4 md:text-base"
          >
            Возможности
          </button>
        </div>

      </div>
    </section>
  )
}
