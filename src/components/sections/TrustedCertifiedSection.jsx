import { motion, useReducedMotion } from "framer-motion";
import { certificates } from "./CertificationsSection.jsx";

function TrustedCertifiedSection({ className = "" }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="trusted-certified"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`bg-[#050816] px-5 py-16 text-white ${className}`}
    >
      <div className="mx-auto max-w-[1100px] text-center">

        {/* HEADER */}
        <p className="text-[#FACC15] uppercase tracking-widest text-sm">
          Trusted & Certified
        </p>

        <h2 className="mt-4 text-3xl font-black">
          Trusted by Industry Leaders
        </h2>

        <p className="mt-4 text-white/70 max-w-xl mx-auto">
          Our work is backed by recognized institutions and trusted organizations.
        </p>

        {/* LOGO STRIP (NOT CARDS) */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center">
          {certificates.slice(0, 6).map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center justify-center p-4 rounded-xl border border-white/10 bg-white/5 hover:border-[#FACC15]/30 transition"
            >
              <img
                src={certificate.image}
                alt={certificate.organization}
                className="h-12 object-contain opacity-80 hover:opacity-100 transition"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}

export default TrustedCertifiedSection;