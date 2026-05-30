import { useReveal } from "@/hooks/use-reveal"

const audiences = [
  {
    initials: "МА",
    name: "Мария А.",
    role: "Бренд-менеджер",
    company: "FMCG · Ритейл",
    quote: "Хочу знать, что ChatGPT говорит о нашем бренде конкурентам",
    utps: [
      { done: true,  text: "Тональность упоминаний бренда в 12 LLM" },
      { done: true,  text: "Сравнение видимости с конкурентами" },
      { done: true,  text: "Еженедельный отчёт на почту автоматически" },
      { done: false, text: "Вручную проверять каждую нейросеть" },
    ],
  },
  {
    initials: "ДК",
    name: "Дмитрий К.",
    role: "SEO-специалист",
    company: "E-commerce · SaaS",
    quote: "Хочу понять, почему конкурент попадает в ответы ChatGPT, а мы нет",
    utps: [
      { done: true,  text: "Страницы сайта, которые цитирует LLM" },
      { done: true,  text: "Источники выше вас — найди и обойди" },
      { done: true,  text: "GEO-стратегия на реальных данных" },
      { done: false, text: "Гадать, почему упала органика" },
    ],
  },
  {
    initials: "АН",
    name: "Алина Н.",
    role: "Директор агентства",
    company: "Digital · Performance",
    quote: "Хочу добавить новую услугу с высокой маржой без лишних затрат",
    utps: [
      { done: true,  text: "GEO-аудит как новая услуга в прайсе" },
      { done: true,  text: "White-label отчёты с логотипом агентства" },
      { done: true,  text: "Все клиенты из единого кабинета" },
      { done: false, text: "Объяснять клиентам, что такое GEO вручную" },
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
        <div className={`mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
          <h2 className="mb-1 font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Для кого
          </h2>
          <p className="font-mono text-xs text-foreground/40 md:text-sm">/ Узнайте себя</p>
        </div>

        {/* Три карточки-профиля */}
        <div
          className={`grid grid-cols-1 gap-5 md:grid-cols-3 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "150ms" }}
        >
          {audiences.map((item, i) => (
            <div key={i} className="flex flex-col rounded-3xl border border-foreground/10 bg-foreground/[0.02] overflow-hidden">

              {/* Шапка профиля */}
              <div className="flex items-center gap-4 border-b border-foreground/8 bg-foreground/[0.03] px-7 py-5">
                {/* Аватар */}
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-foreground/10">
                  <span className="font-mono text-xs font-medium text-foreground/60">{item.initials}</span>
                </div>
                <div className="min-w-0">
                  <p className="font-sans text-sm font-medium text-foreground leading-tight">{item.name}</p>
                  <p className="font-mono text-[10px] text-foreground/40 leading-tight mt-0.5">{item.role} · {item.company}</p>
                </div>
              </div>

              {/* Цитата */}
              <div className="border-b border-foreground/8 px-7 py-5">
                <p className="font-sans text-sm italic leading-relaxed text-foreground/50 md:text-base">
                  «{item.quote}»
                </p>
              </div>

              {/* УТП — что решает / что убирает */}
              <div className="flex flex-col gap-0 px-7 py-5 flex-1">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-foreground/25">
                  Флоустат даёт
                </p>
                <ul className="space-y-3">
                  {item.utps.map((utp, j) => (
                    <li key={j} className="flex items-start gap-3">
                      {utp.done ? (
                        <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-foreground/8">
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path d="M1.5 4L3 5.5L6.5 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/50" />
                          </svg>
                        </span>
                      ) : (
                        <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-foreground/5">
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path d="M2 2l4 4M6 2l-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" className="text-foreground/20" />
                          </svg>
                        </span>
                      )}
                      <span className={`font-mono text-xs leading-relaxed ${utp.done ? "text-foreground/60" : "text-foreground/25 line-through"} md:text-sm`}>
                        {utp.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Кнопка */}
              <div className="px-7 pb-7 pt-2">
                <button
                  onClick={() => scrollToSection?.(5)}
                  className="w-full rounded-2xl border border-foreground/15 py-3 font-sans text-sm font-medium text-foreground/60 transition-all hover:border-foreground/30 hover:text-foreground"
                >
                  Это про меня →
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
