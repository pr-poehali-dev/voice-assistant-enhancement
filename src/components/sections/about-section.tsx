import { useReveal } from "@/hooks/use-reveal"

const audiences = [
  {
    num: "01",
    title: "Маркетологи",
    tag: "Brand & Reputation",
    bg: "bg-slate-50",
    utps: [
      { icon: "◐", label: "Тональность", text: "Как ChatGPT описывает ваш бренд — позитивно или негативно" },
      { icon: "⊞", label: "Сравнение", text: "Видимость против конкурентов в каждой LLM" },
      { icon: "◷", label: "Автоматика", text: "Еженедельные отчёты без ручного мониторинга" },
      { icon: "△", label: "Риски", text: "Репутационные угрозы — раньше, чем стали проблемой" },
    ],
  },
  {
    num: "02",
    title: "SEO-специалисты",
    tag: "Search & Visibility",
    bg: "bg-zinc-900",
    dark: true,
    utps: [
      { icon: "⊕", label: "Источники", text: "Какие страницы цитируют ChatGPT и Perplexity" },
      { icon: "◈", label: "Конкуренты", text: "Источники выше вас — найди и обойди" },
      { icon: "↗", label: "Динамика", text: "Рост видимости после каждой публикации" },
      { icon: "◎", label: "Стратегия", text: "GEO-продвижение на реальных данных" },
    ],
  },
  {
    num: "03",
    title: "Агентства",
    tag: "Agency & White-label",
    bg: "bg-slate-50",
    utps: [
      { icon: "✦", label: "Новая услуга", text: "GEO-аудит — растущий рынок, мало конкурентов" },
      { icon: "⊟", label: "Мультикабинет", text: "Все клиенты из единого рабочего пространства" },
      { icon: "◻", label: "White-label", text: "Отчёты с логотипом вашего агентства" },
      { icon: "≡", label: "Доказательства", text: "Рост видимости клиента в цифрах" },
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
        <div className={`mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
          <h2 className="mb-1 font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Для кого
          </h2>
          <p className="font-mono text-xs text-foreground/40 md:text-sm">/ Кому нужен Флоустат</p>
        </div>

        {/* Три карточки */}
        <div className={`grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "150ms" }}>
          {audiences.map((item) => (
            <div
              key={item.num}
              className={`flex flex-col rounded-3xl p-7 md:p-8 lg:p-10 ${item.bg}`}
            >
              {/* Шапка */}
              <div className="mb-8">
                <div className="mb-4 flex items-center justify-between">
                  <span className={`font-mono text-xs ${item.dark ? "text-white/30" : "text-foreground/25"}`}>
                    {item.num}
                  </span>
                  <span className={`rounded-full px-2.5 py-1 font-mono text-[9px] ${
                    item.dark
                      ? "bg-white/10 text-white/40"
                      : "bg-black/5 text-foreground/35"
                  }`}>
                    {item.tag}
                  </span>
                </div>
                <h3 className={`font-sans text-3xl font-light leading-none md:text-4xl ${item.dark ? "text-white" : "text-foreground"}`}>
                  {item.title}
                </h3>
              </div>

              {/* Разделитель */}
              <div className={`mb-7 h-px ${item.dark ? "bg-white/10" : "bg-black/8"}`} />

              {/* УТП */}
              <div className="flex flex-col gap-5">
                {item.utps.map((utp, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <span className={`mt-0.5 flex-shrink-0 text-base ${item.dark ? "text-white/25" : "text-foreground/20"}`}>
                      {utp.icon}
                    </span>
                    <div>
                      <p className={`mb-0.5 font-mono text-[10px] font-medium uppercase tracking-widest ${item.dark ? "text-white/30" : "text-foreground/30"}`}>
                        {utp.label}
                      </p>
                      <p className={`font-mono text-xs leading-relaxed ${item.dark ? "text-white/55" : "text-foreground/55"}`}>
                        {utp.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Кнопка */}
              <div className="mt-8 pt-2">
                <button
                  onClick={() => scrollToSection?.(5)}
                  className={`w-full rounded-2xl py-3 font-sans text-sm font-medium transition-opacity duration-200 hover:opacity-80 ${
                    item.dark
                      ? "bg-white text-zinc-900"
                      : "bg-foreground text-background"
                  }`}
                >
                  Попробовать
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
