import { IconCloud } from "./InteractiveIconCloud";
import bootstrap from "../../Photos/techStackPhotos/Bootstrap.png";
const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "vercel",
  "github",
  "visualstudiocode",
  "tailwind",
  "chakra",
  "php",
  "chakraui",
  "tailwindcss",
  "bootstrap",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
