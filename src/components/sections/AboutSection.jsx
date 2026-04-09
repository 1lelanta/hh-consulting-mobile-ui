function AboutSection({ data, className = "" }) {
  return (
    <section
      id="about"
      className={`animate-reveal relative mt-8 -mx-3 scroll-mt-28 overflow-hidden bg-[#F3F5F8] px-3 py-14 [animation-delay:120ms] sm:-mx-6 sm:px-6 sm:py-16 lg:-mx-10 lg:px-10 lg:py-20 2xl:-mx-14 2xl:px-14 ${className}`}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[58%] lg:block">
        <img src={data.image} alt="" aria-hidden="true" className="h-full w-full object-cover object-left" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08192D]/72 via-[#0B2A51]/38 to-[#F3F5F8]/88" />
      </div>

      <div className="mx-auto w-full max-w-[1320px]">
        <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div className="relative lg:min-h-[580px]">
            <div className="relative overflow-hidden rounded-[2.2rem] border border-brand-gray200/80 bg-white shadow-[0_14px_30px_rgba(13,40,74,0.09)] lg:hidden">
              <img src={data.image} alt={data.imageAlt} className="h-[320px] w-full object-cover object-center sm:h-[420px]" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08192D]/44 via-[#08192D]/12 to-transparent" />
            </div>
          </div>

          <div className="animate-reveal max-w-[740px] rounded-[2rem] border border-white/70 bg-white/94 p-6 shadow-[0_20px_42px_rgba(9,30,56,0.16)] backdrop-blur-md sm:p-8 lg:-ml-20 lg:p-10 [animation-delay:220ms]">
            <p className="m-0 text-[0.9rem] font-extrabold uppercase tracking-[0.14em] text-[#D5B223]">{data.eyebrow}</p>

            <h2 className="m-0 mt-4 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-brand-navy900 sm:text-[2.65rem] lg:text-[3.45rem]">
              {data.title}
            </h2>

            <p className="m-0 mt-6 text-[1.05rem] leading-8 text-brand-gray500 sm:text-[1.14rem] sm:leading-9">
              {data.description}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {data.stats.map((stat) => (
                <article
                  key={stat.label}
                  className="rounded-2xl border border-brand-gray200/90 bg-white px-4 py-5 shadow-[0_10px_24px_rgba(13,40,74,0.07)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_34px_rgba(13,40,74,0.12)]"
                >
                  <p className="m-0 text-[1.7rem] font-extrabold leading-none tracking-[-0.02em] text-brand-navy900 sm:text-[1.95rem]">
                    {stat.value}
                  </p>
                  <p className="m-0 mt-2 text-[0.94rem] font-medium leading-6 text-brand-gray500 sm:text-[1rem]">
                    {stat.label}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
