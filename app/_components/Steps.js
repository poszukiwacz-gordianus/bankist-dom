import Image from "next/image";

function Steps({ children }) {
  return <div>{children}</div>;
}

function StepImage({ image, alt }) {
  <div>{/* <Image /> */}</div>;
}

function StepInformation({ step, header, description }) {
  return (
    <div>
      <p>{step}</p>
      <h3>{header}</h3>
      <p>{description}</p>
    </div>
  );
}

Steps.Image = StepImage;
Steps.Information = StepInformation;

export default Steps;
