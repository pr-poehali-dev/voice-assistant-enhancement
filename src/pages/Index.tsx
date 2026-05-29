import { Shader, ChromaFlow, Swirl } from "shaders/react"
import { GrainOverlay } from "@/components/grain-overlay"
import { ProblemSection } from "@/components/sections/work-section"
import { FeaturesSection } from "@/components/sections/services-section"
import { AboutSection } from "@/components/sections/about-section"
import { ContactSection } from "@/components/sections/contact-section"
import { MagneticButton } from "@/components/magnetic-button"
import { useRef, useEffect, useState } from "react"

export default function Index() {
  const [isLoaded, setIsLoaded] = useState(false)
  const shaderContainerRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])
  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    const checkShaderReady = () => {
      if (shaderContainerRef.current) {
        const canvas = shaderContainerRef.current.querySelector("canvas")
        if (canvas && canvas.width > 0 && canvas.height > 0) {
          setIsLoaded(true)
          return true
        }
      }
      return false
    }

    if (checkShaderReady()) return

    const intervalId = setInterval(() => {
      if (checkShaderReady()) clearInterval(intervalId)
    }, 100)

    const fallbackTimer = setTimeout(() => setIsLoaded(true), 1500)

    return () => {
      clearInterval(intervalId)
      clearTimeout(fallbackTimer)
    }
  }, [])

  // Отслеживаем активную секцию через IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sectionRefs.current.forEach((section, index) => {
      if (!section) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setCurrentSection(index)
        },
        { threshold: 0.5 }
      )
      observer.observe(section)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [isLoaded])

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="relative w-full bg-background">
      <GrainOverlay />

      {/* Фиксированный шейдер-фон */}
      <div
        ref={shaderContainerRef}
        className={`fixed inset-0 z-0 transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ contain: "strict" }}
      >
        <Shader className="h-full w-full">
          <Swirl
            colorA="#1a4fd6"
            colorB="#3b82f6"
            speed={0.5}
            detail={0.6}
            blend={60}
            coarseX={30}
            coarseY={30}
            mediumX={30}
            mediumY={30}
            fineX={30}
            fineY={30}
          />
          <ChromaFlow
            baseColor="#1e40af"
            upColor="#3b82f6"
            downColor="#1e3a5f"
            leftColor="#0f2d5e"
            rightColor="#2563eb"
            intensity={0.85}
            radius={1.6}
            momentum={20}
            maskType="alpha"
            opacity={0.96}
          />
        </Shader>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Навигация */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-4 py-4 transition-opacity duration-700 md:px-12 md:py-6 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={() => scrollToSection(0)}
          className="flex items-center gap-2 transition-transform hover:scale-105"
        >
          <div className="flex h-8 w-8 items-center justify-center transition-all duration-300 hover:scale-110 md:h-10 md:w-10">
            <img
              src="https://cdn.poehali.dev/projects/2529b4d9-26c0-451a-90a3-fc0306c51933/bucket/a4e5eecc-ef88-443a-8a56-39aecdcdb9ba.png"
              alt="Флоустат"
              className="h-7 w-7 object-contain md:h-9 md:w-9"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>
          <span className="font-sans text-base font-semibold tracking-tight text-white md:text-xl">Флоустат</span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {["Главная", "Проблема", "Возможности", "О платформе", "Контакты"].map((item, index) => (
            <button
              key={item}
              onClick={() => scrollToSection(index)}
              className={`group relative font-sans text-sm font-medium transition-colors ${
                currentSection === index ? "text-white" : "text-white/80 hover:text-white"
              }`}
            >
              {item}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-white transition-all duration-300 ${
                  currentSection === index ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Мобильная навигация — точки */}
        <div className="flex items-center gap-1.5 md:hidden">
          {[0, 1, 2, 3, 4].map((i) => (
            <button
              key={i}
              onClick={() => scrollToSection(i)}
              className={`rounded-full transition-all duration-300 ${
                currentSection === i ? "h-2 w-4 bg-white" : "h-2 w-2 bg-white/40"
              }`}
            />
          ))}
        </div>

        <div className="hidden md:block">
          <MagneticButton variant="secondary" onClick={() => scrollToSection(4)}>
            Запросить демо
          </MagneticButton>
        </div>
      </nav>

      {/* Контент — вертикальный скролл */}
      <div className={`relative z-10 transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>

        {/* Hero */}
        <section
          ref={(el) => { sectionRefs.current[0] = el }}
          className="relative flex min-h-screen items-center px-5 pb-16 pt-28 md:px-12 md:pb-20"
        >
          <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-12">

            {/* Left: text */}
            <div className="w-full flex-shrink-0 lg:w-[46%]">
              <div className="mb-3 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-md md:mb-4 md:px-4 md:py-1.5">
                <p className="font-mono text-[10px] text-white/90 md:text-xs">AI Visibility Analytics · LLM Monitoring</p>
              </div>
              <h1 className="mb-4 font-sans text-4xl font-light leading-[1.1] tracking-tight text-white md:mb-6 md:text-6xl lg:text-7xl">
                <span className="text-balance">
                  Ваш бренд
                  <br />
                  <span className="text-white/50">в эпоху</span> ИИ-поиска
                </span>
              </h1>
              <p className="mb-5 max-w-xl text-sm leading-relaxed text-white/85 md:mb-8 md:text-lg">
                Флоустат отслеживает, как ваш бренд и конкуренты упоминаются в ответах ChatGPT, Perplexity и других LLM. Аналитика видимости в генеративном поиске — в одном дашборде.
              </p>

              {/* Mini stats */}
              <div className="mb-6 hidden sm:block md:mb-8">
                <div className="inline-flex items-center gap-4 rounded-2xl border border-white/15 bg-white/8 px-4 py-3 backdrop-blur-md md:gap-6 md:px-6 md:py-4">
                  <div className="text-center">
                    <div className="font-mono text-xl font-semibold text-white md:text-2xl">84%</div>
                    <div className="font-mono text-[10px] text-white/60 md:text-xs">Видимость в ChatGPT</div>
                  </div>
                  <div className="h-8 w-px bg-white/20" />
                  <div className="text-center">
                    <div className="font-mono text-xl font-semibold text-emerald-300 md:text-2xl">↑ 9%</div>
                    <div className="font-mono text-[10px] text-white/60 md:text-xs">За 30 дней</div>
                  </div>
                  <div className="h-8 w-px bg-white/20" />
                  <div className="text-center">
                    <div className="font-mono text-xl font-semibold text-white md:text-2xl">5</div>
                    <div className="font-mono text-[10px] text-white/60 md:text-xs">LLM-платформ</div>
                  </div>
                  <div className="h-8 w-px bg-white/20" />
                  <div className="text-center">
                    <div className="font-mono text-xl font-semibold text-amber-300 md:text-2xl">12</div>
                    <div className="font-mono text-[10px] text-white/60 md:text-xs">Конкурентов</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection(4)}>
                  Запросить демо
                </MagneticButton>
                <MagneticButton size="lg" variant="secondary" onClick={() => scrollToSection(2)}>
                  Возможности
                </MagneticButton>
              </div>
            </div>

            {/* Right: dashboard screenshot */}
            <div className="relative w-full lg:w-[54%]">
              {/* Glow */}
              <div className="absolute -inset-6 rounded-3xl bg-blue-500/15 blur-3xl" />
              {/* Screenshot frame */}
              <div className="relative overflow-hidden rounded-2xl border border-white/15 shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
                <img
                  src="https://cdn.poehali.dev/projects/2529b4d9-26c0-451a-90a3-fc0306c51933/bucket/4b414f77-bc82-4126-9711-0ef8adae78f0.png"
                  alt="Личный кабинет Флоустат"
                  className="block w-full"
                  draggable={false}
                />
                {/* Fade bottom */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>

          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:bottom-8">
            <div className="flex flex-col items-center gap-2">
              <p className="font-mono text-xs text-white/70">Листайте вниз</p>
              <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/20 bg-white/10 px-1 pt-1 backdrop-blur-md">
                <div className="h-2 w-1 animate-bounce rounded-full bg-white/70" />
              </div>
            </div>
          </div>
        </section>

        {/* Остальные секции */}
        <div ref={(el) => { sectionRefs.current[1] = el as HTMLElement }}>
          <ProblemSection />
        </div>
        <div ref={(el) => { sectionRefs.current[2] = el as HTMLElement }}>
          <FeaturesSection />
        </div>
        <div ref={(el) => { sectionRefs.current[3] = el as HTMLElement }}>
          <AboutSection scrollToSection={scrollToSection} />
        </div>
        <div ref={(el) => { sectionRefs.current[4] = el as HTMLElement }}>
          <ContactSection />
        </div>
      </div>
    </main>
  )
}