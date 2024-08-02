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
    <div className="relative px-24 pb-6 flex w-full items-center justify-center overflow-hidden rounded-lg">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
