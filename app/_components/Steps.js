import Image from "next/image";

function Steps({ children }) {
  return (
    <div className="grid grid-cols-1 items-center gap-9 sm:grid-cols-2 md:mt-20">
      {children}
    </div>
  );
}

function StepImage({ image, alt }) {
  return (
    <div className="relative flex translate-y-6 items-center justify-center sm:translate-y-0">
      <Image
        src={image}
        alt={alt}
        width={500}
        height={300}
        className="h-auto w-screen"
        sizes="(max-width: 544px) 100vw, 50vw"
        placeholder="blur"
      />
    </div>
  );
}

function StepInformation({ header, description, icon }) {
  return (
    <div className="flex flex-col gap-2 sm:gap-4 md:px-10 lg:px-20">
      <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-2 md:gap-3 lg:gap-6">
        <p className="rounded-full bg-primary-300 p-3 text-2xl text-primary-500 sm:text-3xl lg:text-4xl">
          {icon}
        </p>
        <h3 className="text-base font-medium leading-none sm:text-lg xl:text-xl">
          {header}
        </h3>
      </div>
      <p className="text-xs leading-loose md:text-sm lg:text-base">
        {description}
      </p>
    </div>
  );
}

Steps.Image = StepImage;
Steps.Information = StepInformation;

export default Steps;
