import { useReveal } from "@/hooks/use-reveal"

export function ProblemSection() {
  const { ref, isVisible } = useReveal(0.3)

  const problems = [
    {
      number: "01",
      title: "Невидимость в ИИ-поиске",
      description: "Ваш бренд может полностью отсутствовать в ответах ChatGPT и Perplexity — и вы об этом не знаете.",
      direction: "left",
    },
    {
      number: "02",
      title: "Нет инструментов мониторинга",
      description: "Традиционные SEO-инструменты не анализируют LLM. Нет данных — нет стратегии.",
      direction: "right",
    },
    {
      number: "03",
      title: "Конкуренты уже там",
      description: "Пока вы не отслеживаете видимость в ИИ, конкуренты занимают ваше место в генеративном поиске.",
      direction: "left",
    },
  ]

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Проблема
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Почему это важно сейчас</p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {problems.map((item, i) => (
            <ProblemCard key={i} item={item} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProblemCard({
  item,
  index,
  isVisible,
}: {
  item: { number: string; title: string; description: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return item.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  return (
    <div
      className={`group flex items-start justify-between border-b border-foreground/10 py-6 transition-all duration-700 hover:border-foreground/20 md:py-8 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
        marginLeft: index % 2 === 0 ? "0" : "auto",
        maxWidth: index % 2 === 0 ? "85%" : "90%",
      }}
    >
      <div className="flex items-start gap-4 md:gap-8">
        <span className="mt-1 font-mono text-sm text-foreground/30 transition-colors group-hover:text-foreground/50 md:text-base">
          {item.number}
        </span>
        <div>
          <h3 className="mb-2 font-sans text-2xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-3xl lg:text-4xl">
            {item.title}
          </h3>
          <p className="max-w-lg font-mono text-sm text-foreground/60 md:text-base">{item.description}</p>
        </div>
      </div>
    </div>
  )
}
