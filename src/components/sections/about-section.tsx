import { useState } from "react"
import { useReveal } from "@/hooks/use-reveal"

const audiences = [
  {
    id: "marketers",
    num: "01",
    title: "Маркетологи",
    description: "Контролируйте, что нейросети говорят о вашем бренде покупателям",
    utps: [
      { icon: "📊", title: "Тональность бренда", text: "ChatGPT рекомендует вас или отговаривает? Узнайте по каждой платформе." },
      { icon: "⚔️", title: "Сравнение с конкурентами", text: "Видимость вашего бренда против конкурентов — в одной таблице." },
      { icon: "📬", title: "Автоотчёты", text: "Еженедельный дайджест на почту без единого ручного действия." },
      { icon: "🚨", title: "Репутационные риски", text: "Негативные упоминания — до того, как они стали вирусными." },
    ],
  },
  {
    id: "seo",
    num: "02",
    title: "SEO-специалисты",
    description: "Выясните, почему конкурент в ответах ChatGPT, а вы — нет",
    utps: [
      { icon: "📄", title: "Источники цитирования", text: "Какие страницы вашего сайта LLM берёт за основу ответов." },
      { icon: "🔬", title: "Гэп-анализ", text: "Источники, которые стоят выше вас в LLM-выдаче — найди и обойди." },
      { icon: "📈", title: "Динамика роста", text: "Рост видимости после каждой публикации — в конкретных цифрах." },
      { icon: "🗺️", title: "GEO-стратегия", text: "Данные для стратегии продвижения в LLM, а не догадки." },
    ],
  },
  {
    id: "agencies",
    num: "03",
    title: "Агентства",
    description: "Добавьте GEO-аудит в прайс и выигрывайте у конкурентов",
    utps: [
      { icon: "💎", title: "Новая маржинальная услуга", text: "GEO-аудит — рынок только формируется, конкуренция ещё низкая." },
      { icon: "🏷️", title: "White-label", text: "Отчёты с вашим логотипом и брендбуком — клиент видит только агентство." },
      { icon: "🗂️", title: "Все клиенты в одном месте", text: "Единый кабинет для управления проектами всех ваших клиентов." },
      { icon: "📐", title: "Доказательства ROI", text: "Рост видимости клиента в цифрах после каждого спринта работ." },
    ],
  },
]

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.1)
  const [active, setActive] = useState(0)
  const current = audiences[active]

  return (
    <section
      ref={ref}
      className="w-full px-5 py-24 md:px-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* Заголовок */}
        <div className={`mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
          <h2 className="mb-1 font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Для кого
          </h2>
          <p className="font-mono text-xs text-foreground/40 md:text-sm">/ Кому нужен Флоустат</p>
        </div>

        <div
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "150ms" }}
        >
          {/* Табы */}
          <div className="mb-0 flex gap-0 overflow-hidden rounded-t-2xl border border-b-0 border-foreground/10">
            {audiences.map((a, i) => (
              <button
                key={a.id}
                onClick={() => setActive(i)}
                className={`flex flex-1 flex-col gap-0.5 border-r border-foreground/10 px-6 py-4 text-left last:border-r-0 transition-colors md:px-8 md:py-5 ${
                  active === i
                    ? "bg-foreground text-background"
                    : "bg-foreground/[0.02] text-foreground/50 hover:bg-foreground/[0.05] hover:text-foreground/80"
                }`}
              >
                <span className={`font-mono text-[10px] ${active === i ? "text-background/40" : "text-foreground/25"}`}>{a.num}</span>
                <span className="font-sans text-sm font-medium md:text-base">{a.title}</span>
              </button>
            ))}
          </div>

          {/* Контент */}
          <div className="rounded-b-2xl border border-foreground/10 bg-foreground/[0.02] p-8 md:p-10 lg:p-12">
            <p className="mb-10 max-w-xl font-sans text-lg font-light text-foreground/60 md:text-xl lg:text-2xl">
              {current.description}
            </p>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {current.utps.map((utp, j) => (
                <div key={j} className="rounded-2xl border border-foreground/8 bg-background p-6">
                  <div className="mb-3 text-3xl">{utp.icon}</div>
                  <h4 className="mb-2 font-sans text-sm font-semibold text-foreground">{utp.title}</h4>
                  <p className="font-mono text-xs leading-relaxed text-foreground/50">{utp.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button
                onClick={() => scrollToSection?.(5)}
                className="rounded-full border border-foreground/20 px-6 py-3 font-sans text-sm font-medium text-foreground/70 transition-all hover:border-foreground/40 hover:text-foreground"
              >
                Попробовать для {current.title.toLowerCase()} →
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
