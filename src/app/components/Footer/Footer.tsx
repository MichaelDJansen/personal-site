type TFooterProps = {
  className?: string;
}

const Footer: React.FC<TFooterProps> = ({className}) => (
  <div className={`bg-secondary text-white px-4 w-full flex justify-center items-center ${className ?? ""}`}>
    <h2 className="footer-text font-bold text-xs">Created by Michael David Jansen</h2>
  </div>
);

export default Footer;