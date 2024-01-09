export interface INumberChecked {
  length: React.RefObject<HTMLInputElement>;
  refPass: React.RefObject<HTMLHeadingElement>;
}

export const NumberChecked = ({ length, refPass }: INumberChecked) => {
  if (refPass.current) {
    const result = Math.floor(
      Math.pow(10, 1) +
        Math.random() * 9 * Math.pow(10, Number(length.current?.value) - 1),
    );
    return (refPass.current.textContent = result.toString());
  }
};
