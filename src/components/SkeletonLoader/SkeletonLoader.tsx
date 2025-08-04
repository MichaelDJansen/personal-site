interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
}

const Skeleton: React.FC<SkeletonProps> = ({ 
  className = '', 
  variant = 'rectangular',
  width,
  height
}) => {
  const baseClasses = 'animate-pulse bg-gray-200';
  const variantClasses = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded'
  };

  const style = {
    width: width ? (typeof width === 'number' ? `${width}px` : width) : undefined,
    height: height ? (typeof height === 'number' ? `${height}px` : height) : undefined,
  };

  return (
    <div 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
};

// Timeline skeleton for the experience section
const TimelineSkeleton: React.FC = () => (
  <div className="animate-pulse space-y-4" aria-label="Loading work experience">
    {[...Array(3)].map((_, i) => (
      <div key={i} className="timeline-item grid grid-cols-[1fr_30px_2fr]">
        <div className="left-hand-side flex flex-col items-end text-right pr-2 space-y-2">
          <Skeleton variant="text" className="w-32" />
          <Skeleton variant="text" className="w-20" />
          <Skeleton variant="text" className="w-24" />
        </div>
        <div className="divider w-8">
          <Skeleton variant="circular" width={16} height={16} className="absolute z-10" />
          <div className="vertical-line border-l border-l-gray-300 h-full relative top-4 left-2"/>
        </div>
        <div className="right-hand-side space-y-2">
          <Skeleton variant="text" className="w-40" />
          <Skeleton variant="text" className="w-full" />
          <Skeleton variant="text" className="w-3/4" />
          <div className="flex gap-2 flex-wrap mt-2">
            {[...Array(4)].map((_, j) => (
              <Skeleton key={j} variant="rectangular" className="w-16 h-8 rounded-full" />
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
);

// Skills skeleton for the skills section
const SkillsSkeleton: React.FC = () => (
  <div className="flex flex-col items-center bg-tertiary w-full text-white rounded-2xl gap-4 p-4" aria-label="Loading skills">
    <Skeleton variant="text" className="w-24 h-8 bg-gray-300" />
    <div className="skill-names grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full">
      {[...Array(10)].map((_, i) => (
        <Skeleton key={i} variant="text" className="w-full h-6 bg-gray-300" />
      ))}
    </div>
    <div className="skills-logos flex row gap-2 flex-1 flex-wrap justify-center">
      {[...Array(8)].map((_, i) => (
        <Skeleton key={i} variant="rectangular" width={48} height={48} className="bg-gray-300" />
      ))}
    </div>
  </div>
);

export default Skeleton;
export { TimelineSkeleton, SkillsSkeleton };