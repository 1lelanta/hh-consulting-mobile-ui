function TeamSection({ data, className = "" }) {
  const badgeIcon = (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3 14.6 8.2 20 9l-4 3.9.9 5.5L12 16.9 7.1 18.4 8 12.9 4 9l5.4-.8L12 3Z" />
    </svg>
  );

  function TeamCard({ member, compact = false }) {
    return (
      <article className={`rounded-[18px] border border-brand-gray200 bg-white shadow-[0_12px_28px_rgba(13,40,74,0.07)] ${compact ? "p-4" : "p-5 sm:p-6"}`}>
        <div className={`flex ${compact ? "items-center gap-4" : "flex-col items-center text-center"}`}>
          <div className={`relative shrink-0 overflow-hidden rounded-full bg-[#EEF2F7] ${compact ? "h-16 w-16" : "h-[72px] w-[72px]"}`}>
            <img src={member.image} alt={member.imageAlt} className="h-full w-full object-cover" />
          </div>

          <div className={compact ? "min-w-0 flex-1" : "mt-4"}>
            <div className={`mb-2 inline-flex items-center gap-2 rounded-full bg-[#F4EED8] px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[#B98A2A] ${compact ? "" : ""}`}>
              <span>{badgeIcon}</span>
              <span>{member.isServiceCard ? "Service Unit" : "Team Member"}</span>
            </div>

            <h3 className={`m-0 font-extrabold tracking-[-0.02em] text-brand-navy900 ${compact ? "text-[1.08rem] leading-tight" : "text-[1.4rem] leading-tight"}`}>
              {member.name}
            </h3>

            <p className={`m-0 mt-1 font-semibold ${compact ? "text-[0.94rem] text-[#D5B223]" : "text-[1rem] text-[#D5B223]"}`}>
              {member.role}
            </p>

            {member.description ? (
              <p className={`m-0 mt-3 leading-7 text-brand-gray500 ${compact ? "text-[0.92rem]" : "text-[0.98rem]"}`}>
                {member.description}
              </p>
            ) : null}
          </div>
        </div>
      </article>
    );
  }

  return (
    <section
      id="team"
      className={`animate-reveal mt-8 -mx-3 scroll-mt-28 bg-[#F3F5F8] px-3 py-14 [animation-delay:360ms] sm:-mx-6 sm:px-6 sm:py-16 lg:-mx-10 lg:px-10 lg:py-20 2xl:-mx-14 2xl:px-14 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="max-w-[860px]">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-14 bg-[#D5B223]" />
            <p className="m-0 text-[0.95rem] font-extrabold uppercase tracking-[0.14em] text-[#D5B223]">
              {data.eyebrow}
            </p>
          </div>

          <h2 className="m-0 mt-5 text-[2rem] font-extrabold leading-[1.14] tracking-[-0.02em] text-brand-navy900 sm:text-[2.45rem] lg:text-[3.3rem]">
            {data.title}
          </h2>

          <p className="m-0 mt-4 max-w-[760px] text-[1.05rem] leading-8 text-brand-gray500 sm:text-[1.1rem]">
            {data.subtitle}
          </p>
        </div>

        <div className="mt-10">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#D5B223]" />
            <p className="m-0 text-[0.92rem] font-bold uppercase tracking-[0.14em] text-brand-gray500">Leadership</p>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-2">
            {data.leadership.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#D5B223]" />
            <p className="m-0 text-[0.92rem] font-bold uppercase tracking-[0.14em] text-brand-gray500">Department Leads</p>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {data.departmentLeads.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#D5B223]" />
            <p className="m-0 text-[0.92rem] font-bold uppercase tracking-[0.14em] text-brand-gray500">
              {data.supportTitle}
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
            {data.supportTeam.map((member) => (
              <TeamCard key={member.name} member={member} compact />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {data.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-[18px] border border-brand-gray200 bg-white px-5 py-4 text-center text-[0.98rem] font-semibold text-brand-navy900 shadow-[0_10px_22px_rgba(13,40,74,0.06)]"
              >
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
