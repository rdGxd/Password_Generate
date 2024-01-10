import React, { useRef, useState } from "react";
import { Button, InputValue, LabelInput } from "..";
import { AllChecked, BothChecked, NumberChecked } from "../../utils";

interface IForm {
  refPass: React.RefObject<HTMLHeadingElement>;
}

export const Form = ({ refPass }: IForm) => {
  const [changeCaracteres, setChangeCaracteres] = useState(true);
  const [changeNumber, setChangeNumber] = useState(true);
  const [changeLetters, setChangeLetters] = useState(true);
  const [lengthPassword, setLengthPassword] = useState("16");
  const refLength = useRef<HTMLInputElement>(null);

  const handleChangeCaracteres = () => {
    setChangeCaracteres(!changeCaracteres);
  };

  const handleChangeNumber = () => {
    setChangeNumber(!changeNumber);
  };

  const handleChangeLetters = () => {
    setChangeLetters(!changeLetters);
  };

  const handlePasswordGenerate = () => {
    if (refLength.current) {
      if (!Number(refLength.current.value)) {
        return alert("Digite um valor para o tamanho mínimo da sua senha");
      }
    }

    if (changeCaracteres && !changeNumber && !changeLetters) {
      return alert("Se quiser usar os caracteres selecione todas as opções");
    }

    if (changeCaracteres && changeNumber && !changeLetters) {
      return alert("Se quiser usar os caracteres selecione todas as opções");
    }

    if (changeCaracteres && !changeNumber && changeLetters) {
      return alert("Se quiser usar os caracteres selecione todas as opções");
    }

    if (changeLetters && changeCaracteres && changeNumber) {
      return AllChecked({ length: refLength, refPass });
    }

    if (changeLetters && changeNumber) {
      return BothChecked({ length: refLength, refPass });
    }

    if (!changeLetters && changeNumber) {
      return NumberChecked({ length: refLength, refPass });
    }

    if (!changeLetters && !changeNumber) {
      return alert("Selecione uma opção");
    }
  };

  return (
    <form action="" className="flex flex-col md:items-center">
      <div>
        <LabelInput htmlFor="tamanho" text="Tamanho da senha:" />
        <InputValue
          type="number"
          name="tamanho"
          id="tamanho"
          value={lengthPassword}
          fnSet={setLengthPassword}
          className="ml-5 w-10"
          ref1={refLength}
        />
      </div>
      <div>
        <LabelInput htmlFor="letras" text="Conter Letras:" />
        <InputValue
          type="checkbox"
          checked={changeLetters}
          name="letras"
          id="letras"
          fn={handleChangeLetters}
        />
      </div>
      <div>
        <LabelInput htmlFor="number" text="Conter Números:" />
        <InputValue
          type="checkbox"
          checked={changeNumber}
          name="number"
          id="number"
          fn={handleChangeNumber}
        />
      </div>
      <div>
        <LabelInput htmlFor="caracteres" text="Conter Caracteres:" />
        <InputValue
          type="checkbox"
          id="caracteres"
          name="caracteres"
          checked={changeCaracteres}
          fn={handleChangeCaracteres}
        />
      </div>
      <Button
        type="button"
        onClick={handlePasswordGenerate}
        text="Gerar nova senha"
      />
    </form>
  );
};
