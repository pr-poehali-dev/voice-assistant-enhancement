import { Shader, ChromaFlow, Swirl } from "shaders/react"
import { CustomCursor } from "@/components/custom-cursor"
import { GrainOverlay } from "@/components/grain-overlay"
import { ProblemSection } from "@/components/sections/work-section"
import { FeaturesSection } from "@/components/sections/services-section"
import { AboutSection } from "@/components/sections/about-section"
import { ContactSection } from "@/components/sections/contact-section"
import { MagneticButton } from "@/components/magnetic-button"
import { useRef, useEffect, useState } from "react"

export default function Index() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const touchStartY = useRef(0)
  const touchStartX = useRef(0)
  const shaderContainerRef = useRef<HTMLDivElement>(null)
  const scrollThrottleRef = useRef<number>()

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
      if (checkShaderReady()) {
        clearInterval(intervalId)
      }
    }, 100)

    const fallbackTimer = setTimeout(() => {
      setIsLoaded(true)
    }, 1500)

    return () => {
      clearInterval(intervalId)
      clearTimeout(fallbackTimer)
    }
  }, [])

  const scrollToSection = (index: number) => {
    if (scrollContainerRef.current) {
      const sectionWidth = scrollContainerRef.current.offsetWidth
      scrollContainerRef.current.scrollTo({
        left: sectionWidth * index,
        behavior: "smooth",
      })
      setCurrentSection(index)
    }
  }

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
      touchStartX.current = e.touches[0].clientX
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (Math.abs(e.touches[0].clientY - touchStartY.current) > 10) {
        e.preventDefault()
      }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY
      const touchEndX = e.changedTouches[0].clientX
      const deltaY = touchStartY.current - touchEndY
      const deltaX = touchStartX.current - touchEndX

      if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 50) {
        if (deltaY > 0 && currentSection < 4) {
          scrollToSection(currentSection + 1)
        } else if (deltaY < 0 && currentSection > 0) {
          scrollToSection(currentSection - 1)
        }
      }
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("touchstart", handleTouchStart, { passive: true })
      container.addEventListener("touchmove", handleTouchMove, { passive: false })
      container.addEventListener("touchend", handleTouchEnd, { passive: true })
    }

    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart)
        container.removeEventListener("touchmove", handleTouchMove)
        container.removeEventListener("touchend", handleTouchEnd)
      }
    }
  }, [currentSection])

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault()

        if (!scrollContainerRef.current) return

        scrollContainerRef.current.scrollBy({
          left: e.deltaY,
          behavior: "instant",
        })

        const sectionWidth = scrollContainerRef.current.offsetWidth
        const newSection = Math.round(scrollContainerRef.current.scrollLeft / sectionWidth)
        if (newSection !== currentSection) {
          setCurrentSection(newSection)
        }
      }
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false })
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel)
      }
    }
  }, [currentSection])

  useEffect(() => {
    const handleScroll = () => {
      if (scrollThrottleRef.current) return

      scrollThrottleRef.current = requestAnimationFrame(() => {
        if (!scrollContainerRef.current) {
          scrollThrottleRef.current = undefined
          return
        }

        const sectionWidth = scrollContainerRef.current.offsetWidth
        const scrollLeft = scrollContainerRef.current.scrollLeft
        const newSection = Math.round(scrollLeft / sectionWidth)

        if (newSection !== currentSection && newSection >= 0 && newSection <= 4) {
          setCurrentSection(newSection)
        }

        scrollThrottleRef.current = undefined
      })
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true })
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll)
      }
      if (scrollThrottleRef.current) {
        cancelAnimationFrame(scrollThrottleRef.current)
      }
    }
  }, [currentSection])

  return (
    <main className="relative h-screen w-full overflow-hidden bg-background">
      <CustomCursor />
      <GrainOverlay />

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
          {[0,1,2,3,4].map((i) => (
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

      <div
        ref={scrollContainerRef}
        data-scroll-container
        className={`relative z-10 flex h-screen overflow-x-auto overflow-y-hidden transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Hero Section */}
        <section className="relative flex h-screen w-screen shrink-0 flex-col justify-end px-5 pb-12 pt-20 md:px-12 md:pb-24 md:pt-24">
          <div className="max-w-4xl">
            <div className="mb-3 inline-block animate-in fade-in slide-in-from-bottom-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-md duration-700 md:mb-4 md:px-4 md:py-1.5">
              <p className="font-mono text-[10px] text-white/90 md:text-xs">AI Visibility Analytics · LLM Monitoring</p>
            </div>
            <h1 className="mb-4 animate-in fade-in slide-in-from-bottom-8 font-sans text-4xl font-light leading-[1.1] tracking-tight text-white duration-1000 md:mb-6 md:text-7xl lg:text-8xl">
              <span className="text-balance">
                Ваш бренд
                <br />
                <span className="text-white/50">в эпоху</span> ИИ-поиска
              </span>
            </h1>
            <p className="mb-5 max-w-2xl animate-in fade-in slide-in-from-bottom-4 text-sm leading-relaxed text-white/85 duration-1000 delay-200 md:mb-8 md:text-xl">
              <span className="text-pretty">
                Флоустат отслеживает, как ваш бренд и конкуренты упоминаются в ответах ChatGPT, Perplexity и других LLM. Аналитика видимости в генеративном поиске — в одном дашборде.
              </span>
            </p>

            {/* Mini dashboard preview — скрыт на маленьких экранах */}
            <div className="mb-5 hidden animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100 sm:block md:mb-8">
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

            <div className="flex animate-in fade-in slide-in-from-bottom-4 flex-col gap-3 duration-1000 delay-300 sm:flex-row sm:items-center">
              <MagneticButton
                size="lg"
                variant="primary"
                onClick={() => scrollToSection(4)}
              >
                Запросить демо
              </MagneticButton>
              <MagneticButton size="lg" variant="secondary" onClick={() => scrollToSection(2)}>
                Возможности
              </MagneticButton>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-in fade-in duration-1000 delay-500 md:bottom-8">
            <div className="flex items-center gap-2">
              <p className="font-mono text-xs text-white/70">Листайте вправо</p>
              <div className="flex h-6 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
                <div className="h-2 w-2 animate-pulse rounded-full bg-white/70" />
              </div>
            </div>
          </div>
        </section>

        <ProblemSection />
        <FeaturesSection />
        <AboutSection scrollToSection={scrollToSection} />
        <ContactSection />
      </div>

      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  )
}