"use client";

import { OrbitingCircles } from "@/components/orbiting-circles";
import { SectionHeader } from "@/components/about/section-header";

const tools = [
  "Jira",
  "Confluence",
  "Agile",
  "Scrum",
  "SEO",
  "Analytics",
  "Hotjar",
  "CRM",
  "Roadmapping",
  "UAT",
];

export const ProfessionalToolkit = () => {
  return (
    <div className="mt-16">
      <SectionHeader
        icon="mdi:atom"
        title="Project Management Ecosystem"
      />

      <div className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-default-200">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-3xl font-bold">
              Alexander Khan
            </h3>

            <p className="mt-2 text-default-500">
              E-commerce • Digital Products
            </p>
          </div>
        </div>

        <OrbitingCircles
          radius={170}
          duration={35}
          className="h-full w-full"
        >
          {tools.map((tool) => (
            <div
              key={tool}
              className="
                rounded-full
                border
                border-primary/30
                bg-content1
                px-4
                py-2
                text-sm
                whitespace-nowrap
                shadow-lg
              "
            >
              {tool}
            </div>
          ))}
        </OrbitingCircles>
      </div>
    </div>
  );
};