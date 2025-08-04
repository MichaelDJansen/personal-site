interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ isOpen, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`relative w-8 h-8 flex flex-col justify-center items-center md:hidden focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded ${className}`}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
    >
      <span
        className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-out ${
          isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1.5'
        }`}
      />
      <span
        className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-out ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <span
        className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-out ${
          isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1.5'
        }`}
      />
    </button>
  );
};

export default HamburgerButton;