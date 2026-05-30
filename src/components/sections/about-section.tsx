import { useState } from "react"
import { useReveal } from "@/hooks/use-reveal"

const audiences = [
  {
    num: "01",
    title: "Маркетологи",
    tag: "Brand & Reputation",
    description: "Управляйте тем, что ИИ говорит о вашем бренде",
    utps: [
      { label: "Тональность", text: "Узнайте, как ChatGPT и Алиса описывают ваш бренд — позитивно, нейтрально или негативно" },
      { label: "Сравнение", text: "Видимость вашего бренда против конкурентов в каждой LLM-платформе" },
      { label: "Автоматика", text: "Еженедельные отчёты об изменениях без ручного мониторинга" },
      { label: "Риски", text: "Замечайте репутационные угрозы раньше, чем они стали проблемой" },
    ],
  },
  {
    num: "02",
    title: "SEO-специалисты",
    tag: "Search & Visibility",
    description: "Занимайте первые позиции в ИИ-выдаче",
    utps: [
      { label: "Источники", text: "Видите, какие страницы вашего сайта цитируют ChatGPT и Perplexity" },
      { label: "Конкуренты", text: "Находите источники, которые LLM ставит выше вас — и обходите их" },
      { label: "Динамика", text: "Отслеживайте рост видимости после каждой публикации нового контента" },
      { label: "Стратегия", text: "Стройте GEO-продвижение на реальных данных, а не на догадках" },
    ],
  },
  {
    num: "03",
    title: "Агентства",
    tag: "Agency & White-label",
    description: "Новая услуга с высокой маржой для ваших клиентов",
    utps: [
      { label: "Новый продукт", text: "Добавьте GEO-аудит в прайс — растущий рынок, пока мало конкурентов" },
      { label: "Мультикабинет", text: "Управляйте всеми клиентами из единого рабочего пространства" },
      { label: "White-label", text: "Выгружайте отчёты с логотипом вашего агентства" },
      { label: "Доказательства", text: "Показывайте клиенту рост видимости в цифрах после каждого спринта" },
    ],
  },
]

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.1)
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

        {/* Панели */}
        <div
          className={`flex flex-col gap-3 transition-all duration-700 md:flex-row md:gap-3 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          {audiences.map((item, i) => {
            const isActive = active === i
            return (
              <div
                key={i}
                onClick={() => setActive(i)}
                className={`group relative cursor-pointer overflow-hidden rounded-3xl border transition-all duration-500 ${
                  isActive
                    ? "border-foreground/20 bg-foreground flex-[3]"
                    : "border-foreground/10 bg-foreground/[0.02] flex-[1] hover:bg-foreground/[0.04]"
                }`}
                style={{ minHeight: "480px" }}
              >
                {/* Фоновый номер */}
                <div
                  className="pointer-events-none absolute -bottom-4 -right-2 select-none font-sans font-bold leading-none transition-all duration-500"
                  style={{
                    fontSize: "clamp(6rem, 14vw, 12rem)",
                    color: isActive ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
                  }}
                >
                  {item.num}
                </div>

                <div className="relative flex h-full flex-col justify-between p-7 md:p-8">

                  {/* Верх */}
                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <span className={`font-mono text-xs transition-colors duration-300 ${
                        isActive ? "text-white/40" : "text-foreground/25"
                      }`}>
                        {item.num}
                      </span>
                      <span className={`rounded-full px-2.5 py-1 font-mono text-[9px] transition-all duration-300 md:text-[10px] ${
                        isActive
                          ? "bg-white/10 text-white/50"
                          : "bg-foreground/5 text-foreground/25"
                      }`}>
                        {item.tag}
                      </span>
                    </div>

                    {/* Название */}
                    <h3
                      className={`font-sans font-light leading-none tracking-tight transition-all duration-500 ${
                        isActive ? "text-white" : "text-foreground/60"
                      }`}
                      style={{ fontSize: isActive ? "clamp(2rem, 4vw, 3.5rem)" : "clamp(1.4rem, 2.5vw, 2rem)" }}
                    >
                      {item.title}
                    </h3>

                    {/* Описание */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      isActive ? "max-h-20 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
                    }`}>
                      <p className="font-mono text-sm text-white/50 md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* УТП — только активная */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    isActive ? "max-h-[400px] opacity-100 mt-8" : "max-h-0 opacity-0 mt-0"
                  }`}>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {item.utps.map((utp, j) => (
                        <div
                          key={j}
                          className="rounded-2xl bg-white/6 p-4 backdrop-blur-sm"
                        >
                          <p className="mb-1.5 font-mono text-[10px] font-medium text-white/35 uppercase tracking-wider">
                            {utp.label}
                          </p>
                          <p className="font-mono text-xs leading-relaxed text-white/60 md:text-sm">
                            {utp.text}
                          </p>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={(e) => { e.stopPropagation(); scrollToSection?.(5) }}
                      className="mt-6 rounded-full bg-white px-5 py-2.5 font-sans text-sm font-medium text-foreground transition-all duration-200 hover:bg-white/90"
                    >
                      Запросить демо
                    </button>
                  </div>

                  {/* Стрелка — только неактивные */}
                  <div className={`mt-6 transition-all duration-300 ${
                    isActive ? "opacity-0" : "opacity-40 group-hover:opacity-70"
                  }`}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 10h10M10 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
