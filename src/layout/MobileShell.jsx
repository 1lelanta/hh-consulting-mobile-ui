function MobileShell({ children, className = "" }) {
  return (
    <main className={`relative w-full px-3 pb-0 sm:px-6 lg:px-10 2xl:px-14 ${className}`}>
      {children}
    </main>
  );
}

export default MobileShell;
