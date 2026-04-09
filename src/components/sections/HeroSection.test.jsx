import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HeroSection from "./HeroSection";

describe("HeroSection", () => {
  it("renders the company name, Amharic name, and CTA", () => {
    render(
      <HeroSection
        data={{
          company: "HH CONSULTING ARCHITECTS & ENGINEERS PLC.",
          companyAmharic: "ኤች ኤች ኮንሰልቲንግ አርክቴክቶች እና መሀንዲሶች ሃ/የተ/የግል/ማህበር",
          subtitle: "WORLDWIDE CONSULTING",
          headline: "Engineered Excellence",
          description: "For any international projects, we are your dedicated global partner in design and construction supervision",
          ctaLabel: "Explore Projects",
          ctaHref: "#projects",
          backgroundImages: [{ src: "/asset/ali bira guesthouse.png", alt: "Hero background" }],
        }}
      />,
    );

    expect(screen.getByText("HH CONSULTING ARCHITECTS & ENGINEERS PLC.")).toBeInTheDocument();
    expect(screen.getByText("ኤች ኤች ኮንሰልቲንግ አርክቴክቶች እና መሀንዲሶች ሃ/የተ/የግል/ማህበር")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Explore Projects" })).toHaveAttribute("href", "#projects");
  });
});