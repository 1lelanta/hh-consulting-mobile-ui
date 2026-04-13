import { motion, useReducedMotion } from "framer-motion";
import Button from "../ui/Button";

function MissionIcon({ type }) {
  const common = "h-6 w-6 text-[#D5B223]";

  if (type === "vision") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M2.5 12S6.5 5 12 5s9.5 7 9.5 7-4 7-9.5 7S2.5 12 2.5 12Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
      <path d="M12 2.5 4.5 6v5.2c0 4.6 3 8.8 7.5 10.3 4.5-1.5 7.5-5.7 7.5-10.3V6L12 2.5Z" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function ValueIcon({ type }) {
  const common = "h-6 w-6 text-[#D5B223]";

  if (type === "leaf") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M19 5c-7 0-12 4-12 10 0 2.8 2.2 5 5 5 6 0 10-5 10-12 0-1.7-1.3-3-3-3Z" />
        <path d="M8 16c2-3 5-5 10-7" />
      </svg>
    );
  }

  if (type === "shield") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M12 3 19 6v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Z" />
        <path d="m9.5 12 1.8 1.8 3.8-4" />
      </svg>
    );
  }

  if (type === "clock") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18" />
      <path d="M12 3a15 15 0 0 0 0 18" />
    </svg>
  );
}

