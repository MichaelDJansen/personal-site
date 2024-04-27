type TTagProps = {
    text: string;
    className?: string;
  };
  
  const Tag: React.FC<TTagProps>  = ({ text }) => (
    <div className="inline-flex bg-primary text-black px-4 py-2 rounded-full shadow-button">
      {text}
    </div>
  );
  
  export default Tag;