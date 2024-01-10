interface IButtonProps {
  type: "submit" | "reset" | "button" | undefined;
  className?: string;
  onClick: () => void;
  text: string;
}

export const Button = ({ onClick, text, type, className }: IButtonProps) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <button
      type={type}
      className={
        className
          ? className
          : "mt-5 rounded-full border border-white bg-gray-500 p-3 text-black transition hover:bg-gray-900 hover:text-white"
      }
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
