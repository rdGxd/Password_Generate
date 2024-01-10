import { useRef } from "react";
import { Form } from "./components";

function App() {
  const refPass = useRef<HTMLHeadingElement>(null);

  return (
    <div className="flex justify-center ">
      <div className=" mt-52 w-fit rounded-lg  bg-gray-500 p-4 md:w-fit ">
        <h1
          ref={refPass}
          className="mb-5 bg-white p-5 text-center text-2xl font-bold md:w-full"
        />

        <Form refPass={refPass} />
      </div>
    </div>
  );
}

export default App;
