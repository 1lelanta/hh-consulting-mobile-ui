import { motion } from "framer-motion";

function PostProjectsCtaSection({ className = "" }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      className={`animate-reveal mt-8 -mx-3 scroll-mt-28 px-3 py-8 sm:-mx-6 sm:px-6 sm:py-10 lg:-mx-10 lg:px-10 lg:py-12 2xl:-mx-14 2xl:px-14 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="relative overflow-visible rounded-none border border-[#D5B223]/35 bg-[linear-gradient(130deg,#081223_0%,#111827_58%,#1f2937_100%)] px-6 py-12 text-center text-white shadow-[0_22px_46px_rgba(2,6,23,0.3)] sm:px-8 sm:py-14 lg:px-10 lg:py-16 min-h-[280px] sm:min-h-[320px]">
          <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#D5B223]/22 blur-2xl" aria-hidden="true" />
          <span className="pointer-events-none absolute left-0 top-0 h-12 w-12 [filter:drop-shadow(0_0_8px_rgba(213,178,35,0.35))]" aria-hidden="true">
            <span className="absolute left-0 top-0 h-full w-[2px] bg-[#D5B223]/90" />
            <span className="absolute left-0 top-0 h-[2px] w-full bg-[#D5B223]/90" />
          </span>
          <span className="pointer-events-none absolute bottom-0 right-0 h-12 w-12 [filter:drop-shadow(0_0_8px_rgba(213,178,35,0.35))]" aria-hidden="true">
            <span className="absolute bottom-0 right-0 h-full w-[2px] bg-[#D5B223]/90" />
            <span className="absolute bottom-0 right-0 h-[2px] w-full bg-[#D5B223]/90" />
          </span>
          <p className="mx-auto m-0 max-w-[22ch] text-[1.38rem] font-bold leading-tight sm:text-[1.58rem]">
            Ready to move your project forward?
          </p>
          <p className="mx-auto m-0 mt-3 max-w-[70ch] text-[1rem] leading-7 text-[#E5E7EB]">
            Book a consultation to review your goals, scope, and next steps.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-9">
            <a
              href="#get-in-touch"
              className="inline-flex items-center rounded-xl bg-[#D5B223] px-7 py-3 text-[0.8rem] font-bold uppercase tracking-[0.14em] text-[#111827] shadow-[0_14px_28px_rgba(213,178,35,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E5C64C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D5B223]"
            >
              Schedule Consultation
            </a>
            <a
              href="#team"
              className="inline-flex items-center rounded-xl border border-[#D5B223]/55 bg-transparent px-7 py-3 text-[0.8rem] font-bold uppercase tracking-[0.14em] text-[#F8D66A] transition duration-300 hover:-translate-y-0.5 hover:border-[#F8D66A]/70 hover:bg-[#D5B223]/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D5B223]"
            >
              Meet Our Team
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default PostProjectsCtaSection;
