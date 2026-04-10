import { motion } from "framer-motion";

function ProjectsArchivePage({ data }) {
  const projects = Array.isArray(data?.items) ? data.items : [];

  const getProjectYear = (project) => {
    const yearMeta = (project.meta || []).find((item) => item.label?.toLowerCase() === "year");
    return yearMeta?.value || "N/A";
  };

  const renderProjectItem = (project) => (
    <article key={project.title} className="group overflow-hidden rounded-[18px] bg-white shadow-[0_12px_28px_rgba(13,40,74,0.1)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(13,40,74,0.15)]">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="aspect-[4/3] w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.02)_0%,rgba(2,6,23,0.1)_100%)]" />
      </div>

      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="m-0 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#B18428]">{project.category}</p>
            <h3 className="m-0 mt-2 text-[1.05rem] font-extrabold leading-[1.25] text-brand-navy900 sm:text-[1.12rem]">
              {project.title}
            </h3>
          </div>
          <span className="shrink-0 rounded-full bg-[#F4F7FB] px-3 py-1 text-[0.74rem] font-semibold text-brand-gray500">
            {getProjectYear(project)}
          </span>
        </div>

        <p className="m-0 text-[0.95rem] leading-7 text-brand-gray500">{project.description}</p>

        <div className="flex flex-wrap gap-2 pt-1">
          <span className="rounded-full bg-[#F4F7FB] px-3 py-1 text-[0.78rem] font-semibold text-brand-navy900">{project.location}</span>
          {(project.meta || []).slice(0, 2).map((item) => (
            <span key={`${project.title}-${item.label}`} className="rounded-full bg-[#FFF6DD] px-3 py-1 text-[0.78rem] font-semibold text-brand-navy900">
              {item.label}: {item.value}
            </span>
          ))}
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