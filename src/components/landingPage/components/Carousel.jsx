import React from "react";
import {
  FigmaLogoIcon,
  FramerLogoIcon,
  SketchLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
  VercelLogoIcon,
  NotionLogoIcon,
  DiscordLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

const LOGOS = [
  <FigmaLogoIcon width={24} height={24} className="text-slate-400" />,
  <FramerLogoIcon width={24} height={24} className="text-slate-400" />,
  <SketchLogoIcon width={24} height={24} className="text-slate-400" />,
  <TwitterLogoIcon width={24} height={24} className="text-slate-400" />,
  <GitHubLogoIcon width={24} height={24} className="text-slate-400" />,
  <VercelLogoIcon width={24} height={24} className="text-slate-400" />,
  <NotionLogoIcon width={24} height={24} className="text-slate-400" />,
  <DiscordLogoIcon width={24} height={24} className="text-slate-400" />,
  <InstagramLogoIcon width={24} height={24} className="text-slate-400" />,
  <LinkedInLogoIcon width={24} height={24} className="text-slate-400" />,
];

export const Carousel = () => {
  return (
    <div className="relative m-auto w-full  overflow-hidden  before:absolute before:left-0 before:top-0  before:h-full before:w-[100px]  before:content-[''] after:absolute after:right-0 after:top-0  after:h-full after:w-[100px] after:-scale-x-100  after:content-['']">
      <div className="animate-infinite-slider flex w-[calc(250px*10)]">
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex min-w-[100px] items-center justify-center"
            key={index}
          >  {logo}
         
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex min-w-[100px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
};
