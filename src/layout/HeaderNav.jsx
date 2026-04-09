import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

function HeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="relative flex w-full items-center justify-between gap-4 bg-transparent px-3 py-3 sm:px-6 lg:px-10">
        <a href="#home" aria-label="HH Consulting home" className="flex shrink-0 items-center gap-3">
          <span className="inline-grid h-11 w-11 place-items-center overflow-hidden rounded-xl border border-white/20 bg-white/10 p-1.5 backdrop-blur-[10px] sm:h-12 sm:w-12 sm:rounded-2xl sm:p-1">
            <img src="/asset/hhlogo.jpeg" alt="HH Consulting logo" className="h-full w-full object-contain" />
          </span>
        </a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-grid h-11 w-11 place-items-center rounded-xl border border-white/30 bg-[#08192D]/35 text-[#F8FBFF] backdrop-blur-[10px] transition-colors hover:bg-[#0A234A]/55 md:hidden"
        >
          <span className="flex flex-col items-center gap-1.5" aria-hidden="true">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>

        <div className="no-scrollbar hidden min-w-0 flex-1 items-center justify-end gap-3 overflow-x-auto md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative inline-flex px-4 py-2 text-[0.95rem] font-bold tracking-[0.02em] text-[#F8FBFF] transition-colors hover:text-[#F5D98A] after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </div>

        {isMenuOpen ? (
          <div className="absolute left-3 right-3 top-[calc(100%-2px)] rounded-2xl border border-brand-gray200 bg-white p-2 shadow-[0_18px_36px_rgba(13,40,74,0.16)] md:hidden">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-[0.95rem] font-bold text-brand-navy900 transition-colors hover:bg-[#F3F5F8] hover:text-[#D5B223]"
              >
                {item.label}
              </a>
            ))}
          </div>
        ) : null}
      </nav>
    </header>
  );
}

export default HeaderNav;