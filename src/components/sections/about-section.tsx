import { useState } from "react"
import { useReveal } from "@/hooks/use-reveal"

const audiences = [
  {
    num: "01",
    title: "Маркетологи",
    tag: "Brand & Reputation",
    utps: [
      "Как ChatGPT описывает ваш бренд",
      "Видимость vs конкуренты в каждой LLM",
      "Еженедельные отчёты автоматически",
      "Репутационные риски — заранее",
    ],
  },
  {
    num: "02",
    title: "SEO-специалисты",
    tag: "Search & Visibility",
    utps: [
      "Какие страницы цитирует ChatGPT",
      "Источники выше вас — найди и обойди",
      "Рост видимости после публикаций",
      "GEO-стратегия на реальных данных",
    ],
  },
  {
    num: "03",
    title: "Агентства",
    tag: "Agency & White-label",
    utps: [
      "GEO-аудит — новая высокомаржинальная услуга",
      "Все клиенты из одного кабинета",
      "White-label отчёты с вашим брендом",
      "Цифры эффективности для клиентов",
    ],
  },
]

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.1)
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section
      ref={ref}
      className="flex min-h-screen w-full flex-col justify-center px-5 py-24 md:px-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* Верхняя строка: заголовок + тег */}
        <div
          className={`mb-16 flex items-end justify-between transition-all duration-700 md:mb-20 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
        >
          <div>
            <h2 className="mb-1 font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Для кого
            </h2>
            <p className="font-mono text-xs text-foreground/40 md:text-sm">/ Кому нужен Флоустат</p>
          </div>
          <span className="hidden font-mono text-xs text-foreground/25 md:block">
            {hovered !== null ? audiences[hovered].tag : "Наведите на строку"}
          </span>
        </div>

        {/* Строки */}
        <div className="relative">
          {audiences.map((item, i) => (
            <div
              key={i}
              className={`group relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Разделитель */}
              <div className="h-px bg-foreground/10" />

              <div className="relative grid grid-cols-[2rem_1fr] gap-4 py-5 md:grid-cols-[3.5rem_1fr_1fr] md:gap-8 md:py-7">

                {/* Номер */}
                <span className={`self-center font-mono text-xs transition-colors duration-300 md:text-sm ${
                  hovered === i ? "text-foreground/50" : "text-foreground/20"
                }`}>
                  {item.num}
                </span>

                {/* Название */}
                <h3
                  className={`self-center font-sans font-light leading-none tracking-tight transition-all duration-300 ${
                    hovered === i ? "text-foreground" : "text-foreground/40"
                  }`}
                  style={{ fontSize: "clamp(2rem, 5.5vw, 5rem)" }}
                >
                  {item.title}
                </h3>

                {/* УТП — появляются при hover, только десктоп */}
                <div className="hidden self-center md:block">
                  <div className={`grid grid-cols-2 gap-x-6 gap-y-1.5 transition-all duration-500 ${
                    hovered === i ? "opacity-100" : "opacity-0"
                  }`}>
                    {item.utps.map((utp, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <div className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-foreground/30" />
                        <span className="font-mono text-[11px] leading-relaxed text-foreground/50">
                          {utp}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* УТП мобиль — всегда видны */}
                <div className={`col-span-2 md:hidden transition-all duration-400 overflow-hidden ${
                  hovered === i ? "max-h-40 opacity-100 pb-2" : "max-h-0 opacity-0"
                }`}>
                  <div className="grid grid-cols-1 gap-1.5 pl-10">
                    {item.utps.map((utp, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <div className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-foreground/30" />
                        <span className="font-mono text-[11px] leading-relaxed text-foreground/50">{utp}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}

          {/* Последний разделитель */}
          <div className="h-px bg-foreground/10" />
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
