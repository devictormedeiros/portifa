import { useState, useEffect, memo } from "react";

const TextAnimate = ({ phrases }) => {
  const [text, setText] = useState("");
  const [currentphrasesIndex, setCurrentphrasesIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    // Verifica se o array `phrases` tem elementos
    if (!phrases || phrases.length === 0) {
      return;
    }

    // Obtém a frase atual com base no índice
    const currentFrase = phrases[currentphrasesIndex];

    if (!currentFrase) {
      return; // Evita erros se `currentFrase` for undefined
    }

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentFrase.substring(0, letterIndex + 1));
          setLetterIndex(letterIndex + 1);

          if (letterIndex + 1 === currentFrase.length) {
            setTimeout(() => setIsDeleting(true), 500);
          }
        } else {
          setText(currentFrase.substring(0, letterIndex - 1));
          setLetterIndex(letterIndex - 1);

          if (letterIndex === 0) {
            setIsDeleting(false);
            setCurrentphrasesIndex(
              (prevIndex) => (prevIndex + 1) % phrases.length,
            );
          }
        }
      },
      isDeleting ? 50 : 70,
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, letterIndex, currentphrasesIndex, phrases]);

  return <span className="uppercase content-title-h1">{text}</span>;
};

export default memo(TextAnimate);
