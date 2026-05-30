import { useState } from "react"
import { useReveal } from "@/hooks/use-reveal"

const audiences = [
  {
    title: "Маркетологи",
    label: "Brand & Reputation",
    description: "Управляйте репутацией бренда в ответах ChatGPT, Алисы и других ИИ-систем.",
    utps: [
      "Узнайте, как ИИ описывает ваш бренд — позитивно или нейтрально",
      "Сравните видимость с конкурентами в каждой LLM-платформе",
      "Получайте еженедельные отчёты без ручного мониторинга",
      "Реагируйте на репутационные риски раньше, чем они стали проблемой",
    ],
  },
  {
    title: "SEO-специалисты",
    label: "Search & Visibility",
    description: "Анализируйте источники, которые цитируют LLM, и опережайте конкурентов в ИИ-выдаче.",
    utps: [
      "Видите, какие страницы вашего сайта цитируют ChatGPT и Perplexity",
      "Находите источники, которые LLM предпочитает вашим — и обходите их",
      "Отслеживайте рост видимости после публикации нового контента",
      "Стройте GEO-стратегию на реальных данных, а не на догадках",
    ],
  },
  {
    title: "Digital-агентства",
    label: "Agency & White-label",
    description: "Предлагайте GEO-продвижение как новую услугу с высокой маржой.",
    utps: [
      "Добавьте GEO-аудит в прайс — новая услуга с высокой маржой",
      "Управляйте несколькими клиентами из одного кабинета",
      "Выгружайте white-label отчёты с логотипом вашего агентства",
      "Докажите клиенту эффективность работы в цифрах",
    ],
  },
]

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.15)
  const [active, setActive] = useState(0)

  const current = audiences[active]

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
          <p className="font-mono text-xs text-foreground/40 md:text-sm">/ Кому нужен Флоустат</p>
        </div>

        {/* Основной лейаут */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          <div className="flex flex-col gap-12 md:flex-row md:gap-0">

            {/* Левая колонка — вертикальный список аудиторий */}
            <div className="flex flex-row gap-3 md:w-64 md:flex-col md:gap-0 md:border-r md:border-foreground/10 md:pr-12 lg:w-80">
              {audiences.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`group relative flex flex-col items-start text-left transition-all duration-300 ${
                    active === i ? "" : "opacity-40 hover:opacity-70"
                  } md:border-b md:border-foreground/10 md:py-6 md:first:pt-0`}
                >
                  {/* Активная полоска слева — только десктоп */}
                  <div
                    className={`absolute -right-12 top-0 hidden h-full w-px transition-all duration-300 md:block ${
                      active === i ? "bg-foreground" : "bg-transparent"
                    }`}
                  />

                  <span className="mb-0.5 font-mono text-[10px] text-foreground/40 md:text-xs">
                    {item.label}
                  </span>
                  <span
                    className={`font-sans font-light transition-all duration-300 ${
                      active === i
                        ? "text-foreground"
                        : "text-foreground/60"
                    } text-base md:text-xl lg:text-2xl`}
                  >
                    {item.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Правая колонка — контент */}
            <div className="flex-1 md:pl-16 lg:pl-24">
              <div key={active} className="animate-in fade-in slide-in-from-bottom-2 duration-400">

                {/* Большой заголовок аудитории */}
                <h3 className="mb-4 font-sans text-3xl font-light text-foreground md:text-5xl lg:text-6xl">
                  {current.title}
                </h3>

                {/* Описание */}
                <p className="mb-10 max-w-lg font-mono text-sm leading-relaxed text-foreground/55 md:text-base">
                  {current.description}
                </p>

                {/* УТП */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {current.utps.map((utp, j) => (
                    <div
                      key={j}
                      className="rounded-2xl border border-foreground/8 bg-foreground/[0.02] p-5 transition-colors duration-200 hover:border-foreground/15 hover:bg-foreground/[0.04]"
                    >
                      <div className="mb-2 font-mono text-[10px] text-foreground/25">
                        0{j + 1}
                      </div>
                      <p className="font-mono text-xs leading-relaxed text-foreground/65 md:text-sm">
                        {utp}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Кнопки */}
        <div
          className={`mt-16 flex flex-wrap gap-3 transition-all duration-700 md:mt-20 md:gap-4 ${
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
