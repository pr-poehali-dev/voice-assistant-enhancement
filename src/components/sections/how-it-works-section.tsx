import { useReveal } from "@/hooks/use-reveal"

const steps = [
  {
    number: "01",
    title: "Добавьте поисковые запросы",
    description:
      "Введите запросы вручную или сгенерируйте их автоматически с помощью встроенного ИИ Флоустата — он сам подберёт релевантные промпты для вашей ниши.",
    icon: "✦",
  },
  {
    number: "02",
    title: "Выберите регион и язык",
    description:
      "Настройте географию и язык продвижения. Флоустат отслеживает видимость в нужных регионах — Россия, СНГ, глобальный рынок.",
    icon: "◎",
  },
  {
    number: "03",
    title: "Запустите обход и анализируйте",
    description:
      "Запустите первый обход — система проверит ваши запросы во всех подключённых LLM и покажет детальный отчёт в дашборде.",
    icon: "▸",
  },
]

export function HowItWorksSection() {
  const { ref, isVisible } = useReveal(0.2)

  return (
    <section
      ref={ref}
      className="flex min-h-screen w-full flex-col justify-center px-5 py-24 md:px-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* Заголовок */}
        <div
          className={`mb-16 transition-all duration-700 md:mb-24 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-1 font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Как работает
          </h2>
          <p className="font-mono text-xs text-foreground/60 md:text-base">/ Три шага до первых данных</p>
        </div>

        {/* Шаги */}
        <div className="relative">
          {/* Вертикальная линия на десктопе */}
          <div
            className={`absolute left-[2.75rem] top-0 hidden h-full w-px bg-foreground/10 transition-all duration-1000 md:block ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <StepCard key={i} step={step} index={i} isVisible={isVisible} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

function StepCard({
  step,
  index,
  isVisible,
}: {
  step: { number: string; title: string; description: string; icon: string }
  index: number
  isVisible: boolean
}) {
  const delay = 150 + index * 180

  return (
    <div
      className={`group relative flex gap-6 pb-12 transition-all duration-700 last:pb-0 md:gap-12 md:pb-16 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Номер / иконка */}
      <div className="relative flex-shrink-0">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 bg-background transition-all duration-300 group-hover:border-foreground/40 group-hover:bg-foreground/5 md:h-[3.5rem] md:w-[3.5rem]">
          <span className="font-mono text-[10px] text-foreground/40 transition-colors group-hover:text-foreground/70 md:text-sm">
            {step.number}
          </span>
        </div>
      </div>

      {/* Контент */}
      <div className="min-w-0 pt-1 md:pt-2">
        <div className="mb-1 flex items-center gap-3 md:mb-3">
          <span className="font-mono text-base text-foreground/25 md:text-xl">{step.icon}</span>
          <h3 className="font-sans text-xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-1 md:text-3xl lg:text-4xl">
            {step.title}
          </h3>
        </div>
        <p className="max-w-xl font-mono text-xs leading-relaxed text-foreground/55 md:text-base">
          {step.description}
        </p>
      </div>
    </div>
  )
}
