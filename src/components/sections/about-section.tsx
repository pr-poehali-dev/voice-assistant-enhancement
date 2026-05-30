import { useState } from "react"
import { useReveal } from "@/hooks/use-reveal"

const audiences = [
  {
    num: "01",
    title: "Маркетологи",
    label: "Brand & Reputation",
    description: "Управляйте репутацией бренда в ответах ChatGPT, Алисы и других ИИ-систем.",
    utps: [
      "Как ИИ описывает ваш бренд — позитивно или нейтрально",
      "Сравнение видимости с конкурентами по каждой LLM",
      "Еженедельные отчёты без ручного мониторинга",
      "Репутационные риски — до того, как стали проблемой",
    ],
  },
  {
    num: "02",
    title: "SEO-специалисты",
    label: "Search & Visibility",
    description: "Анализируйте источники, которые цитируют LLM, и опережайте конкурентов в ИИ-выдаче.",
    utps: [
      "Какие страницы сайта цитируют ChatGPT и Perplexity",
      "Источники, которые LLM предпочитает вашим",
      "Рост видимости после публикации нового контента",
      "GEO-стратегия на реальных данных, а не догадках",
    ],
  },
  {
    num: "03",
    title: "Digital-агентства",
    label: "Agency & White-label",
    description: "Предлагайте GEO-продвижение как новую высокомаржинальную услугу.",
    utps: [
      "GEO-аудит в прайс — новая услуга с высокой маржой",
      "Несколько клиентов из одного кабинета",
      "White-label отчёты с логотипом агентства",
      "Эффективность работы в цифрах для клиента",
    ],
  },
]

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.15)
  const [active, setActive] = useState(0)
  const item = audiences[active]

  return (
    <section
      ref={ref}
      className="flex min-h-screen w-full flex-col justify-center px-5 py-24 md:px-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* Шапка: заголовок + переключатели */}
        <div
          className={`mb-12 flex flex-col gap-6 transition-all duration-700 md:mb-16 md:flex-row md:items-end md:justify-between ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
          }`}
        >
          <div>
            <h2 className="mb-1 font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Для кого
            </h2>
            <p className="font-mono text-xs text-foreground/40 md:text-sm">/ Кому нужен Флоустат</p>
          </div>

          {/* Стрелки */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActive((active - 1 + audiences.length) % audiences.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 text-foreground/50 transition-all duration-200 hover:border-foreground/50 hover:text-foreground md:h-12 md:w-12"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <span className="font-mono text-sm text-foreground/40">
              {active + 1} / {audiences.length}
            </span>
            <button
              onClick={() => setActive((active + 1) % audiences.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 text-foreground/50 transition-all duration-200 hover:border-foreground/50 hover:text-foreground md:h-12 md:w-12"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Большая карточка */}
        <div
          key={active}
          className={`relative overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/[0.02] transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          {/* Фоновый номер */}
          <div
            className="pointer-events-none absolute -bottom-8 -right-4 select-none font-sans font-bold leading-none text-foreground/[0.04] md:-bottom-14 md:-right-8"
            style={{ fontSize: "clamp(10rem, 30vw, 24rem)" }}
          >
            {item.num}
          </div>

          <div className="relative grid gap-10 p-8 md:grid-cols-2 md:gap-0 md:p-0">

            {/* Левая панель */}
            <div className="flex flex-col justify-between border-foreground/10 p-0 md:border-r md:p-12 lg:p-16">
              <div>
                <p className="mb-4 font-mono text-xs text-foreground/35 md:text-sm">{item.label}</p>
                <h3 className="mb-6 font-sans text-3xl font-light text-foreground md:text-5xl lg:text-6xl">
                  {item.title}
                </h3>
                <p className="font-mono text-sm leading-relaxed text-foreground/55 md:text-base">
                  {item.description}
                </p>
              </div>

              {/* Точки-индикаторы */}
              <div className="mt-10 flex gap-2 md:mt-0">
                {audiences.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      active === i ? "w-8 bg-foreground" : "w-1.5 bg-foreground/20 hover:bg-foreground/40"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Правая панель — УТП */}
            <div className="flex flex-col justify-center gap-3 p-0 md:p-12 lg:p-16">
              {item.utps.map((utp, j) => (
                <div
                  key={j}
                  className="flex items-start gap-4 rounded-2xl border border-foreground/8 bg-foreground/[0.03] p-4 md:p-5"
                >
                  <span className="mt-0.5 font-mono text-[10px] text-foreground/25 md:text-xs">
                    {String(j + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-xs leading-relaxed text-foreground/65 md:text-sm">
                    {utp}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Кнопки */}
        <div
          className={`mt-10 flex flex-wrap gap-3 transition-all duration-700 md:mt-12 md:gap-4 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "350ms" }}
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
