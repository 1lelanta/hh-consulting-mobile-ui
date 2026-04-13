import { motion } from "framer-motion";
import Button from "../ui/Button";
import heroBg from "../../assets/newbg.jpeg";

function HeroSection({ data, contact }) {
  const currentSlide = {
    badge: data.subtitle,
    title: data.headline,
    description: data.description,
  };

  const currentTitleWords = String(currentSlide.title || "").trim().split(/\s+/).filter(Boolean);
  const shouldHighlightLastWord = currentTitleWords.length > 1;
  const highlightedWord = shouldHighlightLastWord ? currentTitleWords[currentTitleWords.length - 1] : "";
  const leadingHeadline = shouldHighlightLastWord ? currentTitleWords.slice(0, -1).join(" ") : currentSlide.title;

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      style={{ backgroundImage: `url(${heroBg})` }}
      className="animate-reveal relative -mx-3 min-h-screen overflow-hidden scroll-mt-28 bg-cover bg-center bg-no-repeat sm:-mx-6 lg:-mx-10 2xl:-mx-14"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-px bg-[#D5B223]/85" aria-hidden="true" />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto flex w-full max-w-[1200px] px-5 py-22 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="grid grid-cols-1 items-start gap-8 lg:gap-10">
            <motion.div
              className="max-w-[820px] pt-32 translate-y-6 sm:pt-36 sm:translate-y-8 lg:pt-44 lg:translate-y-10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <div className="space-y-6">
                {currentSlide.badge ? (
                  <p className="m-0 inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[0.78rem] font-bold uppercase tracking-[0.16em] text-[#F4D97D] backdrop-blur sm:text-[0.84rem]">
                    {currentSlide.badge}
                  </p>
                ) : null}

                <h1 className="m-0 max-w-[11ch] text-[2.55rem] font-black leading-[0.95] tracking-[-0.06em] text-white [text-shadow:0_16px_36px_rgba(2,6,23,0.5)] sm:max-w-[10ch] sm:text-[3.6rem] lg:text-[5.3rem]">
                  {leadingHeadline}
                  {highlightedWord ? (
                    <>
                      {" "}
                      <span className="text-[#F7D26A] [text-shadow:0_8px_24px_rgba(247,210,106,0.4)]">{highlightedWord}</span>
                    </>
                  ) : null}
                </h1>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <Button as={motion.a} href="#get-in-touch" className="sm:min-w-[190px]">
                    Get Consultation
                  </Button>

                  <Button as={motion.a} href="#services" variant="secondary" className="sm:min-w-[190px]">
                    View Services
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default HeroSection;
