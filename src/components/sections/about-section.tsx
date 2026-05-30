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
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      ref={ref}
      className="flex min-h-screen w-full flex-col justify-center px-5 py-24 md:px-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* Заголовок */}
        <div
          className={`mb-14 transition-all duration-700 md:mb-18 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-1 font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Для кого
          </h2>
          <p className="font-mono text-xs text-foreground/40 md:text-sm">/ Кому нужен Флоустат</p>
        </div>

        {/* Аккордеон */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          {audiences.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={i} className="border-t border-foreground/10 last:border-b">
                {/* Шапка строки */}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full items-center gap-6 py-6 text-left transition-all duration-200 md:py-8 md:gap-10"
                >
                  {/* Номер */}
                  <span className={`w-8 flex-shrink-0 font-mono text-xs transition-colors duration-300 md:text-sm ${isOpen ? "text-foreground/50" : "text-foreground/20"}`}>
                    {item.num}
                  </span>

                  {/* Название */}
                  <span
                    className={`flex-1 font-sans font-light tracking-tight transition-all duration-300 ${
                      isOpen ? "text-foreground" : "text-foreground/50 group-hover:text-foreground/80"
                    }`}
                    style={{ fontSize: "clamp(1.5rem, 4vw, 3.5rem)" }}
                  >
                    {item.title}
                  </span>

                  {/* Лейбл — только десктоп */}
                  <span className={`hidden font-mono text-xs transition-all duration-300 md:block ${isOpen ? "text-foreground/40" : "text-foreground/20"}`}>
                    {item.label}
                  </span>

                  {/* Иконка +/– */}
                  <span
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 md:h-10 md:w-10 ${
                      isOpen
                        ? "border-foreground/30 bg-foreground text-background"
                        : "border-foreground/15 text-foreground/40 group-hover:border-foreground/30"
                    }`}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      {isOpen
                        ? <path d="M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        : <>
                            <path d="M6 2v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          </>
                      }
                    </svg>
                  </span>
                </button>

                {/* Раскрытый контент */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="grid gap-8 pb-10 md:grid-cols-[1fr_1.4fr] md:gap-16 md:pb-12">

                    {/* Описание */}
                    <p className="pl-14 font-sans text-lg font-light leading-relaxed text-foreground/60 md:pl-[4.5rem] md:text-xl lg:text-2xl">
                      {item.description}
                    </p>

                    {/* УТП — 2 колонки */}
                    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {item.utps.map((utp, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="mt-[3px] h-4 w-4 flex-shrink-0 rounded-full bg-foreground/10" />
                          <span className="font-mono text-xs leading-relaxed text-foreground/60 md:text-sm">
                            {utp}
                          </span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Кнопки */}
        <div
          className={`mt-14 flex flex-wrap gap-3 transition-all duration-700 md:mt-16 md:gap-4 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
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
