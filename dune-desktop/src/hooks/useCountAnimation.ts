import { useState, useEffect } from 'react';

interface UseCountAnimationProps {
  targetValue: number;
  duration?: number;
  startValue?: number;
  trigger?: boolean;
}

const useCountAnimation = ({ 
  targetValue, 
  duration = 2000, 
  startValue = 0,
  trigger = true
}: UseCountAnimationProps) => {
  const [count, setCount] = useState(startValue);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!trigger || hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const currentCount = Math.floor(startValue + (targetValue - startValue) * progress);
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setHasStarted(true);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [targetValue, duration, startValue, trigger, hasStarted]);

  return count;
};

export default useCountAnimation; 