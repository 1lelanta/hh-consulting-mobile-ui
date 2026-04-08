function StickyActions({ data }) {
  return (
    <nav
      aria-label="Quick contact actions"
      className="fixed bottom-4 left-1/2 z-40 grid w-[calc(100%-1.5rem)] max-w-[366px] -translate-x-1/2 grid-cols-2 gap-3 lg:left-auto lg:right-8 lg:w-[170px] lg:grid-cols-1 lg:translate-x-0 lg:gap-3"
    >
      {data.map((action) => {
        const active = action.variant === "active";

        return (
          <a
            key={action.label}
            href={action.href}
            className={[
              "flex items-center justify-center rounded-2xl px-4 py-4 text-center text-[0.95rem] font-semibold shadow-[0_12px_24px_rgba(6,19,36,0.20)]",
              active
                ? "bg-[#D5B223] text-white"
                : "bg-brand-navy900 text-white",
            ].join(" ")}
          >
            {action.label}
          </a>
        );
      })}
    </nav>
  );
}

export default StickyActions;
