interface ILabelInput {
  htmlFor: string;
  text: string;
}

export const LabelInput = ({ htmlFor, text }: ILabelInput) => {
  return (
    <>
      <label htmlFor={htmlFor} className="text-white">{text}</label>
    </>
  );
};
