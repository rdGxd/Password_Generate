interface INumberChecked {
  length: React.RefObject<HTMLInputElement>;
  refPass: React.RefObject<HTMLInputElement>;
}

export const NumberChecked = ({ length, refPass }: INumberChecked) => {
  if (refPass.current) {
    const result = Math.floor(
      Math.pow(10, 1) +
        Math.random() * 9 * Math.pow(10, Number(length.current?.value) - 1),
    );
    return (refPass.current.value = result.toString());
  }
};
