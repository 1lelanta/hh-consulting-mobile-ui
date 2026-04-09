import { useEffect, useMemo, useState } from "react";

function HeroSection({ data }) {
  const backgrounds = useMemo(() => {
    if (Array.isArray(data.backgroundImages) && data.backgroundImages.length > 0) {
      return data.backgroundImages;
    }

    return data.image ? [{ src: data.image, alt: data.imageAlt || "Hero background" }] : [];
  }, [data.backgroundImages, data.image, data.imageAlt]);

  const [activeIndex, setActiveIndex] = useState(0);
  const headlineHasExcellence = data.headline?.includes("Excellence");

  useEffect(() => {
    if (backgrounds.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % backgrounds.length);
    }, 7600);

    return () => window.clearInterval(timer);
  }, [backgrounds.length]);

  return (
    <section id="home" className="animate-reveal -mx-3 overflow-hidden scroll-mt-28 sm:-mx-6 lg:-mx-10 2xl:-mx-14">
      <div className="relative min-h-[90vh] sm:min-h-screen">
        {backgrounds.map((background, index) => (
          <img
            key={`${background.src}-${index}`}
            src={background.src}
            alt={background.alt}
            className={[
              "absolute inset-0 h-full w-full object-cover will-change-[opacity,transform] transition-[opacity,transform] duration-[3200ms] ease-in-out",
              index === activeIndex ? "scale-100 opacity-100" : "scale-105 opacity-0",
            ].join(" ")}
          />
        ))}
        <div className="absolute inset-0 bg-[#0E2A55]/72" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A234A]/70 via-[#0A234A]/50 to-[#0A234A]/34" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(213,178,35,0.14),transparent_34%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.08),transparent_34%)]" />

        <div className="relative z-10 mx-auto grid min-h-[90vh] w-full max-w-[1320px] grid-cols-1 px-6 py-10 text-white sm:min-h-screen sm:px-10 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-14 lg:py-16">
          <div className="flex h-full flex-col">
            <div className="flex items-start gap-3 sm:items-center sm:gap-4">
              <div className="inline-grid h-11 w-11 place-items-center overflow-hidden rounded-xl border border-white/45 bg-white/15 p-1.5 text-white shadow-[0_10px_24px_rgba(6,19,36,0.18)] backdrop-blur-[12px] sm:h-16 sm:w-16 sm:rounded-2xl sm:p-1">
              <img src="/asset/hhlogo.jpeg" alt="HH Consulting logo" className="h-full w-full object-contain" />
              </div>
              <div className="min-w-0 leading-tight">
                <p className="m-0 text-[1.08rem] font-extrabold leading-[1.2] tracking-[0.01em] text-white sm:text-[2rem] sm:leading-tight">
                  {data.company}
                </p>
                {data.companyAmharic ? (
                  <p className="m-0 mt-1 text-[0.86rem] font-black leading-[1.25] tracking-[0.01em] text-white sm:text-[1.06rem] sm:tracking-[0.02em]">
                    {data.companyAmharic}
                  </p>
                ) : null}
                <p className="m-0 mt-1 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[#D5B223] sm:text-[1.05rem] sm:tracking-[0.12em]">
                  {data.subtitle}
                </p>
              </div>
            </div>

            <div className="mt-16 text-left sm:mt-20 lg:mt-24">
              <h1 className="max-w-[680px] text-[3rem] font-extrabold leading-[1.02] tracking-[-0.02em] text-white sm:text-[4.1rem] lg:text-[5.7rem]">
                {headlineHasExcellence ? (
                  <>
                    {data.headline.replace("Excellence", "")}
                    <span className="font-['Playfair_Display',serif] font-semibold italic tracking-[-0.01em] text-[#F6EAD0]">
                      Excellence
                    </span>
                  </>
                ) : (
                  data.headline
                )}
              </h1>
              <p className="mt-6 max-w-[620px] text-[1.05rem] leading-8 text-white/80 sm:text-[1.25rem] sm:leading-9">
                {data.description}
              </p>
              <a
                href={data.ctaHref}
                className="mt-8 inline-block rounded-2xl bg-[#D5B223] px-8 py-4 text-[1rem] font-bold text-white shadow-[0_10px_24px_rgba(190,154,90,0.35)] sm:px-10 sm:py-5 sm:text-[1.2rem]"
              >
                {data.ctaLabel}
              </a>
            </div>

            <div className="mt-auto flex justify-center pb-2 lg:justify-start">
              <div className="flex h-14 w-9 items-start justify-center rounded-full border-2 border-white/35 p-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
              </div>
            </div>
          </div>

          <div className="hidden items-end justify-end lg:flex">
            <div className="h-[62%] w-full max-w-[420px] rounded-[28px] border border-white/20 bg-gradient-to-br from-white/14 via-white/6 to-white/4 backdrop-blur-[10px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
