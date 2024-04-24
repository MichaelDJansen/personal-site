type TButtonProps = {
  text: string;
  className?: string;
};

const Button: React.FC<TButtonProps>  = ({ text }) => (
  <button className="bg-primary text-white px-4 py-2 rounded-lg shadow-button">
    {text}
  </button>
);

export default Button;