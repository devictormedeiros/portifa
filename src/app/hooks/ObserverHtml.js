import { useEffect, useState, useRef } from 'react';

const ObserverHtml = ({ threshold = 0.5, root = null, rootMargin = '0px' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const currentTarget = targetRef.current;
    if (!('IntersectionObserver' in window)) {
      console.warn("IntersectionObserver não é suportado neste navegador.");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root,
        rootMargin,
        threshold,
      }
    );

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [root, rootMargin, threshold]);

  return { isVisible, targetRef };
};

export default ObserverHtml;
