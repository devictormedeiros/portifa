import IconCss from "./IconCss";
import IconJs from "./IconJs";
import IconReact from "./IconReact";
import IconHtml from "./IconHtml";
import IconGithub from "./IconGithub";
import IconPhp from "./IconPhp";
import IconTailwind from "./IconTailwind";
import IconLinkedin from "./IconLinkedin";
import IconNextJs from "./IconNextJs";
import IconWhats from "./IconWhats";
import IconSass from "./IconSass";
import IconInsta from "./IconInsta";
import IconFB from "./IconFB";
import IconBehance from "./IconBehance";
import IconWP from "./IconWP";
import IconEditorial from "./IconEditorial";
import IconID from "./IconID";
import IconMGMT from "./IconMGMT";
import IconPack from "./IconPack";
import IconUI from "./IconUI";
import IconUX from "./IconUX";
import IconVideo from "./IconVideo";

const IconsLib = ({ name }) => {
  const iconMap = {
    behance: IconBehance,
    css: IconCss,
    editorial: IconEditorial,
    facebook: IconFB,
    github: IconGithub,
    html: IconHtml,
    id: IconID,
    insta: IconInsta,
    js: IconJs,
    linkedin: IconLinkedin,
    mgmt: IconMGMT,
    nextjs: IconNextJs,
    pack: IconPack,
    php: IconPhp,
    react: IconReact,
    sass: IconSass,
    tailwind: IconTailwind,
    ui: IconUI,
    ux: IconUX,
    video: IconVideo,
    whats: IconWhats,
    wp: IconWP,
  };
  const IconComponent = iconMap[name];

  if (!IconComponent) return null;

  return <IconComponent />;
};

export default IconsLib;
