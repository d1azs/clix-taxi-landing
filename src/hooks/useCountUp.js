import { useState, useEffect, useRef } from 'react';

export function useCountUp(endValue, duration = 1000) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    let startTime = null;
    let animationFrame = null;
    const numValue = parseFloat(endValue);
    
    // If not a number (e.g. "GDPR"), skip animation
    if (isNaN(numValue)) {
      setCount(endValue);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // easeOutSine: дуже м'яке закінчення, цифра не буде довго висіти на передостанньому значенні
            const easeProgress = Math.sin((progress * Math.PI) / 2);
            
            setCount(numValue * easeProgress);

            if (progress < 1) {
              animationFrame = requestAnimationFrame(animate);
            } else {
              setCount(numValue);
            }
          };
          animationFrame = requestAnimationFrame(animate);
          observer.disconnect(); // Animate only once per load
        }
      },
      { threshold: 0.1 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [endValue, duration]);

  if (isNaN(parseFloat(endValue))) {
    return [nodeRef, endValue];
  }

  const isFloat = endValue.toString().includes('.');
  const displayValue = isFloat ? count.toFixed(1) : Math.floor(count);

  return [nodeRef, displayValue];
}
