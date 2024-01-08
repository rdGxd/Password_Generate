import { useRef, useState } from "react";
import { InputValue } from "./components/Input";
import { LabelInput } from "./components/Label/input";
import { NumberChecked } from "./utils/NumberChecked";

function App() {
  const [change, setChange] = useState(false);
  const [changeNumber, setChangeNumber] = useState(false);
  const [lengthPassword, setLengthPassword] = useState("");
  const refPass = useRef<HTMLInputElement>(null);
  const refLength = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    setChange(!change);
  };

  const handleChangeNumber = () => {
    setChangeNumber(!changeNumber);
  };

  const handlePasswordGenerate = () => {
    if (refLength.current) {
      if (
        Number(refLength.current.value) < 8 ||
        Number(refLength.current.value) > 16
      ) {
        return alert("O valor mínimo permitido é de 8 e o máximo é de 16");
      }
    }

    if (change && changeNumber) {
      if (refPass.current) {
        return (refPass.current.value = "Ambos true");
      }
    }

    if (change && !changeNumber) {
      if (refPass.current) {
        return (refPass.current.value = "Apenas change true");
      }
    }

    if (!change && changeNumber) {
      return NumberChecked({ length: refLength, refPass });
    }

    if (!change && !changeNumber) {
      return alert("Selecione uma opção");
    }
  };

  return (
    <div className=" bg-gray-500 p-5">
      <input
        type="text"
        ref={refPass}
        className="mb-10 w-fit rounded p-2 disabled:bg-white"
        defaultValue={""}
        disabled
      />

      <form action="" className="flex flex-col">
        <div>
          <LabelInput htmlFor="tamanho" text="Tamanho da senha:" />
          <input
            type="number"
            name="tamanho"
            id="tamanho"
            min={8}
            max={16}
            value={lengthPassword}
            onChange={(e) => setLengthPassword(e.currentTarget.value)}
            className="ml-5"
            ref={refLength}
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
            checked={change}
            fn={handleChange}
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
