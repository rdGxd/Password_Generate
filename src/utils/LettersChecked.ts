import { INumberChecked } from "./NumberChecked";

export const LettersChecked = ({ length, refPass }: INumberChecked) => {
  if (refPass.current) {
    const size = Number(length.current?.value);
    const s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const r = Array(size)
      .join()
      .split("")
      .map(function () {
        return s.charAt(Math.floor(Math.random() * s.length));
      })
      .join("");

    return (refPass.current.textContent = r.toString());
  }
};
