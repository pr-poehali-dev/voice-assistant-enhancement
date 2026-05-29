import { useReveal } from "@/hooks/use-reveal"
import { useState, type FormEvent } from "react"
import { MagneticButton } from "@/components/magnetic-button"
import Icon from "@/components/ui/icon"

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: "", email: "", company: "", message: "" })
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start flex-col justify-center px-5 pt-16 md:items-center md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:gap-16 lg:gap-24">

          {/* Left — контакты и тарифы */}
          <div className="flex flex-col justify-center">
            <div
              className={`mb-4 transition-all duration-700 md:mb-12 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="mb-1 font-sans text-3xl font-light leading-[1.05] tracking-tight text-foreground md:text-7xl lg:text-8xl">
                Начните
                <br />
                мониторинг
              </h2>
              <p className="font-mono text-xs text-foreground/60 md:text-base">/ Запросите демо-доступ</p>
            </div>

            <div className="space-y-3 md:space-y-8">
              <a
                href="mailto:hello@floustat.ru"
                className={`group block transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="mb-0.5 flex items-center gap-2">
                  <Icon name="Mail" className="h-3 w-3 text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60">Email</span>
                </div>
                <p className="text-sm text-foreground transition-colors group-hover:text-foreground/70 md:text-2xl">
                  hello@floustat.ru
                </p>
              </a>

              {/* Тарифы */}
              <div
                className={`rounded-xl border border-foreground/10 bg-foreground/5 p-3 transition-all duration-700 md:p-4 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <p className="font-mono text-xs text-foreground/50 mb-2">Тарифы</p>
                <div className="flex gap-3 md:gap-4">
                  <div>
                    <div className="font-sans text-xs font-medium text-foreground md:text-sm">Starter</div>
                    <div className="font-mono text-[10px] text-foreground/50">1 бренд · 3 LLM</div>
                  </div>
                  <div className="h-8 w-px bg-foreground/10" />
                  <div>
                    <div className="font-sans text-xs font-medium text-foreground md:text-sm">Pro</div>
                    <div className="font-mono text-[10px] text-foreground/50">5 брендов · все LLM</div>
                  </div>
                  <div className="h-8 w-px bg-foreground/10" />
                  <div>
                    <div className="font-sans text-xs font-medium text-foreground md:text-sm">Enterprise</div>
                    <div className="font-mono text-[10px] text-foreground/50">Без лимитов · API</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — форма */}
          <div className="flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-6">
              <div
                className={`grid grid-cols-2 gap-3 transition-all duration-700 md:block md:space-y-6 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div>
                  <label className="mb-1 block font-mono text-[10px] text-foreground/60 md:text-xs">Имя</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full border-b border-foreground/30 bg-transparent py-1 text-xs text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none md:py-2 md:text-base"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-mono text-[10px] text-foreground/60 md:text-xs">Компания</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full border-b border-foreground/30 bg-transparent py-1 text-xs text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none md:py-2 md:text-base"
                    placeholder="Компания"
                  />
                </div>
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <label className="mb-1 block font-mono text-[10px] text-foreground/60 md:text-xs">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full border-b border-foreground/30 bg-transparent py-1 text-xs text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none md:py-2 md:text-base"
                  placeholder="your@company.com"
                />
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <label className="mb-1 block font-mono text-[10px] text-foreground/60 md:text-xs">Что хотите отслеживать?</label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full border-b border-foreground/30 bg-transparent py-1 text-xs text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none md:py-2 md:text-base"
                  placeholder="Ваш бренд, продукт или тема..."
                />
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "550ms" }}
              >
                <MagneticButton variant="primary" size="lg" className="w-full disabled:opacity-50">
                  {isSubmitting ? "Отправка..." : "Запросить демо"}
                </MagneticButton>
                {submitSuccess && (
                  <p className="mt-2 text-center font-mono text-xs text-foreground/80 md:mt-3 md:text-sm">
                    Заявка отправлена! Свяжемся в течение 24 часов.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
