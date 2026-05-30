import { useReveal } from "@/hooks/use-reveal"

const cols = [
  { num: "01", title: "Маркетологи", tag: "Brand" },
  { num: "02", title: "SEO-специалисты", tag: "Search" },
  { num: "03", title: "Агентства", tag: "Agency" },
]

const rows = [
  {
    category: "Мониторинг",
    utps: [
      "Тональность бренда в ChatGPT и Алисе",
      "Страницы сайта, которые цитирует LLM",
      "Все клиенты из одного кабинета",
    ],
  },
  {
    category: "Аналитика",
    utps: [
      "Видимость против конкурентов по каждой LLM",
      "Источники выше вас — найди и обойди",
      "White-label отчёты с вашим брендом",
    ],
  },
  {
    category: "Отчёты",
    utps: [
      "Еженедельные отчёты без ручной работы",
      "Динамика роста после каждой публикации",
      "Цифры эффективности для клиента",
    ],
  },
  {
    category: "Стратегия",
    utps: [
      "Репутационные риски — до появления проблем",
      "GEO-стратегия на реальных данных",
      "GEO-аудит — новая высокомаржинальная услуга",
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
          <p className="font-mono text-xs text-foreground/40 md:text-sm">/ Кому нужен Флоустат</p>
        </div>

        {/* Таблица */}
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "150ms" }}>
          <div className="overflow-x-auto rounded-3xl border border-foreground/10">
            <table className="w-full min-w-[640px] border-collapse">

              {/* Шапка */}
              <thead>
                <tr>
                  {/* Пустая ячейка */}
                  <th className="w-32 border-b border-r border-foreground/10 bg-foreground/[0.02] p-5 text-left md:w-40 lg:w-48" />

                  {cols.map((col, i) => (
                    <th
                      key={i}
                      className={`border-b border-foreground/10 p-5 text-left align-bottom ${
                        i < cols.length - 1 ? "border-r" : ""
                      } ${i === 1 ? "bg-foreground" : "bg-foreground/[0.02]"}`}
                    >
                      <span className={`mb-1 block font-mono text-[10px] ${i === 1 ? "text-white/30" : "text-foreground/25"}`}>
                        {col.num} · {col.tag}
                      </span>
                      <span className={`font-sans text-lg font-light md:text-2xl ${i === 1 ? "text-white" : "text-foreground"}`}>
                        {col.title}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Строки */}
              <tbody>
                {rows.map((row, ri) => (
                  <tr key={ri} className={ri % 2 === 0 ? "" : "bg-foreground/[0.015]"}>
                    {/* Категория */}
                    <td className={`border-r border-foreground/10 p-5 align-top ${ri < rows.length - 1 ? "border-b" : ""}`}>
                      <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-foreground/30">
                        {row.category}
                      </span>
                    </td>

                    {/* УТП по колонкам */}
                    {row.utps.map((utp, ci) => (
                      <td
                        key={ci}
                        className={`p-5 align-top ${ci < cols.length - 1 ? "border-r border-foreground/10" : ""} ${ri < rows.length - 1 ? "border-b border-foreground/10" : ""} ${ci === 1 ? "bg-foreground/[0.02]" : ""}`}
                      >
                        <div className="flex items-start gap-2.5">
                          <div className={`mt-[5px] h-1.5 w-1.5 flex-shrink-0 rounded-full ${ci === 1 ? "bg-white/20" : "bg-foreground/20"}`} />
                          <span className={`font-mono text-xs leading-relaxed ${ci === 1 ? "text-white/60" : "text-foreground/55"} md:text-sm`}>
                            {utp}
                          </span>
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}

                {/* Строка с кнопками */}
                <tr>
                  <td className="border-r border-foreground/10 p-5" />
                  {cols.map((_, ci) => (
                    <td
                      key={ci}
                      className={`p-5 ${ci < cols.length - 1 ? "border-r border-foreground/10" : ""} ${ci === 1 ? "bg-foreground/[0.02]" : ""}`}
                    >
                      <button
                        onClick={() => scrollToSection?.(5)}
                        className={`rounded-xl px-4 py-2.5 font-sans text-sm font-medium transition-opacity duration-200 hover:opacity-80 ${
                          ci === 1
                            ? "bg-white text-zinc-900"
                            : "border border-foreground/20 text-foreground/70 hover:border-foreground/40"
                        }`}
                      >
                        Попробовать
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>

            </table>
          </div>
        </div>

      </div>
    </section>
  )
}
