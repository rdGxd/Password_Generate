interface IInputValue {
  type: string;
  placeholder?: string;
  checked?: boolean;
  name: string;
  id: string;
  fn?: () => void;
  className?: string;
  value?: string;
  fnSet?: React.Dispatch<React.SetStateAction<string>>;
  ref1?: React.RefObject<HTMLInputElement>;
}

export const InputValue = ({
  type,
  placeholder = "",
  value,
  checked = true,
  name,
  id,
  ref1,
  fn,
  fnSet,
  className,
}: IInputValue) => {
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (fn) fn();
    if (fnSet) fnSet(e.currentTarget.value);
  };

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        checked={checked}
        className={className ? className : "ml-5"}
        name={name}
        id={id}
        onChange={handleClick}
        value={value}
        ref={ref1}
      />
    </>
  );
};
