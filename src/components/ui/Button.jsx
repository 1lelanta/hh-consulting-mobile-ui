import { motion } from "framer-motion";

const variantClasses = {
  primary:
    "bg-[#D5B223] text-[#0B1730] shadow-[0_16px_30px_rgba(213,178,35,0.24)] hover:bg-[#E5C64C] hover:shadow-[0_20px_36px_rgba(213,178,35,0.3)]",
  secondary:
    "border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/15 hover:border-white/30",
  outline:
    "border border-[#FACC15]/60 bg-transparent text-[#FACC15] hover:bg-white/5 hover:border-[#FACC15] hover:text-[#FDE047]",
};

function Button({ as: Component = motion.a, variant = "primary", className = "", children, ...props }) {
  return (
    <Component
      whileHover={{ y: -2, scale: 1.03 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
      className={`inline-flex items-center justify-center rounded-[12px] px-6 py-3.5 text-center text-[0.9rem] font-extrabold tracking-normal transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D5B223] ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Button;