type TFooterProps = {
  className?: string;
}

const Footer: React.FC<TFooterProps> = ({className}) => (
  <footer className={`bg-secondary text-white px-4 w-full flex justify-center items-center ${className ?? ""}`} role="contentinfo">
    <p className="footer-text font-bold text-xs">Created by Michael David Jansen</p>
  </footer>
);

export default Footer;