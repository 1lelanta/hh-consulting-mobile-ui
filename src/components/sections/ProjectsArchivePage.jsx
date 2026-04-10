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
            <p className="m-0 text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-white/82">
              {getProjectYear(project)} • {project.location}
            </p>
            <p className="m-0 mt-2 text-[0.9rem] leading-6 text-white/95 sm:text-[0.96rem] sm:leading-7">
              {project.description}
            </p>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20 border-t border-white/20 bg-[#041A33]/88 px-3 py-2 backdrop-blur-sm sm:px-4 sm:py-2.5">
          <p className="m-0 text-[0.86rem] font-extrabold uppercase tracking-[0.08em] text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35)] sm:text-[0.92rem]">
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
            <p className="section-eyebrow text-[#D5B223]">All Projects</p>
          </div>

          <h1 className="m-0 text-[1.95rem] font-black leading-[1.08] tracking-[-0.02em] text-brand-navy900 sm:text-[2.7rem] lg:text-[3.5rem]">
            Our Full Project Portfolio
          </h1>

          <p className="m-0 max-w-[68ch] text-[1rem] leading-[1.7] text-brand-gray500 sm:text-[1.08rem]">
            Explore the complete selection of architecture, engineering, infrastructure, and planning projects delivered by HH Consulting.
          </p>

          <a
            href="#projects"
            className="inline-flex rounded-full bg-[#08192D] px-5 py-3 text-[0.86rem] font-extrabold uppercase tracking-[0.1em] text-white shadow-[0_10px_22px_rgba(8,25,45,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#102949] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D5B223]"
          >
            Back to Home
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => renderProjectItem(project))}
        </div>
      </div>
    </motion.section>
  );
}

export default ProjectsArchivePage;