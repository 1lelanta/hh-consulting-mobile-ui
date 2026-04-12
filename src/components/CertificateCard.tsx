import { motion } from "framer-motion";

export type CertificateItem = {
  title: string;
  organization: string;
  description: string;
  image: string;
  alt: string;
};

type CertificateCardProps = {
  certificate: CertificateItem;
  index: number;
};

function CertificateCard({ certificate, index }: CertificateCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1], delay: index * 0.08 }}
      className="group overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_22px_40px_rgba(15,23,42,0.16)]"
    >
      <div className="relative overflow-hidden">
        <img
          src={certificate.image}
          alt={certificate.alt}
          className="h-56 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 sm:h-60"
        />
      </div>

      <div className="flex h-full flex-col p-5 sm:p-6">
        <p className="m-0 text-[0.75rem] font-bold uppercase tracking-[0.18em] text-[#B18428]">
          {certificate.organization}
        </p>
        <h3 className="m-0 mt-3 text-[1.05rem] font-extrabold leading-snug text-brand-navy900 sm:text-[1.12rem]">
          {certificate.title}
        </h3>
        <p className="m-0 mt-3 text-[0.94rem] leading-7 text-brand-gray500">
          {certificate.description}
        </p>

        <div className="mt-6">
          <a
            href={certificate.image}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-brand-navy900 px-5 py-2.5 text-[0.82rem] font-bold uppercase tracking-[0.12em] text-white transition duration-300 hover:bg-[#0F2746] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D5B223] focus-visible:ring-offset-2"
          >
            View Certificate
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default CertificateCard;