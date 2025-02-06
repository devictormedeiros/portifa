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
const FloatSocial = ({ data }) => {
  return (
    <>
      <div className="fixed md:bottom-12 bottom-[8rem] right-3 z-[9999]">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full bg-primary btn-float-social">
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            {data.behance && (
              <SpeedDialAction className="hover:bg-primary mb-2">
                <a target="_blank" href={data?.behance}>
                  <FaBehance className="h-5 w-5" />
                </a>
              </SpeedDialAction>
            )}
            {data.github && (
              <SpeedDialAction className="hover:bg-primary mb-2">
                <a target="_blank" href={data?.github}>
                  <FaGithub className="h-5 w-5" />
                </a>
              </SpeedDialAction>
            )}
            {data.linkedin && (
              <SpeedDialAction className="hover:bg-primary mb-2">
                <a target="_blank" href={data?.linkedin}>
                  <FaLinkedinIn className="h-5 w-5" />
                </a>
              </SpeedDialAction>
            )}
            {data.email && (
              <SpeedDialAction className="hover:bg-primary mb-2">
                <a target="_blank" href={`mailto:${data?.email}`}>
                  <FaRegEnvelope className="h-5 w-5" />
                </a>
              </SpeedDialAction>
            )}
            {data.facebook && (
              <SpeedDialAction className="hover:bg-primary mb-2">
                <a target="_blank" href={data?.facebook}>
                  <FaFacebookF className="h-5 w-5" />
                </a>
              </SpeedDialAction>
            )}
            {data.instagram && (
              <SpeedDialAction className="hover:bg-primary mb-2">
                <a target="_blank" href={data?.instagram}>
                  <FaInstagram className="h-5 w-5" />
                </a>
              </SpeedDialAction>
            )}
            {data.whatsapp && (
              <SpeedDialAction className="hover:bg-primary mb-2">
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