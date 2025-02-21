import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./style.scss";

const DistortedImage = ({imgSrc, alt, title}) => {
  const imgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { left, top, width, height } = imgRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      gsap.to(imgRef.current, {
        scale: 1.1,
        x: x * 40, // Movimento horizontal
        y: y * 40, // Movimento vertical
        rotateX: -y * 60, // Inclinação no eixo X
        rotateY: x * 60, // Inclinação no eixo Y
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(imgRef.current, {
        scale: 1,
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    imgRef.current.addEventListener("mousemove", handleMouseMove);
    imgRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      imgRef.current.removeEventListener("mousemove", handleMouseMove);
      imgRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
      <img ref={imgRef} src={imgSrc} alt={alt} title={title} className="distorted-image" />
  );
};

export default DistortedImage;
