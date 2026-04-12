function MobileShell({ children, className = "" }) {
  return (
    <main className={`relative flex w-full flex-col gap-10 px-3 pb-0 sm:gap-12 sm:px-6 lg:gap-14 lg:px-10 2xl:px-14 ${className}`}>
      {children}
    </main>
  );
}

export default MobileShell;
