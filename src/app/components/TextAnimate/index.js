import { useState, useEffect, memo } from "react";

const TextAnimate = ({ frases }) => {
  const [text, setText] = useState("");
  const [currentFrasesIndex, setCurrentFrasesIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    // Verifica se o array `frases` tem elementos
    if (!frases || frases.length === 0) {
      return;
    }

    // Obtém a frase atual com base no índice
    const currentFrase = frases[currentFrasesIndex];

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
            setCurrentFrasesIndex(
              (prevIndex) => (prevIndex + 1) % frases.length,
            );
          }
        }
      },
      isDeleting ? 50 : 70,
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, letterIndex, currentFrasesIndex, frases]);

  return <span className="uppercase content-title-h1">{text}</span>;
};

export default memo(TextAnimate);
