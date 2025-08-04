type TTagProps = {
    text: string;
    className?: string;
  };
  
  const Tag: React.FC<TTagProps>  = ({ text, className }) => (
    <span className={`inline-flex bg-primary text-black px-4 py-2 rounded-full shadow-button ${className || ''}`} role="listitem">
      {text}
    </span>
  );
  
  export default Tag;