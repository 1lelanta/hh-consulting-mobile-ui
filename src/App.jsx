import { useEffect, useState } from "react";
import MobileShell from "./layout/MobileShell";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ProjectsArchivePage from "./components/sections/ProjectsArchivePage";
import ClientsSection from "./components/sections/ClientsSection";
import TeamSection from "./components/sections/TeamSection";
import ContactSection from "./components/sections/ContactSection";
import FooterSection from "./components/sections/FooterSection";
import StickyActions from "./components/sections/StickyActions";
import HeaderNav from "./layout/HeaderNav";
import { siteContent } from "./data/siteContent";

function App() {
  const [isProjectsArchive, setIsProjectsArchive] = useState(() => window.location.hash === "#all-projects");
  const [isAboutPage, setIsAboutPage] = useState(() => window.location.hash === "#about-us");
  const [isContactPage, setIsContactPage] = useState(() => window.location.hash === "#get-in-touch");

  useEffect(() => {
    const updateRoute = () => {
      setIsProjectsArchive(window.location.hash === "#all-projects");
      setIsAboutPage(window.location.hash === "#about-us");
      setIsContactPage(window.location.hash === "#get-in-touch");
    };

    updateRoute();
    window.addEventListener("hashchange", updateRoute);

    return () => window.removeEventListener("hashchange", updateRoute);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#F4F6FA_0%,#EEF2F8_100%)] px-0 pb-0 text-brand-navy950">
      <HeaderNav />
      <div className="pointer-events-none fixed inset-0 opacity-40 [background:radial-gradient(circle_at_100%_0%,rgba(190,154,90,0.20),transparent_35%),radial-gradient(circle_at_0%_10%,rgba(22,59,99,0.14),transparent_30%)]" />

      <MobileShell>
        {isProjectsArchive ? (
          <ProjectsArchivePage data={siteContent.projects} />
        ) : isAboutPage ? (
          <AboutSection data={siteContent.about} className="lg:mt-8" />
        ) : isContactPage ? (
          <ContactSection data={siteContent.contact} className="lg:mt-8" />
        ) : (
          <>
            <section>
              <HeroSection data={siteContent.hero} />
            </section>
            <ServicesSection data={siteContent.services} className="lg:mt-8" />
            <ProjectsSection data={siteContent.projects} className="lg:mt-8" />
            <ClientsSection data={siteContent.clients} className="lg:mt-8" />
            <TeamSection data={siteContent.team} className="lg:mt-8" />
          </>
        )}
        <FooterSection data={siteContent.footer} className="mt-8" />
      </MobileShell>

      <StickyActions data={siteContent.stickyActions} />
    </div>
  );
}

export default App;
