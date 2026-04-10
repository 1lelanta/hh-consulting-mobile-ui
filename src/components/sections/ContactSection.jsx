import { motion } from "framer-motion";

function ContactSection({ data, className = "" }) {
  const officeAddressCard = Array.isArray(data?.contactCards)
    ? data.contactCards.find((card) => card.icon === "address")
    : null;
  const officeAddress = officeAddressCard ? officeAddressCard.lines.join(" ") : "";
  const mapSrc = officeAddress
    ? `https://www.google.com/maps?q=${encodeURIComponent(officeAddress)}&output=embed`
    : "";

  const icons = {
    phone: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.9">
        <path d="M5 4h4l2 5-2.5 1.8a16 16 0 0 0 4.2 4.2L14.5 13l5 2v4a2 2 0 0 1-2 2C10.6 21 3 13.4 3 6a2 2 0 0 1 2-2Z" />
      </svg>
    ),
    email: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.9">
        <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
        <path d="m5 8 7 5 7-5" />
      </svg>
    ),
    address: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.9">
        <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  };

  function ContactCard({ card }) {
    const isPhone = card.icon === "phone";
    const isEmail = card.icon === "email";

    function toHref(line) {
      if (isPhone) {
        return `tel:${line.replace(/[^\d+]/g, "")}`;
      }

      if (isEmail) {
        return `mailto:${line}`;
      }

      return null;
    }

    return (
      <article className="group flex h-full min-h-[154px] items-start gap-4 rounded-[18px] border border-[#E5E7EB] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-[#D5B223]/45">
        <div className="mt-0.5 inline-grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-[#E5E7EB] bg-[#F8F9FA] text-[#D5B223] transition duration-300 [filter:drop-shadow(0_0_6px_rgba(213,178,35,0.28))] group-hover:scale-[1.03] group-hover:border-[#D5B223]/45">
          {icons[card.icon]}
        </div>
        <div className="min-w-0 space-y-2">
          <p className="m-0 text-[0.8rem] font-bold uppercase tracking-[0.13em] text-[#1F2937]">{card.title}</p>
          <div className="space-y-1.5">
            {card.lines.map((line) => (
              toHref(line) ? (
                <a
                  key={line}
                  href={toHref(line)}
                  className="m-0 block break-words text-[0.98rem] leading-7 text-[#1F2937] transition hover:text-[#111827] focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D5B223]"
                >
                  {line}
                </a>
              ) : (
                <p key={line} className="m-0 break-words text-[0.98rem] leading-7 text-[#1F2937]">
                  {line}
                </p>
              )
            ))}
          </div>
        </div>
      </article>
    );
  }

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67] }}
      viewport={{ once: true, amount: 0.2 }}
      className={`animate-reveal relative mt-8 -mx-3 scroll-mt-28 overflow-hidden bg-[#F8F9FA] px-3 py-16 [animation-delay:430ms] sm:-mx-6 sm:px-6 sm:py-20 lg:-mx-10 lg:px-10 lg:py-24 2xl:-mx-14 2xl:px-14 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(229,231,235,0.7)_0%,rgba(248,249,250,0)_100%)]"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto w-full max-w-[1320px]">
        <div className="max-w-[860px]">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-14 bg-[#D5B223]" />
            <p className="section-eyebrow text-[#D5B223]">
              {data.eyebrow}
            </p>
          </div>

          <h2 className="m-0 mt-5 text-[2.2rem] font-black leading-[1.08] tracking-[-0.02em] text-[#1F2937] sm:text-[2.7rem] lg:text-[3.45rem]">
            {data.title}
          </h2>

          <p className="m-0 mt-4 max-w-[760px] text-[1.05rem] leading-8 text-[#1F2937] sm:text-[1.1rem]">{data.subtitle}</p>
        </div>

        <div className="mt-14 lg:mt-16">
          <div className="mx-auto max-w-[760px] space-y-5">
            <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {data.contactCards.map((card) => (
                <ContactCard key={card.title} card={card} />
              ))}
            </div>

            {mapSrc ? (
              <div className="overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-white shadow-[0_18px_38px_rgba(15,23,42,0.1)]">
                <div className="border-b border-[#E5E7EB] px-5 py-4 sm:px-6">
                  <p className="m-0 text-[0.82rem] font-bold uppercase tracking-[0.13em] text-[#1F2937]">
                    Office Location
                  </p>
                  <p className="m-0 mt-1 text-[0.95rem] leading-6 text-[#1F2937]">
                    {officeAddress}
                  </p>
                </div>
                <div className="h-[360px] bg-[#F3F4F6] sm:h-[420px]">
                  <iframe
                    title="HH Consulting office location on Google Maps"
                    src={mapSrc}
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
            ) : null}

            <div className="relative overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-white px-6 py-7 text-[#1F2937] shadow-[0_18px_38px_rgba(15,23,42,0.1)] sm:px-7">
              <p className="relative z-10 m-0 text-[1.42rem] font-black leading-tight sm:text-[1.62rem]">{data.cta.title}</p>
              <p className="relative z-10 m-0 mt-2 text-[1.02rem] leading-7 text-[#1F2937]">{data.cta.subtitle}</p>
              <a
                href="#contact"
                className="relative z-10 mt-6 inline-flex items-center rounded-2xl bg-[#1F2937] px-8 py-3 text-[0.85rem] font-extrabold uppercase tracking-[0.13em] text-white shadow-[0_14px_26px_rgba(15,23,42,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#111827] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D5B223]"
              >
                {data.cta.buttonLabel}
              </a>
            </div>

            <div className="pointer-events-none relative h-[130px] overflow-hidden">
              <span
                className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 font-['JetBrains_Mono',monospace] text-[250px] font-black leading-none text-transparent opacity-50"
                style={{ WebkitTextStroke: "1px rgba(31,41,55,0.28)" }}
                aria-hidden="true"
              >
                07
            const officeCoordinates = "Coordinates: 9°07'09.8\"N, 38°28'16.9\"E";
              </span>
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  );
}

export default ContactSection;
