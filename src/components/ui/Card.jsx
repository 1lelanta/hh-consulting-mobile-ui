import { motion } from "framer-motion";

const defaultClassName =
  "group overflow-hidden rounded-[18px] border border-white/10 bg-white/6 shadow-[0_14px_30px_rgba(2,6,23,0.22)] transition-all duration-300 hover:-translate-y-2 hover:border-[#D5B223]/35 hover:shadow-[0_20px_34px_rgba(2,6,23,0.28)]";

function Card({ as: Component = motion.div, className = "", children, ...props }) {
  return (
    <Component className={`${defaultClassName} ${className}`} {...props}>
      {children}
    </Component>
  );
}

export default Card;