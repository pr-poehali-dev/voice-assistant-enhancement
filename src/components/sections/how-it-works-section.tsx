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
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 md:gap-8">
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
      className={`group flex h-full flex-col transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Карточка — h-full растягивает до высоты строки grid */}
      <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/[0.03] p-8 transition-all duration-500 hover:border-foreground/20 hover:bg-foreground/[0.06] md:p-10">

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

        {/* Описание — mt-auto прижимает к низу при разной длине */}
        <p className="mt-auto pt-3 font-mono text-xs leading-relaxed text-foreground/55 md:text-sm">
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
      <div className="absolute inset-0 rounded-full bg-white/8 backdrop-blur-sm" />
      <div className="absolute inset-2 rounded-full bg-white/5" />
      {/* Звёздочка в стиле Gemini — 4 вытянутых луча + малая звёздочка */}
      <svg viewBox="0 0 96 96" className="relative h-20 w-20 md:h-24 md:w-24" fill="none">
        {/* Основная 4-лучевая звезда (характерная форма Gemini/ИИ) */}
        <path
          d="M48 6 C48 6 51 30 56 40 C62 51 90 48 90 48 C90 48 62 51 56 56 C51 62 48 90 48 90 C48 90 45 62 40 56 C34 51 6 48 6 48 C6 48 34 45 40 40 C45 34 48 6 48 6 Z"
          fill="white"
          fillOpacity="0.92"
        />
        {/* Маленькая звёздочка справа сверху */}
        <path
          d="M76 16 C76 16 77.2 22.8 79 24 C80.8 25.2 88 24 88 24 C88 24 80.8 24.8 79 26 C77.2 27.2 76 34 76 34 C76 34 74.8 27.2 73 26 C71.2 24.8 64 24 64 24 C64 24 71.2 23.2 73 22 C74.8 20.8 76 16 76 16 Z"
          fill="white"
          fillOpacity="0.55"
        />
      </svg>
    </div>
  )
}

function PlanetSticker() {
  return (
    <div className="relative flex h-36 w-36 items-center justify-center md:h-44 md:w-44">
      <div className="absolute inset-0 rounded-full bg-white/8 backdrop-blur-sm" />
      <div className="absolute inset-2 rounded-full bg-white/5" />
      {/* Земля с континентами */}
      <svg viewBox="0 0 96 96" className="relative h-20 w-20 md:h-24 md:w-24" fill="none">
        {/* Ocean / base circle */}
        <circle cx="48" cy="48" r="38" fill="white" fillOpacity="0.15" />
        <circle cx="48" cy="48" r="38" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" />
        {/* Континенты — упрощённые силуэты */}
        {/* Евразия */}
        <path
          d="M34 22 L42 19 L52 21 L60 24 L65 30 L68 36 L64 40 L58 38 L52 42 L46 40 L40 43 L34 40 L30 34 L28 28 Z"
          fill="white"
          fillOpacity="0.8"
        />
        {/* Африка */}
        <path
          d="M42 46 L50 44 L56 48 L58 56 L55 64 L50 70 L44 68 L40 60 L38 52 Z"
          fill="white"
          fillOpacity="0.75"
        />
        {/* Северная Америка */}
        <path
          d="M14 26 L22 22 L28 26 L26 34 L20 38 L14 36 L10 30 Z"
          fill="white"
          fillOpacity="0.7"
        />
        {/* Южная Америка */}
        <path
          d="M20 46 L26 44 L30 50 L28 60 L22 66 L18 60 L16 52 Z"
          fill="white"
          fillOpacity="0.65"
        />
        {/* Австралия */}
        <path
          d="M66 58 L74 56 L78 62 L74 68 L66 68 L62 63 Z"
          fill="white"
          fillOpacity="0.6"
        />
        {/* Тень-полумесяц справа */}
        <path
          d="M72 25 A38 38 0 0 1 72 71 A32 32 0 0 0 72 25 Z"
          fill="black"
          fillOpacity="0.12"
        />
        {/* Орбитальное кольцо */}
        <ellipse cx="48" cy="48" rx="46" ry="16" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="4 3" />
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