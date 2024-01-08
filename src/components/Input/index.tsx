interface IInputValue {
  type: string;
  placeholder?: string;
  checked?: boolean;
  name: string;
  id: string;
  fn?: () => void;
}

export const InputValue = ({
  type,
  placeholder = "",
  checked = false,
  name,
  id,
  fn,
}: IInputValue) => {
  const handleClick = () => {
    if (fn) fn();
  };

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        checked={checked}
        className="ml-5"
        name={name}
        id={id}
        onChange={handleClick}
      />
    </>
  );
};
