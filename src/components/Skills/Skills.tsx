'use client';

import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface SkillsProps {
  skills: string[];
  className?: string;
}

const Skills: React.FC<SkillsProps> = ({ skills, className = '' }) => {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.3,
    rootMargin: '0px',
  });

  return (
    <div 
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full text-center ${className}`}
    >
      {skills.map((skill, index) => (
        <p 
          key={index} 
          className={`${isVisible ? 'skill-text' : 'opacity-0'}`}
        >
          {skill}
        </p>
      ))}
    </div>
  );
};

export default Skills;