function AboutSection({ data, valuesData, stats = {}, className = "" }) {
  const reduceMotion = useReducedMotion();
  const valueItems = Array.isArray(valuesData?.items) ? valuesData.items.slice(0, 6) : [];
  const statItems = [
    { value: `${stats.projects ?? 8}+`, label: "Projects completed" },
    { value: `${stats.years ?? 10}+`, label: "Years experience" },
    { value: `${stats.clients ?? 8}+`, label: "Clients served" },
    { value: `${stats.countries ?? 2}+`, label: "Countries" },
  ];

  return (
    <motion.section
      id="about-us"
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
      className={`animate-reveal relative scroll-mt-28 overflow-hidden bg-[#F8FAFC] text-brand-navy950 ${className}`}
    >
      <div
        className="absolute inset-x-0 top-0 h-[560px] bg-[linear-gradient(180deg,#081224_0%,#10192C_58%,rgba(16,25,44,0)_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px] opacity-60 [background:radial-gradient(circle_at_20%_20%,rgba(213,178,35,0.12),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(92,119,160,0.16),transparent_34%)]"
        aria-hidden="true"
      />

      <div className="relative z-10">
        <section className="mx-auto w-full max-w-[1240px] px-3 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28 2xl:px-14">
          <div className="max-w-[980px] pt-6 sm:pt-10 lg:pt-14">
            <p className="section-eyebrow text-[#F1D38A]">{data.eyebrow}</p>
            <h1 className="m-0 mt-4 text-[clamp(3.4rem,8vw,6.6rem)] font-black leading-[0.92] tracking-[-0.06em] text-white">
              About Us
            </h1>
            <p className="m-0 mt-6 max-w-[850px] text-[1.06rem] leading-8 text-white/76 sm:text-[1.14rem]">
              {data.title} is a multidisciplinary firm based in Ethiopia, dedicated to providing innovative, sustainable, and integrated solutions in architecture and engineering.
            </p>
            <p className="m-0 mt-4 max-w-[820px] text-[0.98rem] leading-7 text-white/62 sm:text-[1.04rem]">
              We combine visionary design with technical excellence to deliver impactful and resilient projects across Ethiopia and beyond.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full border border-white/14 bg-white/10 px-4 py-2 text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur">
                Architecture
              </span>
              <span className="inline-flex items-center rounded-full border border-white/14 bg-white/10 px-4 py-2 text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur">
                Engineering
              </span>
              <span className="inline-flex items-center rounded-full border border-white/14 bg-white/10 px-4 py-2 text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur">
                Supervision
              </span>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1240px] px-3 py-20 sm:px-6 sm:py-24 lg:px-10 2xl:px-14">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-14 bg-[#D5B223]" />
                <p className="section-eyebrow text-[#B18428]">Our Story</p>
              </div>

              <h2 className="m-0 mt-5 max-w-[16ch] text-[2.5rem] font-black leading-[1.02] tracking-[-0.04em] text-brand-navy950 sm:text-[3.25rem] lg:text-[4.1rem]">
                Built on precision and guided by purpose.
              </h2>

              <div className="mt-8 space-y-5 max-w-[42rem] text-[1.02rem] leading-8 text-brand-gray500 sm:text-[1.08rem]">
                <p className="m-0">
                  <strong className="font-semibold text-brand-navy950">A multidisciplinary firm based in Ethiopia,</strong> dedicated to providing <strong className="font-semibold text-brand-navy950">innovative, sustainable, and integrated solutions</strong> in architecture and engineering.
                </p>
                <p className="m-0">
                  We combine <strong className="font-semibold text-brand-navy950">visionary design</strong> with <strong className="font-semibold text-brand-navy950">technical excellence</strong> to deliver impactful and resilient projects across Ethiopia and beyond.
                </p>
              </div>

              {data.approachTitle || data.approachDescription ? (
                <article className="mt-8 rounded-[20px] border border-[#D5DEE9] bg-white px-6 py-6 shadow-[0_18px_38px_rgba(13,40,74,0.08)] sm:px-7 sm:py-7">
                  {data.approachTitle ? (
                    <h3 className="m-0 text-[1.15rem] font-extrabold leading-tight text-brand-navy950 sm:text-[1.32rem] lg:text-[1.45rem]">
                      {data.approachTitle}
                    </h3>
                  ) : null}

                  {data.approachDescription ? (
                    <p className="m-0 mt-3 max-w-[62ch] text-[0.98rem] leading-[1.75] text-brand-gray500 sm:mt-4 sm:text-[1.04rem]">
                      {data.approachDescription}
                    </p>
                  ) : null}
                </article>
              ) : null}
            </div>

            <div className="order-1 lg:order-2 lg:justify-self-end">
              {data.image ? (
                <figure className="group relative m-0 overflow-hidden rounded-[28px] border border-white/10 bg-white shadow-[0_28px_70px_rgba(2,6,23,0.16)] lg:w-[620px]">
                  <img
                    src={data.image}
                    alt={data.imageAlt || "About us image"}
                    className="block h-auto w-full max-w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,18,36,0)_0%,rgba(8,18,36,0.16)_100%)]" aria-hidden="true" />
                </figure>
              ) : null}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1240px] px-3 py-20 sm:px-6 sm:py-24 lg:px-10 2xl:px-14">
          <div className="max-w-[840px]">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-14 bg-[#D5B223]" />
              <p className="section-eyebrow text-[#B18428]">Mission &amp; Vision</p>
            </div>

            <h2 className="m-0 mt-5 text-[2rem] font-black leading-[1.06] tracking-[-0.04em] text-brand-navy950 sm:text-[2.75rem] lg:text-[3.4rem]">
              What drives our work.
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {[
              {
                type: "mission",
                title: "Mission",
                text: data.description,
              },
              {
                type: "vision",
                title: "Vision",
                text: data.approachDescription,
              },
            ].map((item) => (
              <motion.article
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
                whileHover={reduceMotion ? undefined : { y: -6, scale: 1.01 }}
                className="group relative overflow-hidden rounded-[24px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(247,249,252,0.92)_100%)] p-6 shadow-[0_18px_38px_rgba(13,40,74,0.08)] transition-all duration-300 sm:p-7"
              >
                <div className="flex items-center gap-4">
                  <div className="inline-grid h-12 w-12 place-items-center rounded-full border border-[#D5B223]/25 bg-[#F4EED8] shadow-[0_0_0_8px_rgba(213,178,35,0.06)]">
                    <MissionIcon type={item.type} />
                  </div>
                  <div>
                    <p className="m-0 text-[0.74rem] font-bold uppercase tracking-[0.18em] text-[#B18428]">{item.title}</p>
                    <h3 className="m-0 mt-1 text-[1.45rem] font-black leading-tight tracking-[-0.03em] text-brand-navy950 sm:text-[1.7rem]">
                      {item.title === "Mission" ? "Delivering enduring value." : "Setting the benchmark."}
                    </h3>
                  </div>
                </div>

                <p className="m-0 mt-5 max-w-[62ch] text-[1rem] leading-8 text-brand-gray500 sm:text-[1.05rem]">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1240px] px-3 py-20 sm:px-6 sm:py-24 lg:px-10 2xl:px-14">
          <div className="max-w-[840px]">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-14 bg-[#D5B223]" />
              <p className="section-eyebrow text-[#B18428]">Core Values</p>
            </div>

            <h2 className="m-0 mt-5 text-[2rem] font-black leading-[1.06] tracking-[-0.04em] text-brand-navy950 sm:text-[2.75rem] lg:text-[3.4rem]">
              {valuesData?.title || "Why Choose Us"}
            </h2>

            <p className="m-0 mt-4 max-w-[800px] text-[1rem] leading-8 text-brand-gray500 sm:text-[1.06rem]">
              {valuesData?.subtitle || "The principles behind every project we design, coordinate, and deliver."}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {valueItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1], delay: index * 0.06 }}
                whileHover={reduceMotion ? undefined : { y: -6, scale: 1.01 }}
                className="group relative overflow-hidden rounded-[22px] border border-[#D5DEE9] bg-white p-5 shadow-[0_16px_34px_rgba(13,40,74,0.08)] transition-all duration-300 hover:border-[#D5B223]/35 hover:shadow-[0_24px_44px_rgba(13,40,74,0.14)]"
              >
                <div className="inline-grid h-12 w-12 place-items-center rounded-2xl border border-[#D5B223]/20 bg-[#F4EED8] transition duration-300 group-hover:scale-105 group-hover:border-[#D5B223]/35">
                  <ValueIcon type={item.icon} />
                </div>

                <h3 className="m-0 mt-5 text-[1.1rem] font-extrabold leading-tight tracking-[-0.02em] text-brand-navy950">
                  {item.title}
                </h3>

                <p className="m-0 mt-3 text-[0.95rem] leading-7 text-brand-gray500">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1240px] px-3 py-20 sm:px-6 sm:py-24 lg:px-10 2xl:px-14">
          <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,#0A1020_0%,#111827_55%,#0B1730_100%)] px-6 py-8 shadow-[0_28px_70px_rgba(2,6,23,0.36)] sm:px-8 sm:py-10 lg:px-10">
            <div className="max-w-[760px]">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-14 bg-[#D5B223]" />
                <p className="section-eyebrow text-[#F1D38A]">At a glance</p>
              </div>

              <h2 className="m-0 mt-5 text-[2rem] font-black leading-[1.06] tracking-[-0.04em] text-white sm:text-[2.75rem] lg:text-[3.4rem]">
                Proven impact across projects, people, and places.
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {statItems.map((item) => (
                <motion.article
                  key={item.label}
                  whileHover={reduceMotion ? undefined : { y: -4, scale: 1.02 }}
                  transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
                  className="rounded-[20px] border border-white/10 bg-white/[0.06] px-5 py-6 shadow-[0_16px_32px_rgba(2,6,23,0.22)] backdrop-blur-sm"
                >
                  <p className="m-0 text-[clamp(2.4rem,4.2vw,3.8rem)] font-black leading-none tracking-[-0.05em] text-white">
                    {item.value}
                  </p>
                  <p className="m-0 mt-3 text-[0.82rem] font-bold uppercase tracking-[0.16em] text-white/68">
                    {item.label}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1240px] px-3 py-20 sm:px-6 sm:py-24 lg:px-10 2xl:px-14">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
            className="rounded-[28px] border border-[#D5DEE9] bg-white px-6 py-8 text-center shadow-[0_20px_42px_rgba(13,40,74,0.08)] sm:px-8 sm:py-10 lg:px-12"
          >
            <p className="section-eyebrow text-[#B18428]">Let&apos;s talk</p>
            <h2 className="m-0 mt-4 text-[2rem] font-black leading-[1.06] tracking-[-0.04em] text-brand-navy950 sm:text-[2.8rem] lg:text-[3.5rem]">
              Let&apos;s build something great together
            </h2>
            <p className="mx-auto m-0 mt-5 max-w-[720px] text-[1rem] leading-8 text-brand-gray500 sm:text-[1.06rem]">
              Bring us your next architecture or engineering challenge, and we&apos;ll shape it into a clear, practical, and premium solution.
            </p>

            <Button as={motion.a} href="#get-in-touch" className="mt-8 min-w-[210px]">
              Contact Us
            </Button>
          </motion.div>
        </section>
      </div>
    </motion.section>
  );
}

export default AboutSection;
