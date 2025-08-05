'use client';

import { useEffect, useRef, useState, useCallback, useMemo } from 'react';

interface MagneticConfig {
  strength: number;    // 0.3 for subtle effect
  radius: number;      // 120px activation radius
  returnSpeed: number; // 0.15 for smooth return
}

interface MagneticPosition {
  x: number;
  y: number;
}

const defaultConfig: MagneticConfig = {
  strength: 0.3,
  radius: 120,
  returnSpeed: 0.15,
};

export const useMagneticEffect = (config: Partial<MagneticConfig> = {}) => {
  const elementRef = useRef<HTMLElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState<MagneticPosition>({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);
  const animationRef = useRef<number>();
  const targetPosition = useRef<MagneticPosition>({ x: 0, y: 0 });

  const magneticConfig = useMemo(() => ({ ...defaultConfig, ...config }), [config]);

  // Check if device supports hover (desktop)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsDesktop(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setShouldReduceMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setShouldReduceMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Calculate magnetic effect
  const calculateMagneticForce = useCallback((
    mouseX: number,
    mouseY: number,
    elementRect: DOMRect
  ): MagneticPosition => {
    const centerX = elementRect.left + elementRect.width / 2;
    const centerY = elementRect.top + elementRect.height / 2;
    
    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    if (distance > magneticConfig.radius) {
      return { x: 0, y: 0 };
    }
    
    const force = Math.max(0, 1 - distance / magneticConfig.radius);
    const magneticX = deltaX * force * magneticConfig.strength;
    const magneticY = deltaY * force * magneticConfig.strength;
    
    return { x: magneticX, y: magneticY };
  }, [magneticConfig]);

  // Smooth animation loop
  const animate = useCallback(() => {
    setPosition(currentPos => {
      const dx = targetPosition.current.x - currentPos.x;
      const dy = targetPosition.current.y - currentPos.y;
      
      if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) {
        return targetPosition.current;
      }
      
      return {
        x: currentPos.x + dx * magneticConfig.returnSpeed,
        y: currentPos.y + dy * magneticConfig.returnSpeed,
      };
    });
    
    animationRef.current = requestAnimationFrame(animate);
  }, [magneticConfig.returnSpeed]);

  // Mouse move handler
  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (!elementRef.current || !isDesktop || shouldReduceMotion) return;
    
    const rect = elementRef.current.getBoundingClientRect();
    const magneticForce = calculateMagneticForce(event.clientX, event.clientY, rect);
    
    targetPosition.current = magneticForce;
    setIsHovering(magneticForce.x !== 0 || magneticForce.y !== 0);
  }, [isDesktop, shouldReduceMotion, calculateMagneticForce]);

  // Mouse leave handler
  const handleMouseLeave = useCallback(() => {
    targetPosition.current = { x: 0, y: 0 };
    setIsHovering(false);
  }, []);

  // Setup event listeners
  useEffect(() => {
    if (!isDesktop || shouldReduceMotion) return;

    const element = elementRef.current;
    if (!element) return;

    // Start animation loop
    animationRef.current = requestAnimationFrame(animate);

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isDesktop, shouldReduceMotion, animate, handleMouseMove, handleMouseLeave]);

  return {
    ref: elementRef,
    position,
    isHovering,
    isActive: isDesktop && !shouldReduceMotion,
  };
};