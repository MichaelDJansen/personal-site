type TSkipLinkProps = {
  className?: string;
}

const SkipLink: React.FC<TSkipLinkProps> = ({ className }) => (
  <a
    href="#main-content"
    className={`sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
               bg-secondary text-white px-4 py-2 rounded z-50 transition-all 
               focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${className ?? ""}`}
  >
    Skip to main content
  </a>
);

export default SkipLink;