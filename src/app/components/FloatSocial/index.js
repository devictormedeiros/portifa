import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";

import { PlusIcon } from "@heroicons/react/24/outline";
import {
  FaLinkedinIn,
  FaBehance,
  FaGithub,
  FaWhatsapp,
  FaRegEnvelope,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";
import { memo } from "react";
import "./style.scss";
import { useSticky } from "../../context/StickyContext";
const FloatSocial = ({ data }) => {

  const { isHeaderSticky } = useSticky(); 
  return (

    <>
      <div className={`${!isHeaderSticky ? "opacity-0 invisible z-[-99]": "opacity-100 w-auto visible"} float-social transition duration-500 fixed md:bottom-[3rem] bottom-[8rem] right-3 md:right-5 z-[39]`}>
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full bg-gray-700 button-float-social">
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            {data.behance && (
              <SpeedDialAction className="bg-gray-900 md:bg-transparent md:hover:bg-primary mb-2">
                <a target="_blank" href={data?.behance}>
                  <FaBehance className="h-5 w-5" />
                </a>
              </SpeedDialAction>
            )}
            {data.github && (
              <SpeedDialAction className="bg-gray-900 md:bg-transparent md:hover:bg-primary mb-2">
                <a target="_blank" href={data?.github}>
                  <FaGithub className="h-5 w-5" />
                </a>
              </SpeedDialAction>
            )}
            {data.linkedin && (
              <SpeedDialAction className="bg-gray-900 md:bg-transparent md:hover:bg-primary mb-2">
                <a target="_blank" href={data?.linkedin}>
                  <FaLinkedinIn className="h-5 w-5" />
                </a>
              </SpeedDialAction>
            )}
            {data.email && (
              <SpeedDialAction className="bg-gray-900 md:bg-transparent md:hover:bg-primary mb-2">
                <a target="_blank" href={`mailto:${data?.email}`}>
                  <FaRegEnvelope className="h-5 w-5" />
                </a>
              </SpeedDialAction>
            )}
            {data.facebook && (
              <SpeedDialAction className="bg-gray-900 md:bg-transparent md:hover:bg-primary mb-2">
                <a target="_blank" href={data?.facebook}>
                  <FaFacebookF className="h-5 w-5" />
                </a>
              </SpeedDialAction>
            )}
            {data.instagram && (
              <SpeedDialAction className="bg-gray-900 md:bg-transparent md:hover:bg-primary mb-2">
                <a target="_blank" href={data?.instagram}>
                  <FaInstagram className="h-5 w-5" />
                </a>
              </SpeedDialAction>
            )}
            {data.whatsapp && (
              <SpeedDialAction className="bg-gray-900 md:bg-transparent md:hover:bg-primary mb-2">
                <a target="_blank" href={data?.whatsapp}>
                  <FaWhatsapp className="h-5 w-5" />
                </a>
              </SpeedDialAction>
            )}
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </>
  );
};

export default memo(FloatSocial);