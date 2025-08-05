'use client';

import React from 'react';
import Button from '../Button/Button';
import { useMagneticEffect } from '../../hooks/useMagneticEffect';

interface MagneticButtonProps extends React.ComponentProps<typeof Button> {
  magneticStrength?: number;
  magneticRadius?: number;
  children?: React.ReactNode;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
  magneticStrength = 0.3,
  magneticRadius = 120,
  className = '',
  children,
  ...buttonProps
}) => {
  const { ref, position, isActive } = useMagneticEffect({
    strength: magneticStrength,
    radius: magneticRadius,
    returnSpeed: 0.15,
  });

  const transformStyle = isActive
    ? `transform: translate3d(${position.x}px, ${position.y}px, 0)`
    : '';

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`magnetic-button-wrapper ${className}`}
      style={{
        transform: isActive ? `translate3d(${position.x}px, ${position.y}px, 0)` : 'none',
        transition: isActive ? 'none' : 'transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        willChange: isActive ? 'transform' : 'auto',
      }}
    >
      <Button {...buttonProps}>
        {children}
      </Button>
    </div>
  );
};

export default MagneticButton;