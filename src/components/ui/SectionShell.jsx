import { motion } from "framer-motion";

function SectionShell({
  id,
  className = "",
  toneClassName = "bg-[#050816]",
  children,
  ...props
}) {
  return (
    <motion.section
      id={id}
      className={`animate-reveal relative -mx-3 scroll-mt-28 px-3 py-section text-white sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10 lg:py-sectionLg 2xl:-mx-14 2xl:px-14 ${toneClassName} ${className}`}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export default SectionShell;