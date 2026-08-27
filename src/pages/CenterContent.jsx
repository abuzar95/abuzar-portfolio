import React from "react";
import { Introduce } from "../components/landingPage";
import {
  ServicesSection,
  Resume,
  FeaturedProjects,
  Testimonial,
  ContactMe,
  CollapsibleSection,
} from "../components";
import { ImStatsBars2 } from "react-icons/im";
import { FaShoppingBag } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

export const CenterContent = () => {
  return (
    <div className="section-stack w-full flex justify-start items-start flex-col py-3 h-full">
      <div id="home" className="section-block w-full bg-primaryDark rounded-2xl">
        <Introduce />
      </div>

      <div id="projects" className="w-full">
        <CollapsibleSection
          badge="Portfolio"
          BadgeIcon={ImStatsBars2}
          prefix="Featured"
          postfix="Projects"
          description="Search by name or skill to find the right work fast."
          defaultOpen={false}
          hashId="projects"
        >
          <FeaturedProjects compact />
        </CollapsibleSection>
      </div>

      <div id="service" className="w-full">
        <CollapsibleSection
          badge="Services"
          BadgeIcon={FaShoppingBag}
          prefix="My"
          postfix="Services"
          description="What I offer, and the skills behind the work."
          defaultOpen={false}
          hashId="service"
        >
          <ServicesSection compact />
        </CollapsibleSection>
      </div>

      <div id="resume" className="w-full">
        <CollapsibleSection
          badge="Resume"
          BadgeIcon={IoNewspaperOutline}
          prefix="Work"
          postfix="History"
          description="Experience and education."
          defaultOpen={false}
          hashId="resume"
        >
          <Resume />
        </CollapsibleSection>
      </div>

      <div id="testimonial" className="w-full">
        <CollapsibleSection
          badge="Testimonial"
          BadgeIcon={IoChatboxEllipsesOutline}
          prefix="What"
          postfix="People Say"
          description="Words from clients on quality, delivery, and impact."
          defaultOpen={false}
          hashId="testimonial"
        >
          <Testimonial compact />
        </CollapsibleSection>
      </div>

      <div
        id="contact"
        className="section-block w-full bg-primaryDark rounded-2xl"
      >
        <ContactMe />
      </div>
    </div>
  );
};
