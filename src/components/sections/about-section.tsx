import { useReveal } from "@/hooks/use-reveal"

const audiences = [
  {
    number: "01",
    title: "Маркетологи",
    description: "Управляйте репутацией бренда в ответах ChatGPT, Алисы и других ИИ-систем.",
  },
  {
    number: "02",
    title: "SEO-специалисты",
    description: "Анализируйте источники, которые цитируют LLM, и опережайте конкурентов в ИИ-выдаче.",
  },
  {
    number: "03",
    title: "Digital-агентства",
    description: "Предлагайте GEO-продвижение как новую услугу. White-label отчёты, мультибрендовый доступ.",
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
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-1 font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Для кого
          </h2>
          <p className="font-mono text-xs text-foreground/40 md:text-sm">/ Кому нужен Флоустат</p>
        </div>

        {/* Строки */}
        <div>
          {audiences.map((item, i) => (
            <div key={i}>
              <div className="h-px w-full bg-foreground/10" />
              <div
                className={`grid grid-cols-[2.5rem_1fr] gap-6 py-8 transition-all duration-700 md:grid-cols-[4rem_1fr_1.5fr] md:gap-12 md:py-10 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${100 + i * 120}ms` }}
              >
                {/* Номер */}
                <span className="pt-1 font-mono text-xs text-foreground/30 md:text-sm">
                  {item.number}
                </span>

                {/* Название */}
                <h3 className="font-sans text-2xl font-light text-foreground md:text-4xl lg:text-5xl">
                  {item.title}
                </h3>

                {/* Описание — скрыто на мобиле, справа на десктопе */}
                <p className="hidden font-mono text-sm leading-relaxed text-foreground/50 md:block md:pt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
          <div className="h-px w-full bg-foreground/10" />
        </div>

        {/* Кнопки */}
        <div
          className={`mt-12 flex flex-wrap gap-3 transition-all duration-700 md:mt-16 md:gap-4 ${
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
