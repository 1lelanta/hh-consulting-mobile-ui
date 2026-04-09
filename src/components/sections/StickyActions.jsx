function StickyActions({ data }) {
  const sortedActions = [...data].sort((a, b) => (a.variant === "active" ? -1 : 1) - (b.variant === "active" ? -1 : 1));

  return (
    <nav
      aria-label="Quick contact actions"
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3"
    >
      {sortedActions.map((action) => {
        const active = action.variant === "active";

        return (
          <a
            key={action.label}
            href={action.href}
            className={[
              "flex items-center justify-center text-center font-semibold shadow-[0_12px_24px_rgba(6,19,36,0.20)] transition-all duration-300 hover:-translate-y-0.5",
              active
                ? "min-w-[188px] rounded-2xl bg-[#D5B223] px-5 py-4 text-[0.96rem] text-white"
                : "rounded-full bg-brand-navy900 px-4 py-3 text-[0.9rem] text-white",
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
