import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";

function ClientLogoTile({ item }) {
  return (
    <div
      className="group flex h-[100px] w-[140px] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/90 px-5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all duration-300 hover:scale-[1.05] hover:border-[#D5B223]/40 hover:shadow-[0_18px_40px_rgba(0,0,0,0.14)] sm:h-[120px] sm:w-[170px] lg:h-[130px] lg:w-[190px]"
    >
      <img
        src={item.logoSrc}
        alt={item.name}
        className="h-[44px] w-auto max-w-full object-contain transition duration-300 group-hover:saturate-110 sm:h-[52px]"
        loading="lazy"
      />
      <span className="sr-only">{item.name}</span>
    </div>
  );
}

function ClientsSection({ data, className = "" }) {
  const reduceMotion = useReducedMotion();

  const logos = (data.logoRows || []).flatMap((row) => row.items || []);
  const marqueeLogos = [...logos, ...logos, ...logos]; // smoother loop (Stripe style)

  return (
    <motion.section
      id="clients"
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
      className={`relative mt-10 scroll-mt-28 overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-[#EEF2F7] px-5 py-20 sm:px-6 lg:px-10 lg:py-24 ${className}`}
    >
      {/* soft glow background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(213,178,35,0.12),transparent_40%)]" />

      <div className="relative mx-auto w-full max-w-[1240px]">
        {/* HEADER */}
        <div className="max-w-[900px]">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-14 bg-[#D5B223]" />
            <p className="text-[0.75rem] font-bold uppercase tracking-[0.2em] text-[#D5B223]">
              {data.eyebrow}
            </p>
          </div>

          <h2 className="mt-5 text-[1.8rem] font-bold leading-[1.1] tracking-[-0.02em] text-[#0F172A] sm:text-[2.3rem] lg:text-[3.2rem]">
            {data.title}
          </h2>

          <p className="mt-4 max-w-[720px] text-[1rem] leading-7 text-[#475569] sm:text-[1.05rem]">
            We collaborate with government, private, and industrial leaders to deliver impactful engineering solutions.
          </p>
        </div>

        {/* MARQUEE WRAPPER */}
        <div className="relative mt-12 overflow-hidden">
          {/* left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#EEF2F7] to-transparent sm:w-28" />

          {/* right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#EEF2F7] to-transparent sm:w-28" />

          {/* MARQUEE TRACK */}
          <div
            className="flex w-max items-center gap-6 sm:gap-8 lg:gap-10 animate-[marquee_32s_linear_infinite]"
          >
            {marqueeLogos.map((item, index) => (
              <ClientLogoTile key={`${item.name}-${index}`} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* KEYFRAME (Stripe-style smooth loop) */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </motion.section>
  );
}

export default ClientsSection;