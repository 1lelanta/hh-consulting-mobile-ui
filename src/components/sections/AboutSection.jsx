import { motion, useReducedMotion } from "framer-motion";
import Button from "../ui/Button";

function IconBadge({ type }) {
  const common = "h-6 w-6 text-[#FACC15]";

  if (type === "vision") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M2.5 12S6.5 5 12 5s9.5 7 9.5 7-4 7-9.5 7S2.5 12 2.5 12Z" />
        <circle cx="12" cy="12" r="3" />
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

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}

function AboutSection({ data, valuesData, stats = {}, className = "" }) {
  const reduceMotion = useReducedMotion();

  const statItems = [
    { value: `${stats.years ?? 10}+`, label: "Years Experience" },
    { value: `${stats.projects ?? 50}+`, label: "Projects Completed" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <motion.section
      id="about-us"
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7 }}
      className={`relative overflow-hidden bg-[#050816] text-white ${className}`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(250,204,21,0.08),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 py-20">

        {/* HERO */}
        <div className="max-w-[800px]">
          <p className="text-[#FACC15] uppercase tracking-widest text-sm">
            {data.eyebrow}
          </p>

          <h1 className="mt-4 text-[clamp(3rem,7vw,5rem)] font-black leading-tight">
            About Us
          </h1>

          <p className="mt-6 text-white/70 text-lg leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* STORY + IMAGE */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold">Our Story</h2>

            <p className="mt-5 text-white/70 leading-relaxed">
              We are a multidisciplinary firm based in Ethiopia delivering
              innovative, sustainable, and integrated architecture and engineering solutions.
            </p>

            <p className="mt-4 text-white/70 leading-relaxed">
              By combining design creativity with technical precision, we create
              impactful and resilient projects that stand the test of time.
            </p>

            {/* STATS */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {statItems.map((item) => (
                <div key={item.label} className="text-center">
                  <p className="text-3xl font-black">{item.value}</p>
                  <p className="text-xs uppercase text-white/60 mt-2">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {data.image && (
            <img
              src={data.image}
              alt="About"
              className="rounded-2xl shadow-xl"
            />
          )}
        </div>

        {/* MISSION & VISION */}
        <div className="mt-24 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <IconBadge type="shield" />
            <h3 className="mt-4 text-xl font-bold">Our Mission</h3>
            <p className="mt-3 text-white/70">
              To deliver high-quality architecture and engineering solutions
              that combine innovation, sustainability, and precision.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <IconBadge type="vision" />
            <h3 className="mt-4 text-xl font-bold">Our Vision</h3>
            <p className="mt-3 text-white/70">
              To become a leading firm recognized for shaping modern, sustainable,
              and impactful built environments across Africa.
            </p>
          </div>
        </div>

        {/* CORE VALUES */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold">
            {valuesData?.title || "Core Values"}
          </h2>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(valuesData?.items || []).slice(0, 4).map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-xl bg-white/5 border border-white/10"
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-white/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold">
            Let’s build something great together
          </h2>

          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Bring your next architecture or engineering project and we’ll turn it into reality.
          </p>

          <Button as={motion.a} href="#get-in-touch" className="mt-8">
            Contact Us
          </Button>
        </div>

      </div>
    </motion.section>
  );
}

export default AboutSection;