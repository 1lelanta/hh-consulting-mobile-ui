import { motion } from "framer-motion";

function ProjectsArchivePage({ data }) {
  const projects = Array.isArray(data?.items) ? data.items : [];

  const getProjectYear = (project) => {
    const yearMeta = (project.meta || []).find((item) => item.label?.toLowerCase() === "year");
    return yearMeta?.value || "N/A";
  };

  const renderProjectItem = (project) => (
    <article key={project.title} className="block">
      <div className="group relative overflow-hidden">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="aspect-[4/3] w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 overflow-hidden p-4 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="pointer-events-none absolute inset-0 bg-[#041A33]/34" />
          <div className="pointer-events-none absolute inset-0 water-overlay-layer animate-water-drift opacity-45" />
          <div className="pointer-events-none absolute inset-0 water-overlay-layer animate-water-ripple opacity-35" />

          <div className="relative z-10 mt-auto rounded-[10px] bg-[#031428]/32 px-3 py-2.5 backdrop-blur-[1px]">
            <p className="m-0 text-[0.75rem] font-semibold tracking-normal text-white/82">
              {getProjectYear(project)} • {project.location}
            </p>
            <p className="m-0 mt-2 text-[0.9rem] leading-6 text-white/95 sm:text-[0.96rem] sm:leading-7">
              {project.description}
            </p>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20 border-t border-white/20 bg-[#041A33]/88 px-3 py-2 backdrop-blur-sm sm:px-4 sm:py-2.5">
          <p className="m-0 text-[0.86rem] font-extrabold tracking-normal text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35)] sm:text-[0.92rem]">
            {project.title}
          </p>
        </div>
      </div>
    </article>
  );

  return (
    <motion.section
      id="all-projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.15 }}
      className="animate-reveal -mx-3 scroll-mt-28 bg-transparent px-3 py-12 sm:-mx-6 sm:px-6 sm:py-16 lg:-mx-10 lg:px-10 lg:py-20 2xl:-mx-14 2xl:px-14"
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="max-w-[900px] space-y-4">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-14 bg-[#D5B223]" />
            <p className="section-eyebrow text-[#D5B223]">Selected Projects</p>
          </div>

          <h1 className="m-0 text-[1.95rem] font-black leading-[1.08] tracking-[-0.02em] text-brand-navy900 sm:text-[2.7rem] lg:text-[3.5rem]">
            Representative Project Collection
          </h1>

          <p className="m-0 max-w-[68ch] text-[1rem] leading-[1.7] text-brand-gray500 sm:text-[1.08rem]">
            Explore a representative selection of architecture, engineering, infrastructure, and planning work delivered by HH Consulting.
          </p>

          <a
            href="#projects"
            className="inline-flex rounded-full bg-[#08192D] px-5 py-3 text-[0.86rem] font-extrabold tracking-normal text-white shadow-[0_10px_22px_rgba(8,25,45,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#102949] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D5B223]"
          >
            Back to Home
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => renderProjectItem(project))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="relative mt-12 min-h-[280px] overflow-visible rounded-none border border-[#D5B223]/35 bg-[linear-gradient(130deg,#081223_0%,#111827_58%,#1f2937_100%)] px-6 py-12 text-center text-white shadow-[0_22px_46px_rgba(2,6,23,0.3)] sm:min-h-[320px] sm:px-8 sm:py-14 lg:px-10 lg:py-16"
        >
          <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#D5B223]/22 blur-2xl" aria-hidden="true" />
          <span className="pointer-events-none absolute left-0 top-0 h-12 w-12 [filter:drop-shadow(0_0_8px_rgba(213,178,35,0.35))]" aria-hidden="true">
            <span className="absolute left-0 top-0 h-full w-[2px] bg-[#D5B223]/90" />
            <span className="absolute left-0 top-0 h-[2px] w-full bg-[#D5B223]/90" />
          </span>
          <span className="pointer-events-none absolute bottom-0 right-0 h-12 w-12 [filter:drop-shadow(0_0_8px_rgba(213,178,35,0.35))]" aria-hidden="true">
            <span className="absolute bottom-0 right-0 h-full w-[2px] bg-[#D5B223]/90" />
            <span className="absolute bottom-0 right-0 h-[2px] w-full bg-[#D5B223]/90" />
          </span>
          <p className="mx-auto m-0 max-w-[22ch] text-[1.38rem] font-bold leading-tight sm:text-[1.58rem]">Ready to move your project forward?</p>
          <p className="mx-auto m-0 mt-3 max-w-[70ch] text-[1rem] leading-7 text-[#E5E7EB]">
            Book a consultation to review your goals, scope, and next steps.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-9">
            <a
              href="#get-in-touch"
              className="inline-flex items-center rounded-xl bg-[#D5B223] px-7 py-3 text-[0.8rem] font-bold tracking-normal text-[#111827] shadow-[0_14px_28px_rgba(213,178,35,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E5C64C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D5B223]"
            >
              Schedule Consultation
            </a>
            <a
              href="#team"
              className="inline-flex items-center rounded-xl border border-[#D5B223]/55 bg-transparent px-7 py-3 text-[0.8rem] font-bold tracking-normal text-[#F8D66A] transition duration-300 hover:-translate-y-0.5 hover:border-[#F8D66A]/70 hover:bg-[#D5B223]/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D5B223]"
            >
              Meet Our Team
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default ProjectsArchivePage;