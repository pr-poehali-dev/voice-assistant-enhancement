import { useReveal } from "@/hooks/use-reveal"

const audiences = [
  {
    emoji: "📈",
    title: "Маркетологи",
    description: "Отслеживайте, как ИИ-системы представляют ваш бренд, и управляйте репутацией в генеративном поиске.",
    tags: ["Бренд-мониторинг", "Репутация", "ИИ-видимость"],
    direction: "left",
  },
  {
    emoji: "🔍",
    title: "SEO-специалисты",
    description: "Анализируйте источники, которые цитируют LLM, находите точки роста и опережайте конкурентов в ИИ-выдаче.",
    tags: ["Анализ источников", "Конкуренты", "Промпты"],
    direction: "up",
  },
  {
    emoji: "🏢",
    title: "Digital-агентства",
    description: "Предлагайте клиентам новую услугу — GEO-продвижение. Белые отчёты, мультибрендовый доступ.",
    tags: ["White-label", "Несколько брендов", "Отчёты"],
    direction: "right",
  },
]

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.2)

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
          <p className="font-mono text-xs text-foreground/60 md:text-base">/ Кому нужен Флоустат</p>
        </div>

        {/* Карточки */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {audiences.map((item, i) => {
            const getReveal = () => {
              if (!isVisible) {
                if (item.direction === "left") return "-translate-x-12 opacity-0"
                if (item.direction === "right") return "translate-x-12 opacity-0"
                return "translate-y-12 opacity-0"
              }
              return "translate-x-0 translate-y-0 opacity-100"
            }

            return (
              <div
                key={i}
                className={`group flex flex-col rounded-3xl border border-foreground/10 bg-foreground/[0.03] p-8 transition-all duration-700 hover:border-foreground/20 hover:bg-foreground/[0.06] md:p-10 ${getReveal()}`}
                style={{ transitionDelay: `${150 + i * 130}ms` }}
              >
                {/* Эмодзи */}
                <div className="mb-6 text-4xl md:text-5xl">{item.emoji}</div>

                {/* Заголовок */}
                <h3 className="mb-3 font-sans text-2xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-0.5 md:text-3xl">
                  {item.title}
                </h3>

                {/* Описание */}
                <p className="mb-6 font-mono text-xs leading-relaxed text-foreground/55 md:text-sm">
                  {item.description}
                </p>

                {/* Теги */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-foreground/15 px-3 py-1 font-mono text-[10px] text-foreground/50 md:text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Кнопки */}
        <div
          className={`mt-12 flex flex-wrap gap-3 transition-all duration-700 md:mt-16 md:gap-4 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
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
