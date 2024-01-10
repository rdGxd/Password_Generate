import { INumberChecked } from "./NumberChecked";

export const AllChecked = ({ length, refPass }: INumberChecked) => {
  if (refPass.current) {
    const size = Number(length.current?.value);
    const s =
      "{}[]!@#$%^&*()abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
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