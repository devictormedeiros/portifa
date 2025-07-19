import IconCss from "./IconCss";
import IconJs from "./IconJs";
import IconReact from "./IconReact";
import HtmlIcon from "./IconHtml";
import GithubIcon from "./IconGithub";
import IconPhp from "./IconPhp";
import TailwindIcon from "./IconTailwind";
import LinkedinIcon from "./IconLinkedin";
import IconNextJs from "./IconNextJs";
import WhatsIcon from "./IconWhats";
import IconSass from "./IconSass";
import IconInsta from "./IconInsta";
import IconFB from "./IconFB";

const IconsLib = ({ name }) => {
  const iconMap = {
    css: IconCss,
    js: IconJs,
    react: IconReact,
    html: HtmlIcon,
    github: GithubIcon,
    php: IconPhp,
    tailwind: TailwindIcon,
    linkedin: LinkedinIcon,
    nextjs: IconNextJs,
    whats: WhatsIcon,
    sass: IconSass,
    insta: IconInsta,
    facebook: IconFB

  };
  const IconComponent = iconMap[name];

  if (!IconComponent) return null;

  return <IconComponent />;
};

export default IconsLib;
