import { useState, useEffect } from "react";

const TextAnimate = ({frases}) => {

      const [text, setText] = useState("");
      const [currentFrasesIndex, setCurrentFrasesIndex] = useState(0);
      const [isDeleting, setIsDeleting] = useState(false);
      const [letterIndex, setLetterIndex] = useState(0);
    
      useEffect(() => {
        const currentFrase = frases[currentFrasesIndex];
    
        const timeout = setTimeout(() => {
          if (!isDeleting) {
            setText(currentFrase.substring(0, letterIndex + 1));
            setLetterIndex(letterIndex + 1);
    
            if (letterIndex + 1 === currentFrase.length) {
              setTimeout(() => setIsDeleting(true), 1000);
            }
          } else {
            setText(currentFrase.substring(0, letterIndex - 1));
            setLetterIndex(letterIndex - 1);
    
            if (letterIndex === 0) {
              setIsDeleting(false);
              setCurrentFrasesIndex((prevIndex) => (prevIndex + 1) % frases.length);
            }
          }
        }, isDeleting ? 50 : 100);
    
        return () => clearTimeout(timeout);
      }, [text, isDeleting, letterIndex, currentFrasesIndex, frases]);

      return <span>{text}</span>;
}

export default TextAnimate