import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

function HeroSection({ data }) {
  const backgrounds = useMemo(() => {
    if (Array.isArray(data.backgroundImages) && data.backgroundImages.length > 0) {
      return data.backgroundImages;
    }

    return data.image ? [{ src: data.image, alt: data.imageAlt || "Hero background" }] : [];
  }, [data.backgroundImages, data.image, data.imageAlt]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (backgrounds.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % backgrounds.length);
    }, 12000);

    return () => window.clearInterval(timer);
  }, [backgrounds.length]);

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67] }}
      viewport={{ once: true, amount: 0.2 }}
      className="animate-reveal relative -mx-3 overflow-hidden scroll-mt-28 sm:-mx-6 lg:-mx-10 2xl:-mx-14"
    >
      <div className="relative isolate min-h-[78svh] overflow-hidden sm:min-h-[82svh] lg:min-h-[86svh]">
        {backgrounds.map((background, index) => (
          <motion.img
            key={`${background.src}-${index}`}
            src={background.src}
            alt={background.alt}
            className={[
              "absolute inset-0 h-full w-full object-cover will-change-[opacity,transform]",
              index === activeIndex ? "animate-ken-burns-slow" : "",
            ].join(" ")}
            initial={false}
            animate={index === activeIndex ? { opacity: 1 } : { opacity: 0 }}
            transition={{ opacity: { duration: 1.4, ease: "easeOut" } }}
          />
        ))}

        <div className="absolute inset-0 bg-slate-950/54 lg:bg-slate-950/42" />
        <div className="absolute inset-0 bg-[linear-gradient(112deg,rgba(2,6,23,0.8)_10%,rgba(2,6,23,0.58)_45%,rgba(2,6,23,0.22)_100%)] lg:bg-[linear-gradient(112deg,rgba(2,6,23,0.7)_10%,rgba(2,6,23,0.42)_45%,rgba(2,6,23,0.14)_100%)]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,1) 0, rgba(255,255,255,1) 1px, transparent 1px, transparent 34px), repeating-linear-gradient(90deg, rgba(255,255,255,1) 0, rgba(255,255,255,1) 1px, transparent 1px, transparent 34px)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 py-10 text-white sm:px-8 sm:py-12 lg:px-10 lg:py-18">
          <div className="grid grid-cols-1 items-end gap-8 lg:gap-10">
            <motion.div
              className="max-w-[820px] pt-8 sm:pt-12 lg:pt-16"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <motion.div
                className="space-y-5"
                animate={{
                  x: [0, -16, 0],
                  y: [0, -4, 0],
                }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="m-0 inline-flex w-fit items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[0.8rem] font-bold uppercase tracking-[0.16em] text-[#E7CB74] backdrop-blur sm:text-[0.86rem]">
                  {data.subtitle}
                </p>

                <h1 className="m-0 text-[2.35rem] font-black leading-[1.04] tracking-[-0.02em] text-white [text-shadow:0_10px_28px_rgba(2,6,23,0.42)] sm:text-[3.15rem] lg:text-[4.9rem]">
                  {data.headline}
                </h1>

                <p className="m-0 max-w-[56ch] text-[1.08rem] font-medium leading-[1.65] text-slate-100/92 sm:text-[1.18rem] lg:text-[1.28rem]">
                  {data.description}
                </p>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <a
                    href={data.ctaHref}
                    className="inline-flex w-full items-center justify-center rounded-[12px] bg-[#D5B223] px-6 py-3.5 text-center text-[0.9rem] font-extrabold uppercase tracking-[0.12em] text-[#0B1730] shadow-[0_12px_26px_rgba(213,178,35,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E2C241] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8E8B3] sm:w-auto sm:min-w-[190px]"
                  >
                    {data.ctaLabel}
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex w-full items-center justify-center rounded-[12px] border border-white/30 bg-white/10 px-6 py-3.5 text-center text-[0.9rem] font-bold uppercase tracking-[0.12em] text-white backdrop-blur transition duration-300 hover:border-white/60 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:min-w-[190px]"
                  >
                    Contact Us
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default HeroSection;
