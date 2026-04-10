import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
];

function HeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY;
      setHasScrolled(currentY > 24);

      if (isMenuOpen) {
        setIsNavVisible(true);
        lastScrollYRef.current = currentY;
        return;
      }

      if (currentY <= 16) {
        setIsNavVisible(true);
      } else if (currentY > lastScrollYRef.current + 4) {
        setIsNavVisible(false);
      } else if (currentY < lastScrollYRef.current - 4) {
        setIsNavVisible(true);
      }

      lastScrollYRef.current = currentY;
    }

    lastScrollYRef.current = window.scrollY;
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 px-2 [transition-property:transform,opacity,clip-path,filter,padding] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-4 ${
        isNavVisible
          ? "translate-y-0 opacity-100 [clip-path:circle(150%_at_50%_0%)] scale-100 blur-0"
          : "-translate-y-4 opacity-0 [clip-path:circle(10%_at_50%_-35%)] scale-[0.96] blur-[2px] pointer-events-none"
      } ${
        hasScrolled ? "pt-1.5 sm:pt-2" : "pt-2.5 sm:pt-3.5"
      }`}
    >
      <nav
        className={`mx-auto w-full max-w-[1400px] rounded-2xl border border-[#8E7A4A]/45 bg-[#372D14] backdrop-blur-xl transition-all duration-500 ${
          hasScrolled
            ? "shadow-[0_10px_22px_rgba(16,14,10,0.26),inset_0_1px_0_rgba(255,255,255,0.06)]"
            : "shadow-[0_18px_38px_rgba(16,14,10,0.34),inset_0_1px_0_rgba(255,255,255,0.1)]"
        }`}
      >
        <div
          className={`mx-auto flex w-full items-center justify-between gap-3 px-3 transition-all duration-500 sm:px-6 lg:px-8 ${
            hasScrolled ? "py-2 sm:py-2.5" : "py-3.5 sm:py-4"
          }`}
        >
          <a href="#home" aria-label="HH Consulting home" className="flex shrink-0 items-center gap-3">
            <span className="inline-grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-white/25 bg-white/90 p-1.25 shadow-[0_8px_16px_rgba(10,9,7,0.22)] sm:h-12 sm:w-12 sm:rounded-2xl sm:p-1">
              <img src="/asset/hhlogo.jpeg" alt="HH Consulting logo" className="h-full w-full object-contain" />
            </span>
            <span className="flex min-w-0 flex-col leading-none">
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#E5D39B]">Engineering & Architecture</span>
              <span className="mt-1 text-[0.94rem] font-bold tracking-[0.02em] text-white">HH CONSULTING</span>
            </span>
          </a>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-grid h-11 w-11 place-items-center rounded-xl border border-white/20 bg-white/10 text-[#F5F5F5] shadow-[0_8px_18px_rgba(8,7,4,0.3)] transition duration-300 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E5D39B] md:hidden"
          >
            <span className="flex flex-col items-center gap-1.5" aria-hidden="true">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>

          <div className="no-scrollbar hidden min-w-0 flex-1 items-center justify-end gap-1 overflow-x-auto md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative inline-flex px-3 py-2 text-[0.9rem] font-semibold uppercase tracking-[0.14em] text-[#F5F5F5] transition duration-300 hover:text-[#F4E4A0] focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4E4A0] lg:text-[0.98rem]"
              >
                {item.label}
                <span className="pointer-events-none absolute bottom-[5px] left-3 h-[1.5px] w-[calc(100%-24px)] origin-left scale-x-0 bg-[#E5D39B]/85 transition duration-300 group-hover:scale-x-100" aria-hidden="true" />
              </a>
            ))}

            <a
              href="#contact"
              className="ml-3 inline-flex border-l border-white/20 pl-4 pr-2 py-2 text-[0.84rem] font-extrabold uppercase tracking-[0.18em] text-[#F5F5F5] transition duration-300 hover:text-[#FFE9A8] focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4E4A0] lg:text-[0.9rem]"
            >
              Get Started
            </a>
          </div>

          {isMenuOpen ? (
            <div className="absolute left-2 right-2 top-[calc(100%+0.55rem)] rounded-[18px] border border-[#8E7A4A]/45 bg-[linear-gradient(170deg,rgba(63,54,34,0.98)_0%,rgba(46,40,27,0.98)_100%)] p-3 shadow-[0_18px_34px_rgba(10,9,7,0.42)] md:hidden sm:left-3 sm:right-3 sm:top-[calc(100%+0.75rem)]">
              <div className="space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between rounded-md px-2 py-2.5 text-[1rem] font-semibold uppercase tracking-[0.14em] text-[#F5F5F5] transition duration-300 hover:bg-white/5 hover:text-[#F4E4A0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4E4A0] sm:text-[1.03rem]"
                  >
                    <span>{item.label}</span>
                    <span className="text-[#F5F5F5]/70">↗</span>
                  </a>
                ))}

                <a
                  href="#contact"
                  className="mt-2 inline-flex w-full items-center justify-center border-t border-white/15 px-2 pt-3 pb-2 text-[0.9rem] font-extrabold uppercase tracking-[0.18em] text-[#F5F5F5] transition duration-300 hover:text-[#FFE9A8] focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4E4A0] sm:text-[0.94rem]"
                >
                  Get Started
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </nav>
    </header>
  );
}

export default HeaderNav;