type inputProps = {
  hasIcon: boolean;
  Icon?: React.ComponentType<{ className?: string }>;
  iconSize?: string;
  iconColor?: string;
  extraIconClasses?: string;
  type?: string;
  placeholder?: string;
  textIndent?: string;
  textSize: string;
  textColor: string;
  fontWeight?: string;
  rounded?: boolean;
  bgColor: string;
  outlineColor: string;
  focusOutlineColor: string;
  extraInputClasses?: string;
  extraContainerClasses?: string;
};

const Input = ({
  hasIcon,
  Icon,
  iconSize = "10",
  iconColor = "black",
  extraIconClasses = "",
  type = "text",
  placeholder = "Placeholder",
  textIndent = "10",
  textSize,
  textColor,
  fontWeight = "normal",
  rounded = false,
  bgColor,
  outlineColor,
  focusOutlineColor,
  extraInputClasses = "",
  extraContainerClasses = "",
}: inputProps) => {
  return (
    <div
      className={`items-center justify-center flex-row relative ${extraContainerClasses}`}
    >
      <span>
        {hasIcon && Icon ? (
          <Icon
            className={`w-${iconSize} absolute p-1 text-${iconColor} ${extraIconClasses}`}
          />
        ) : null}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className={`pl-${textIndent} pr-3 py-1.5 ${
          rounded ? "rounded-md" : ""
        } text-${textSize} text-${textColor} font-${fontWeight} bg-${bgColor} outline outline-${outlineColor}  focus:outline-2 focus:outline-${focusOutlineColor} flex-1 ${extraInputClasses}`}
      />
    </div>
  );
};

export default Input;
