 "use client";

import { ArrowDownRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    number: "01",
    label: "CAFE TOO — GARIA, KOLKATA",
    eyebrow: "SIP. CHILL. REPEAT.",
    title: ["YOUR", "EVERYDAY", "CHILL SPOT."],
    description: "Welcome to Café Too — a cozy haven filled with warm lighting, polaroids, and incredible food right in Garia.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=2200&q=90",
  },
  {
    number: "02",
    label: "SIGNATURE DELICACIES",
    eyebrow: "FRESHLY BAKED & GRILLED",
    title: ["SAVOR", "THE", "CRUNCH."],
    description: "From loaded cheesy pizzas and crispy chicken nuggets to golden seasoned french fries, crafted for your cravings.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=2200&q=90",
  },
  {
    number: "03",
    label: "THE VIBE & AMBIENCE",
    eyebrow: "GOOD FOOD & GREAT MEMORIES",
    title: ["OWN", "THE", "VIBE."],
    description: "Surrounded by travel memories, aesthetic decor, and friends. The ultimate hangout spot after dark.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2200&q=90",
  },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const targetProgress = useRef(0);
  const currentProgress = useRef(0);
  const animationFrame = useRef<number | null>(null);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableDistance = sectionRef.current.offsetHeight - window.innerHeight;
      const newProgress = Math.min(1, Math.max(0, -rect.top / scrollableDistance));
      targetProgress.current = newProgress;
    };

    const animate = () => {
      const difference = targetProgress.current - currentProgress.current;
      currentProgress.current += difference * 0.09;
      if (Math.abs(difference) < 0.0001) {
        currentProgress.current = targetProgress.current;
      }
      setProgress(currentProgress.current);
      animationFrame.current = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  const horizontalOffset = progress * (slides.length - 1) * 100;
  const activeSlide = Math.min(slides.length - 1, Math.floor(progress * slides.length));

  return (
    <section id="home" ref={sectionRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* MOVING HERO TRACK */}
        <div
          className="flex h-full will-change-transform"
          style={{
            transform: `translate3d(-${horizontalOffset}vw, 0, 0)`,
          }}
        >
          {slides.map((slide) => (
            <article key={slide.number} className="relative h-full w-screen flex-shrink-0 overflow-hidden">
              {/* Image */}
              <div className="absolute inset-0">
                <img src={slide.image} alt={slide.label} className="h-full w-full object-cover filter brightness-75 scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
              </div>

              {/* Slide Content */}
              <div className="relative z-10 flex h-full flex-col justify-between px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-16 lg:py-16">
                {/* Main typography — given extra top padding so it completely clears the global navbar */}
                <div className="mt-32 sm:mt-40 max-w-[1200px]">
                  <p className="mb-4 text-[10px] uppercase tracking-[0.35em] sm:text-xs text-orange-400 font-semibold">
                    {slide.eyebrow}
                  </p>
                  <h1 className="text-[clamp(3.2rem,8.5vw,8rem)] font-black uppercase leading-[0.82] tracking-[-0.075em]">
                    {slide.title.map((line) => (
                      <span key={line} className="block drop-shadow-lg">
                        {line}
                      </span>
                    ))}
                  </h1>
                </div>

                {/* Bottom */}
                <div className="flex items-end justify-between gap-8 pb-10">
                  <p className="hidden max-w-md text-xs leading-6 text-white/80 sm:block">
                    {slide.description}
                  </p>

                  <a
                    href="#menu"
                    className="group flex shrink-0 items-center gap-4 border border-white/60 bg-black/40 backdrop-blur-md px-6 py-4 text-[9px] font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:bg-orange-500 hover:border-orange-500 sm:px-8 rounded-sm"
                  >
                    Explore Menu
                    <ArrowDownRight
                      size={16}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:rotate-[-45deg]"
                    />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* FIXED COLLECTION INDICATOR (Safely below global navbar height) */}
        <div className="pointer-events-none absolute left-6 top-28 z-30 flex items-center gap-3 text-white sm:left-10 sm:top-28 lg:left-16">
          <span className="h-px w-8 bg-orange-400" />
          <span className="text-[10px] uppercase tracking-[0.3em] sm:text-xs text-orange-300 font-medium">
            {slides[activeSlide].label}
          </span>
        </div>

        {/* FIXED SLIDE NUMBER */}
        <div className="pointer-events-none absolute right-6 top-28 z-30 text-[10px] tracking-[0.2em] text-white sm:right-10 sm:top-28 lg:right-16 font-mono">
          {slides[activeSlide].number} / 03
        </div>

        {/* Progress indicators */}
        <div className="absolute bottom-7 left-6 z-30 flex items-center gap-3 sm:left-10 lg:left-16">
          {slides.map((slide, index) => (
            <div key={slide.number} className="relative h-[2px] w-10 overflow-hidden bg-white/30">
              <div
                className="absolute inset-y-0 left-0 bg-orange-500 transition-[width] duration-100"
                style={{
                  width:
                    index < activeSlide
                      ? "100%"
                      : index === activeSlide
                      ? `${Math.max(15, Math.min(100, (progress * slides.length - index) * 100))}%`
                      : "0%",
                }}
              />
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-7 right-6 z-30 hidden items-center gap-3 text-[9px] uppercase tracking-[0.25em] text-white/70 sm:flex">
          <span>Scroll to explore</span>
          <ArrowDownRight size={14} strokeWidth={1.2} />
        </div>
      </div>
    </section>
  );
}