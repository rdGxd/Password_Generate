import { useRef, useState } from "react";
import { InputValue } from "./components/Input";
import { LabelInput } from "./components/Label/input";

function App() {
  const [change, setChange] = useState(false);
  const [changeNumber, setChangeNumber] = useState(false);
  const refPass = useRef<HTMLHeadingElement>(null);
  const refLength = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    setChange(!change);
  };

  const handleChangeNumber = () => {
    setChangeNumber(!changeNumber);
  };

  const handlePasswordGenerate = () => {
    if (change && changeNumber) {
      if (refPass.current) {
        return (refPass.current.textContent = "Ambos true");
      }
    }

    if (change && !changeNumber) {
      if (refPass.current) {
        return (refPass.current.textContent = "Apenas change true");
      }
    }

    if (!change && changeNumber) {
      if (refPass.current) {
        return (refPass.current.textContent = "Apenas changeNumber true");
      }
    }

    if (!change && !changeNumber) {
      return alert("Selecione uma opção");
    }
  };

  return (
    <div className=" bg-gray-500 p-5">
      <h1 className="mb-10 text-xl" ref={refPass}>
        Gerador de password
      </h1>
      <form action="" className="flex flex-col">
        <div>
          <LabelInput htmlFor="tamanho" text="Tamanho da senha:" />
          <input
            type="number"
            max={16}
            min={8}
            name="tamanho"
            className="ml-5"
            value={8}
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
