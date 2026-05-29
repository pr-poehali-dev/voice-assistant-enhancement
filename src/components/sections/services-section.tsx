import { useReveal } from "@/hooks/use-reveal"

export function FeaturesSection() {
  const { ref, isVisible } = useReveal(0.3)

  const features = [
    {
      title: "AI Visibility Tracking",
      description: "Автоматический мониторинг упоминаний бренда в ChatGPT, Perplexity, Claude, Gemini и других LLM. Реальные данные, обновляемые ежедневно.",
      direction: "top",
    },
    {
      title: "Конкурентная аналитика",
      description: "Сравнивайте свою видимость с конкурентами. Узнайте, кто чаще упоминается в ИИ-ответах по вашим ключевым тематикам.",
      direction: "right",
    },
    {
      title: "Исторические тренды",
      description: "Дашборды с динамикой видимости, графиками упоминаемости и отчётами по периодам. Отслеживайте рост или падение в LLM.",
      direction: "left",
    },
    {
      title: "Отчёты и алерты",
      description: "Экспортируйте данные в PDF/CSV, настраивайте уведомления об изменениях видимости и получайте еженедельные дайджесты.",
      direction: "bottom",
    },
  ]

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Возможности
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Что умеет Флоустат</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-x-16 md:gap-y-12 lg:gap-x-24">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  feature,
  index,
  isVisible,
}: {
  feature: { title: string; description: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (feature.direction) {
        case "left":
          return "-translate-x-16 opacity-0"
        case "right":
          return "translate-x-16 opacity-0"
        case "top":
          return "-translate-y-16 opacity-0"
        case "bottom":
          return "translate-y-16 opacity-0"
        default:
          return "translate-y-12 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group transition-all duration-700 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
        <span className="font-mono text-xs text-foreground/60">0{index + 1}</span>
      </div>
      <h3 className="mb-2 font-sans text-2xl font-light text-foreground md:text-3xl">{feature.title}</h3>
      <p className="max-w-sm text-sm leading-relaxed text-foreground/80 md:text-base">{feature.description}</p>
    </div>
  )
}
