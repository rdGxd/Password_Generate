import { INumberChecked } from "./NumberChecked";

export const BothChecked = ({ length, refPass }: INumberChecked) => {
  if (refPass.current) {
    const stringLength = Number(length.current?.value);
    const randomString = Array(stringLength + 1)
      .join(Math.random().toString(36).slice(2, 18))
      .slice(0, stringLength);

    return (refPass.current.textContent = randomString.toString());
  }
};
