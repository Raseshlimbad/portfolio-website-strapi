import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ButtonProps as ShadcnButtonProps } from '@/components/ui/button';

// Create a new type that extends ButtonProps but modifies the variant property
interface AnimatedButtonProps extends Omit<ShadcnButtonProps, 'variant'> {
  glowColor?: string;
  hoverScale?: boolean;
  variant?: 'default' | 'outline' | 'ghost' | 'neon' | 'gradient' | 'destructive' | 'secondary' | 'link';
  gradientFrom?: string;
  gradientTo?: string;
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ 
    className, 
    children, 
    glowColor = "rgba(124, 58, 237, 0.5)",
    hoverScale = true,
    variant = 'default',
    gradientFrom = "from-purple-500",
    gradientTo = "to-pink-500",
    ...props 
  }, ref) => {
    
    const getVariantClasses = () => {
      switch (variant) {
        case 'neon':
          return `relative bg-black text-white border border-primary overflow-hidden 
                 before:absolute before:inset-0 before:bg-primary/20 before:translate-x-[-150%] hover:before:translate-x-[0%] 
                 before:transition-transform before:duration-500 before:ease-in-out before:z-[-1]`;
        case 'gradient':
          return `bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white border-none`;
        default:
          return '';
      }
    };
    
    // Determine if we should pass the variant to the Button component
    // Only pass standard variants to the Button component
    const standardVariants = ['default', 'outline', 'ghost', 'destructive', 'secondary', 'link'];
    const buttonVariant = standardVariants.includes(variant) 
      ? variant as ShadcnButtonProps['variant'] 
      : 'default';
    
    return (
      <Button
        ref={ref}
        className={cn(
          'relative transition-all duration-300',
          hoverScale && 'hover:scale-105',
          variant === 'neon' || variant === 'gradient' ? getVariantClasses() : '',
          variant === 'default' && `hover:shadow-[0_0_15px_${glowColor}]`,
          className
        )}
        variant={buttonVariant}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

AnimatedButton.displayName = 'AnimatedButton';

export { AnimatedButton };