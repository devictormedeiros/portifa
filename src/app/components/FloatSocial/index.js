import {
    IconButton,
    SpeedDial,
    SpeedDialHandler,
    SpeedDialContent,
    SpeedDialAction,
  } from "@material-tailwind/react";
  
  import {
    PlusIcon,
    HomeIcon,
    CogIcon,
    Square3Stack3DIcon,
  } from "@heroicons/react/24/outline";
  import { FaLinkedinIn,FaBehance, FaGithub, FaWhatsapp } from "react-icons/fa6";
const FloatSocial = () =>{
    return(
        <>
        
        <div className="fixed bottom-12 right-3 z-[9999]">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full bg-primary">
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <SpeedDialAction className="hover:bg-primary mb-2">
            <a href="#"><FaBehance className="h-5 w-5" /></a>
            </SpeedDialAction>
            <SpeedDialAction className="hover:bg-primary mb-2">
            <a href="#"><FaGithub className="h-5 w-5" /></a>
            </SpeedDialAction>
            <SpeedDialAction className="hover:bg-primary mb-2">
              <a href="#"><FaLinkedinIn className="h-5 w-5" /></a>
            </SpeedDialAction>
            <SpeedDialAction className="hover:bg-primary mb-2">
              <a href="#"><FaWhatsapp className="h-5 w-5" /></a>
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
      </>
    );
}

export default FloatSocial;