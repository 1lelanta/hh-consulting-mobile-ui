import { motion } from "framer-motion";

function PostProjectsCtaSection({ className = "" }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      className={`animate-reveal -mx-3 scroll-mt-28 px-3 pt-0 pb-8 sm:-mx-6 sm:px-6 sm:pt-0 sm:pb-10 lg:-mx-10 lg:px-10 lg:pt-0 lg:pb-12 2xl:-mx-14 2xl:px-14 2xl:pt-0 2xl:pb-12 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="relative w-full overflow-visible rounded-none border border-[#D5B223]/35 bg-[linear-gradient(130deg,#081223_0%,#111827_58%,#1f2937_100%)] px-4 py-10 text-center text-white shadow-[0_22px_46px_rgba(2,6,23,0.3)] sm:px-8 sm:py-14 lg:px-10 lg:py-16 min-h-[280px] sm:min-h-[320px]">
          <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#D5B223]/22 blur-2xl" aria-hidden="true" />
          <span className="pointer-events-none absolute left-0 top-0 h-12 w-12 [filter:drop-shadow(0_0_8px_rgba(213,178,35,0.35))]" aria-hidden="true">
            <span className="absolute left-0 top-0 h-full w-[2px] bg-[#D5B223]/90" />
            <span className="absolute left-0 top-0 h-[2px] w-full bg-[#D5B223]/90" />
          </span>
          <span className="pointer-events-none absolute bottom-0 right-0 h-12 w-12 [filter:drop-shadow(0_0_8px_rgba(213,178,35,0.35))]" aria-hidden="true">
            <span className="absolute bottom-0 right-0 h-full w-[2px] bg-[#D5B223]/90" />
            <span className="absolute bottom-0 right-0 h-[2px] w-full bg-[#D5B223]/90" />
          </span>
          <p className="mx-0 m-0 w-full text-[1.22rem] font-bold leading-tight sm:mx-auto sm:max-w-[24ch] sm:text-[1.58rem]">
            Need a Professional Engineering Partner?
          </p>
          <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-3 sm:mt-9 sm:w-auto">
            <a
              href="#get-in-touch"
              className="inline-flex w-full items-center justify-center rounded-xl bg-[#D5B223] px-7 py-3 text-[0.8rem] font-bold uppercase tracking-[0.14em] text-[#111827] shadow-[0_14px_28px_rgba(213,178,35,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E5C64C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D5B223] sm:w-auto"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default PostProjectsCtaSection;
