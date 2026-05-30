import { useState } from "react"
import { useReveal } from "@/hooks/use-reveal"

const audiences = [
  {
    num: "01",
    role: "Маркетолог",
    question: "Что говорит\nо вас ИИ?",
    utps: [
      "Как ChatGPT описывает ваш бренд",
      "Видимость против конкурентов",
      "Автоматические отчёты каждую неделю",
      "Репутационные риски — заранее",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="10" r="5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "02",
    role: "SEO-специалист",
    question: "Кто выше вас\nв ИИ-выдаче?",
    utps: [
      "Какие страницы цитирует ChatGPT",
      "Источники, которые LLM ставит выше вас",
      "Рост видимости после новых публикаций",
      "GEO-стратегия на реальных данных",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="14" cy="14" r="7" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M19 19l7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "03",
    role: "Руководитель агентства",
    question: "Новая услуга\nдля клиентов?",
    utps: [
      "GEO-аудит — высокомаржинальная услуга",
      "Все клиенты из одного кабинета",
      "White-label отчёты с вашим логотипом",
      "Цифры эффективности для клиента",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="10" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 10V7a6 6 0 0112 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.1)
  const [active, setActive] = useState(0)
  const item = audiences[active]

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

        {/* Основной блок */}
        <div
          className={`overflow-hidden rounded-3xl bg-foreground transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          <div className="grid md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">

            {/* Левая панель — список аудиторий */}
            <div className="border-b border-white/10 p-6 md:border-b-0 md:border-r md:p-8">
              <p className="mb-6 font-mono text-xs text-white/30">Выберите роль</p>
              <div className="flex flex-row gap-2 md:flex-col md:gap-3">
                {audiences.map((a, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-left transition-all duration-300 md:px-5 md:py-4 ${
                      active === i
                        ? "bg-white/10 text-white"
                        : "text-white/35 hover:bg-white/5 hover:text-white/60"
                    }`}
                  >
                    <span className={`transition-colors duration-300 ${active === i ? "text-white" : "text-white/25"}`}>
                      {a.icon}
                    </span>
                    <span className="hidden font-sans text-sm font-light md:block">{a.role}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Правая панель — контент */}
            <div className="relative overflow-hidden p-8 md:p-12">

              {/* Большой фоновый номер */}
              <div
                className="pointer-events-none absolute -right-6 -top-8 select-none font-sans font-bold leading-none text-white/[0.04]"
                style={{ fontSize: "clamp(8rem, 20vw, 18rem)" }}
              >
                {item.num}
              </div>

              <div key={active} className="relative">

                {/* Роль */}
                <p className="mb-4 font-mono text-xs text-white/30 md:text-sm">
                  {item.num} · {item.role}
                </p>

                {/* Большой вопрос */}
                <h3
                  className="mb-10 whitespace-pre-line font-sans font-light leading-tight text-white md:mb-12"
                  style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
                >
                  {item.question}
                </h3>

                {/* УТП */}
                <div className="grid gap-3 sm:grid-cols-2">
                  {item.utps.map((utp, j) => (
                    <div
                      key={j}
                      className="flex items-start gap-3 rounded-2xl bg-white/5 p-4"
                    >
                      <span className="mt-0.5 font-mono text-[10px] text-white/25">0{j + 1}</span>
                      <span className="font-mono text-xs leading-relaxed text-white/60 md:text-sm">{utp}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8 md:mt-10">
                  <button
                    onClick={() => scrollToSection?.(5)}
                    className="rounded-full bg-white px-6 py-3 font-sans text-sm font-medium text-foreground transition-all duration-200 hover:bg-white/90 md:px-8 md:py-3"
                  >
                    Запросить демо
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
