'use client';

import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface RevealSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  delay?: number;
}

const RevealSection: React.FC<RevealSectionProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  ...props
}) => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px',
  });

  return (
    <section
      ref={ref}
      className={`section-reveal ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </section>
  );
};

export default RevealSection;