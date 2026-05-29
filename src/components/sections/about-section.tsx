import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex min-h-screen w-full flex-col justify-center px-5 py-24 md:px-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left side */}
          <div>
            <div
              className={`mb-4 transition-all duration-700 md:mb-12 ${
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
              }`}
            >
              <h2 className="mb-2 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl">
                Аналитика
                <br />
                нового
                <br />
                <span className="text-foreground/40">поколения</span>
              </h2>
            </div>

            <div
              className={`space-y-2 transition-all duration-700 md:space-y-4 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="max-w-md text-xs leading-relaxed text-foreground/90 md:text-lg">
                Флоустат — первая в России платформа для мониторинга видимости брендов в ответах LLM и генеративных поисковых систем.
              </p>
              <p className="max-w-md text-xs leading-relaxed text-foreground/90 md:text-lg">
                Помогаем маркетологам, SEO-специалистам и digital-агентствам понять и улучшить присутствие в ИИ-поиске.
              </p>
            </div>
          </div>

          {/* Right side - metrics */}
          <div className="flex flex-col justify-center space-y-4 md:space-y-12">
            {[
              { value: "12+", label: "LLM-платформ", sublabel: "ChatGPT, Perplexity, Claude, Gemini…", direction: "right" },
              { value: "24/7", label: "Мониторинг", sublabel: "Автоматический сбор данных", direction: "left" },
              { value: "100%", label: "B2B-фокус", sublabel: "Для маркетинга, SEO и digital-команд", direction: "right" },
            ].map((stat, i) => {
              const getRevealClass = () => {
                if (!isVisible) {
                  return stat.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
                }
                return "translate-x-0 opacity-100"
              }

              return (
                <div
                  key={i}
                  className={`flex items-baseline gap-3 border-l border-foreground/30 pl-3 transition-all duration-700 md:gap-8 md:pl-8 ${getRevealClass()}`}
                  style={{
                    transitionDelay: `${300 + i * 150}ms`,
                    marginLeft: i % 2 === 0 ? "0" : "auto",
                    maxWidth: i % 2 === 0 ? "100%" : "85%",
                  }}
                >
                  <div className="text-2xl font-light text-foreground md:text-6xl lg:text-7xl">{stat.value}</div>
                  <div>
                    <div className="font-sans text-sm font-light text-foreground md:text-xl">{stat.label}</div>
                    <div className="font-mono text-[10px] text-foreground/60 md:text-xs">{stat.sublabel}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div
          className={`mt-6 flex flex-wrap gap-3 transition-all duration-700 md:mt-16 md:gap-4 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "750ms" }}
        >
          <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection?.(4)}>
            Запросить демо
          </MagneticButton>
          <MagneticButton size="lg" variant="secondary" onClick={() => scrollToSection?.(2)}>
            Возможности
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}