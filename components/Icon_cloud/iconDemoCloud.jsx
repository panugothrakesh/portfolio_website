import React from "react";
import IconCloud from "./icon_cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "firebase",
  "vercel",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex h-screen w-full md:px-[20%] px-[95%] items-center justify-between overflow-hidden rounded-lg pb-20 pt-8 gap-14">
      <h2 className="md:text-center md:text-4xl text-2xl font-gilBold leading-tight pt-24">Skills</h2>
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
