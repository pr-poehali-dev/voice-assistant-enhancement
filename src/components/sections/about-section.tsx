import { useState } from "react"
import { useReveal } from "@/hooks/use-reveal"

const audiences = [
  {
    number: "01",
    title: "Маркетологи",
    description: "Управляйте репутацией бренда в ответах ChatGPT, Алисы и других ИИ-систем.",
    tags: ["Бренд-мониторинг", "Репутация", "ИИ-видимость"],
    accent: "Бренд",
  },
  {
    number: "02",
    title: "SEO-специалисты",
    description: "Анализируйте источники, которые цитируют LLM, и опережайте конкурентов в ИИ-выдаче.",
    tags: ["Анализ источников", "Конкуренты", "Промпты"],
    accent: "Поиск",
  },
  {
    number: "03",
    title: "Digital-агентства",
    description: "Предлагайте GEO-продвижение как новую услугу. White-label отчёты, мультибрендовый доступ.",
    tags: ["White-label", "Мультибренд", "Отчёты"],
    accent: "Агентство",
  },
]

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.15)
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section
      ref={ref}
      className="flex min-h-screen w-full flex-col justify-center px-5 py-24 md:px-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* Заголовок */}
        <div
          className={`mb-10 transition-all duration-700 md:mb-14 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-1 font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Для кого
          </h2>
          <p className="font-mono text-xs text-foreground/40 md:text-sm">/ Кому нужен Флоустат</p>
        </div>

        {/* Строки */}
        <div className="mt-0">
          {audiences.map((item, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${80 + i * 120}ms` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Разделитель сверху */}
              <div className="h-px w-full bg-foreground/10" />

              <div className="group relative grid cursor-default grid-cols-[3rem_1fr] gap-4 py-8 transition-all duration-300 md:grid-cols-[5rem_1fr_auto] md:gap-8 md:py-10 lg:py-12">

                {/* Полоса-подсветка при hover */}
                <div
                  className={`absolute inset-0 -mx-5 rounded-2xl transition-all duration-500 md:-mx-8 ${
                    hovered === i ? "bg-foreground/[0.04]" : "bg-transparent"
                  }`}
                />

                {/* Номер */}
                <div className="relative flex items-start pt-1">
                  <span
                    className={`font-mono text-xs transition-all duration-300 md:text-sm ${
                      hovered === i ? "text-foreground/60" : "text-foreground/20"
                    }`}
                  >
                    {item.number}
                  </span>
                </div>

                {/* Центр: заголовок + описание */}
                <div className="relative min-w-0">
                  <h2
                    className={`font-sans font-light leading-none tracking-tight transition-all duration-500 ${
                      hovered === i ? "text-foreground" : "text-foreground/70"
                    }`}
                    style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
                  >
                    {item.title}
                  </h2>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      hovered === i ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="mt-3 max-w-xl font-mono text-xs leading-relaxed text-foreground/55 md:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Правая часть: теги — только десктоп */}
                <div className="relative hidden flex-col items-end justify-center gap-2 md:flex">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full border px-3 py-1 font-mono text-[10px] transition-all duration-300 md:text-xs ${
                        hovered === i
                          ? "border-foreground/25 text-foreground/60"
                          : "border-foreground/10 text-foreground/25"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Финальный разделитель */}
          <div
            className={`h-px w-full bg-foreground/10 transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "500ms" }}
          />
        </div>

        {/* Кнопки */}
        <div
          className={`mt-12 flex flex-wrap gap-3 transition-all duration-700 md:mt-16 md:gap-4 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "550ms" }}
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