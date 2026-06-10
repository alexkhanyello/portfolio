"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Accordion, AccordionItem } from "@heroui/react";

import { SectionHeader } from "@/components/about/section-header";
import { TechCategories } from "@/components/about/types";

interface SkillsProps {
  tech: TechCategories;
}

export const Skills = ({ tech }: SkillsProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    <SectionHeader icon="mdi:tools" title="Skills" />

    <Accordion selectionMode="multiple" variant="bordered">
      {Object.entries(tech).map(([category, { description, tools }]) => (
        <AccordionItem
          key={category}
          aria-label={category}
          title={
  {
    frontend: "Project Delivery",
    backend: "E-commerce & Analytics",
    uiUx: "Business Analysis",
    graphicDesign: "Stakeholder Management",
    motionDesign: "Cross-functional Collaboration",
  }[category]
}
        >
          <p className="mb-4 text-sm text-muted-foreground">{description}</p>
<div className="flex flex-wrap gap-3">
  {tools.map((tool) => (
    <div
      key={tool.name}
      className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-primary/20 bg-content1"
    >
      <Icon
        className="text-primary"
        height={18}
        icon={tool.icon}
        width={18}
      />
      <span className="text-sm">{tool.name}</span>
    </div>
  ))}
</div>
         


        </AccordionItem>
      ))}
    </Accordion>
  </motion.div>
);