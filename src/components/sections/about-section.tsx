import { useReveal } from "@/hooks/use-reveal"

const utps = {
  marketers: [
    "Как ИИ описывает ваш бренд",
    "Видимость vs конкуренты",
    "Автоматические отчёты",
    "Риски заранее",
  ],
  seo: [
    "Какие страницы цитирует ChatGPT",
    "Источники выше вас — найди и обойди",
    "Рост после публикаций",
    "GEO на реальных данных",
  ],
  agency: [
    "GEO-аудит — новая услуга",
    "Несколько клиентов в одном кабинете",
    "White-label отчёты",
    "Цифры для клиента",
  ],
}

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.1)

  const cell = (delay: number, extra = "") =>
    `transition-all duration-700 ${extra} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`

  return (
    <section
      ref={ref}
      className="flex min-h-screen w-full flex-col justify-center px-5 py-24 md:px-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* Заголовок */}
        <div
          className={`mb-10 transition-all duration-700 md:mb-14 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-1 font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Для кого
          </h2>
          <p className="font-mono text-xs text-foreground/40 md:text-sm">/ Кому нужен Флоустат</p>
        </div>

        {/* Bento grid */}
        <div className="grid auto-rows-auto grid-cols-1 gap-3 md:grid-cols-6 md:grid-rows-2 md:gap-4">

          {/* 1. Маркетологи — широкая */}
          <div
            className={cell(0, "md:col-span-4 md:row-span-1")}
            style={{ transitionDelay: "0ms" }}
          >
            <div className="flex h-full flex-col justify-between rounded-3xl border border-foreground/10 bg-foreground/[0.03] p-7 md:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <p className="mb-2 font-mono text-[10px] text-foreground/30 md:text-xs">01 · Brand & Reputation</p>
                  <h3 className="font-sans text-3xl font-light text-foreground md:text-4xl lg:text-5xl">
                    Маркетологи
                  </h3>
                </div>
                <span className="rounded-full border border-foreground/10 px-3 py-1 font-mono text-[10px] text-foreground/30">
                  #1
                </span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-2">
                {utps.marketers.map((u, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="h-1 w-1 flex-shrink-0 rounded-full bg-foreground/30" />
                    <span className="font-mono text-xs text-foreground/55">{u}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Цифра — узкая */}
          <div
            className={cell(80, "md:col-span-2 md:row-span-1")}
            style={{ transitionDelay: "80ms" }}
          >
            <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-foreground/10 bg-foreground/[0.03] p-7 text-center md:p-8">
              <div className="mb-2 font-sans text-6xl font-light text-foreground md:text-7xl lg:text-8xl">12+</div>
              <p className="font-mono text-xs text-foreground/40 md:text-sm">LLM-платформ под мониторингом</p>
            </div>
          </div>

          {/* 3. SEO — узкая */}
          <div
            className={cell(160, "md:col-span-2 md:row-span-1")}
            style={{ transitionDelay: "160ms" }}
          >
            <div className="flex h-full flex-col justify-between rounded-3xl border border-foreground/10 bg-foreground/[0.03] p-7 md:p-8">
              <div>
                <p className="mb-2 font-mono text-[10px] text-foreground/30 md:text-xs">02 · Search & Visibility</p>
                <h3 className="font-sans text-2xl font-light text-foreground md:text-3xl">
                  SEO-специалисты
                </h3>
              </div>
              <ul className="mt-4 space-y-2">
                {utps.seo.map((u, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-foreground/30" />
                    <span className="font-mono text-xs text-foreground/50">{u}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 4. Агентства — широкая */}
          <div
            className={cell(240, "md:col-span-4 md:row-span-1")}
            style={{ transitionDelay: "240ms" }}
          >
            <div className="flex h-full flex-col justify-between rounded-3xl border border-foreground/10 bg-foreground/[0.03] p-7 md:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <p className="mb-2 font-mono text-[10px] text-foreground/30 md:text-xs">03 · Agency & White-label</p>
                  <h3 className="font-sans text-3xl font-light text-foreground md:text-4xl lg:text-5xl">
                    Digital-агентства
                  </h3>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-2">
                {utps.agency.map((u, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="h-1 w-1 flex-shrink-0 rounded-full bg-foreground/30" />
                    <span className="font-mono text-xs text-foreground/55">{u}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Кнопки */}
        <div
          className={`mt-8 flex flex-wrap gap-3 transition-all duration-700 md:mt-10 md:gap-4 ${
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
