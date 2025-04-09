
'use client'

import React, { useEffect, useState, FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-in' | 'slide-up' | 'scale-in' | 'blur-in' | 'rotate-in';
}

const AnimatedText: FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  animation = 'fade-in'
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    switch (animation) {
      case 'fade-in':
        return 'animate-fade-in';
      case 'slide-up':
        return 'animate-slide-up';
      case 'scale-in':
        return 'animate-scale-in';
      case 'blur-in':
        return 'animate-blur-in';
      case 'rotate-in':
        return 'animate-rotate-in';
      default:
        return 'animate-fade-in';
    }
  };

  return (
    <div 
      className={cn(
        'transition-all duration-700 will-change-transform', 
        getAnimationClass(), 
        className
      )}
    >
      {text}
    </div>
  );
};

export default AnimatedText;
