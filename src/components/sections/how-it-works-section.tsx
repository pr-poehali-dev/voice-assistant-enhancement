import React from "react"
import { useReveal } from "@/hooks/use-reveal"

const steps = [
  {
    number: "01",
    title: "Добавьте поисковые запросы",
    description:
      "Введите запросы вручную или сгенерируйте их автоматически с помощью встроенного ИИ Флоустата — он сам подберёт релевантные промпты для вашей ниши.",
    sticker: <SparkleSticker />,
  },
  {
    number: "02",
    title: "Выберите регион и язык",
    description:
      "Настройте географию и язык продвижения. Флоустат отслеживает видимость в нужных регионах — Россия, СНГ, глобальный рынок.",
    sticker: <PlanetSticker />,
  },
  {
    number: "03",
    title: "Запустите обход и анализируйте",
    description:
      "Запустите первый обход — система проверит запросы во всех LLM и покажет детальный отчёт в дашборде.",
    sticker: <PlaySticker />,
  },
]

export function HowItWorksSection() {
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
            Как работает
          </h2>
          <p className="font-mono text-xs text-foreground/60 md:text-base">/ Три шага до первых данных</p>
        </div>

        {/* Три колонки */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} isVisible={isVisible} />
          ))}
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
  step: { number: string; title: string; description: string; sticker: React.ReactNode }
  index: number
  isVisible: boolean
}) {
  const delay = 100 + index * 150

  return (
    <div
      className={`group flex flex-col transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Карточка */}
      <div className="relative flex flex-col overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/[0.03] p-8 transition-all duration-500 hover:border-foreground/20 hover:bg-foreground/[0.06] md:p-10">

        {/* Стикер — большой, центрированный */}
        <div className="mb-8 flex items-center justify-center">
          {step.sticker}
        </div>

        {/* Номер */}
        <span className="mb-4 font-mono text-xs text-foreground/30 md:text-sm">{step.number}</span>

        {/* Заголовок */}
        <h3 className="mb-3 font-sans text-xl font-light leading-tight text-foreground transition-transform duration-300 group-hover:translate-x-0.5 md:text-2xl lg:text-3xl">
          {step.title}
        </h3>

        {/* Описание */}
        <p className="font-mono text-xs leading-relaxed text-foreground/55 md:text-sm">
          {step.description}
        </p>
      </div>
    </div>
  )
}

/* ── Стикеры ── */

function SparkleSticker() {
  return (
    <div className="relative flex h-36 w-36 items-center justify-center md:h-44 md:w-44">
      {/* Фон — полупрозрачный круг */}
      <div className="absolute inset-0 rounded-full bg-white/8 backdrop-blur-sm" />
      <div className="absolute inset-2 rounded-full bg-white/5" />
      {/* Звёздочка ИИ */}
      <svg viewBox="0 0 80 80" className="relative h-20 w-20 md:h-24 md:w-24" fill="none">
        {/* Большая звезда */}
        <path
          d="M40 4 L43.5 33.5 L73 40 L43.5 46.5 L40 76 L36.5 46.5 L7 40 L36.5 33.5 Z"
          fill="white"
          fillOpacity="0.9"
        />
        {/* Маленькая звезда сверху справа */}
        <path
          d="M64 10 L65.4 17.6 L73 19 L65.4 20.4 L64 28 L62.6 20.4 L55 19 L62.6 17.6 Z"
          fill="white"
          fillOpacity="0.5"
        />
        {/* Маленькая звезда снизу слева */}
        <path
          d="M18 54 L19 59 L24 60 L19 61 L18 66 L17 61 L12 60 L17 59 Z"
          fill="white"
          fillOpacity="0.4"
        />
      </svg>
    </div>
  )
}

function PlanetSticker() {
  return (
    <div className="relative flex h-36 w-36 items-center justify-center md:h-44 md:w-44">
      {/* Фон */}
      <div className="absolute inset-0 rounded-full bg-white/8 backdrop-blur-sm" />
      <div className="absolute inset-2 rounded-full bg-white/5" />
      {/* Планета */}
      <svg viewBox="0 0 80 80" className="relative h-20 w-20 md:h-24 md:w-24" fill="none">
        {/* Орбита — эллипс */}
        <ellipse cx="40" cy="40" rx="36" ry="14" stroke="white" strokeOpacity="0.35" strokeWidth="2" />
        {/* Планета */}
        <circle cx="40" cy="40" r="18" fill="white" fillOpacity="0.85" />
        {/* Тень на планете */}
        <circle cx="44" cy="38" r="18" fill="black" fillOpacity="0.18" />
        {/* Маленький спутник */}
        <circle cx="68" cy="35" r="4" fill="white" fillOpacity="0.5" />
      </svg>
    </div>
  )
}

function PlaySticker() {
  return (
    <div className="relative flex h-36 w-36 items-center justify-center md:h-44 md:w-44">
      {/* Фон */}
      <div className="absolute inset-0 rounded-full bg-white/8 backdrop-blur-sm" />
      <div className="absolute inset-2 rounded-full bg-white/5" />
      {/* Внешнее кольцо кнопки */}
      <div className="absolute inset-6 rounded-full border-2 border-white/20" />
      {/* Кнопка плей */}
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-transform duration-300 group-hover:scale-105 md:h-20 md:w-20">
        <svg viewBox="0 0 40 40" className="h-8 w-8 md:h-10 md:w-10" fill="none">
          <path
            d="M14 10 L32 20 L14 30 Z"
            fill="white"
            fillOpacity="0.95"
          />
        </svg>
      </div>
    </div>
  )
}