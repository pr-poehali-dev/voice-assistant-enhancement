import { useState } from "react"
import { useReveal } from "@/hooks/use-reveal"

const audiences = [
  {
    number: "01",
    title: "Маркетологи",
    description: "Управляйте репутацией бренда в ответах ChatGPT, Алисы и других ИИ-систем.",
    utps: [
      "Узнайте, как ИИ описывает ваш бренд — позитивно или нейтрально",
      "Сравните видимость с конкурентами в каждой LLM-платформе",
      "Получайте еженедельные отчёты об изменениях без ручного мониторинга",
      "Реагируйте на репутационные риски раньше, чем они стали проблемой",
    ],
  },
  {
    number: "02",
    title: "SEO-специалисты",
    description: "Анализируйте источники, которые цитируют LLM, и опережайте конкурентов в ИИ-выдаче.",
    utps: [
      "Видите, какие страницы вашего сайта цитируют ChatGPT и Perplexity",
      "Находите источники, которые LLM предпочитает вашим — и обходите их",
      "Отслеживайте рост видимости после публикации нового контента",
      "Стройте GEO-стратегию на реальных данных, а не на догадках",
    ],
  },
  {
    number: "03",
    title: "Digital-агентства",
    description: "Предлагайте GEO-продвижение как новую услугу. White-label отчёты, мультибрендовый доступ.",
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

        {/* Табы */}
        <div
          className={`mb-10 flex gap-2 transition-all duration-700 md:mb-12 md:gap-3 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          {audiences.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full px-4 py-2 font-sans text-sm font-medium transition-all duration-300 md:px-6 md:py-2.5 md:text-base ${
                active === i
                  ? "bg-foreground text-background"
                  : "border border-foreground/15 text-foreground/50 hover:border-foreground/30 hover:text-foreground/80"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Контент таба */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "250ms" }}
        >
          {audiences.map((item, i) => (
            <div
              key={i}
              className={`transition-all duration-500 ${
                active === i ? "block opacity-100" : "hidden opacity-0"
              }`}
            >
              <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:gap-16">

                {/* Левая — описание */}
                <div>
                  <div className="mb-6 font-mono text-xs text-foreground/30 md:text-sm">{item.number}</div>
                  <p className="mb-8 font-sans text-xl font-light leading-relaxed text-foreground/70 md:text-2xl lg:text-3xl">
                    {item.description}
                  </p>
                  <div className="h-px w-16 bg-foreground/20" />
                </div>

                {/* Правая — УТП список */}
                <ul className="space-y-4 md:space-y-5">
                  {item.utps.map((utp, j) => (
                    <li key={j} className="flex items-start gap-4">
                      <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-foreground/20 font-mono text-[10px] text-foreground/40">
                        {j + 1}
                      </span>
                      <span className="font-mono text-sm leading-relaxed text-foreground/70 md:text-base">
                        {utp}
                      </span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>

        {/* Кнопки */}
        <div
          className={`mt-14 flex flex-wrap gap-3 transition-all duration-700 md:mt-20 md:gap-4 ${
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
