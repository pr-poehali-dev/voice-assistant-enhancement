import { useReveal } from "@/hooks/use-reveal"

const audiences = [
  {
    num: "01",
    title: "Маркетологи",
    tag: "Brand & Reputation",
    utps: [
      { label: "Тональность", text: "Как ChatGPT и Алиса описывают ваш бренд — позитивно, нейтрально или негативно" },
      { label: "Сравнение", text: "Видимость против конкурентов в каждой LLM-платформе" },
      { label: "Автоматика", text: "Еженедельные отчёты об изменениях без ручного мониторинга" },
      { label: "Риски", text: "Репутационные угрозы — раньше, чем они стали проблемой" },
    ],
  },
  {
    num: "02",
    title: "SEO-специалисты",
    tag: "Search & Visibility",
    utps: [
      { label: "Источники", text: "Какие страницы вашего сайта цитируют ChatGPT и Perplexity" },
      { label: "Конкуренты", text: "Источники, которые LLM ставит выше вас — найди и обойди" },
      { label: "Динамика", text: "Рост видимости после каждой публикации нового контента" },
      { label: "Стратегия", text: "GEO-продвижение на реальных данных, а не на догадках" },
    ],
  },
  {
    num: "03",
    title: "Агентства",
    tag: "Agency & White-label",
    utps: [
      { label: "Новый продукт", text: "GEO-аудит в прайс — растущий рынок, пока мало конкурентов" },
      { label: "Мультикабинет", text: "Все клиенты из единого рабочего пространства" },
      { label: "White-label", text: "Отчёты с логотипом вашего агентства" },
      { label: "Доказательства", text: "Рост видимости клиента в цифрах после каждого спринта" },
    ],
  },
]

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.1)

  return (
    <section
      ref={ref}
      className="flex min-h-screen w-full flex-col justify-center px-5 py-24 md:px-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* Заголовок */}
        <div className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
          <h2 className="mb-1 font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Для кого
          </h2>
          <p className="font-mono text-xs text-foreground/40 md:text-sm">/ Кому нужен Флоустат</p>
        </div>

        {/* Сетка: три строки */}
        <div className={`space-y-0 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "150ms" }}>
          {audiences.map((item, i) => (
            <div key={i} className="border-t border-foreground/10 py-10 md:py-12">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-[14rem_1fr] md:gap-16 lg:grid-cols-[18rem_1fr]">

                {/* Левая: заголовок ЦА */}
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <span className="font-mono text-xs text-foreground/25">{item.num}</span>
                      <span className="rounded-full border border-foreground/10 px-2.5 py-0.5 font-mono text-[9px] text-foreground/30">{item.tag}</span>
                    </div>
                    <h3 className="font-sans text-3xl font-light text-foreground md:text-4xl lg:text-5xl">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Правая: 4 УТП в сетке 2×2 */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {item.utps.map((utp, j) => (
                    <div key={j} className="border-l-2 border-foreground/10 pl-4">
                      <p className="mb-1 font-mono text-[10px] font-medium uppercase tracking-widest text-foreground/30">
                        {utp.label}
                      </p>
                      <p className="font-mono text-xs leading-relaxed text-foreground/60 md:text-sm">
                        {utp.text}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
          <div className="border-t border-foreground/10" />
        </div>

        {/* Кнопки */}
        <div
          className={`mt-12 flex flex-wrap gap-3 transition-all duration-700 md:mt-14 md:gap-4 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "300ms" }}
        >
          <button
            onClick={() => scrollToSection?.(5)}
            className="rounded-full bg-foreground px-6 py-3 font-sans text-sm font-medium text-background transition-opacity duration-200 hover:opacity-80 md:px-8 md:py-4 md:text-base"
          >
            Запросить демо
          </button>
          <button
            onClick={() => scrollToSection?.(2)}
            className="rounded-full border border-foreground/20 px-6 py-3 font-sans text-sm font-medium text-foreground/70 transition-all duration-200 hover:border-foreground/40 hover:text-foreground md:px-8 md:py-4 md:text-base"
          >
            Возможности
          </button>
        </div>

      </div>
    </section>
  )
}
