type ButtonProps = {
  textColor: string;
  bgColor: string;
  rounded?: boolean;
  textSize: string;
  text: string;
  extraClasses?: string;
  onClick: () => void;
};

const Button = ({
  textColor,
  bgColor,
  rounded = false,
  textSize,
  text,
  extraClasses = "",
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`text-${textColor} bg-${bgColor} ${
        rounded ? "rounded-md" : ""
      } text-${textSize} ${extraClasses} px-2 py-1 cursor-pointer`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default Button;
