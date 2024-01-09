import { useRef, useState } from "react";
import { InputValue } from "./components/Input";
import { LabelInput } from "./components/Label/input";
import { AllChecked } from "./utils/AllCheckds";
import { BothChecked } from "./utils/BothChecked";
import { LettersChecked } from "./utils/LettersChecked";
import { NumberChecked } from "./utils/NumberChecked";

function App() {
  const [changeCaracteres, setChangeCaracteres] = useState(false);
  const [changeNumber, setChangeNumber] = useState(false);
  const [changeLetters, setChangeLetters] = useState(false);
  const [lengthPassword, setLengthPassword] = useState("8");
  const refPass = useRef<HTMLHeadingElement>(null);
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

    if (changeLetters && changeCaracteres && changeNumber) {
      return AllChecked({ length: refLength, refPass });
    }

    if (changeLetters && changeNumber) {
      return BothChecked({ length: refLength, refPass });
    }

    if (changeLetters && !changeNumber) {
      return LettersChecked({ length: refLength, refPass });
    }

    if (!changeLetters && changeNumber) {
      return NumberChecked({ length: refLength, refPass });
    }

    if (!changeLetters && !changeNumber) {
      return alert("Selecione uma opção");
    }
  };

  return (
    <div className=" bg-gray-500 p-5">
      <h1 ref={refPass} className="mb-5 bg-white p-5 text-2xl font-bold"></h1>

      <form action="" className="flex flex-col">
        <div>
          <LabelInput htmlFor="tamanho" text="Tamanho da senha:" />
          <input
            type="number"
            name="tamanho"
            id="tamanho"
            value={lengthPassword}
            onChange={(e) => setLengthPassword(e.currentTarget.value)}
            className="ml-5"
            ref={refLength}
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
        <div className="">
          <LabelInput htmlFor="caracteres" text="Conter Caracteres:" />
          <InputValue
            type="checkbox"
            id="caracteres"
            name="caracteres"
            checked={changeCaracteres}
            fn={handleChangeCaracteres}
          />
        </div>
        <button
          type="button"
          className="mt-5 rounded-full border border-black p-3"
          onClick={handlePasswordGenerate}
        >
          Gerar senha
        </button>
      </form>
    </div>
  );
}

export default App;
