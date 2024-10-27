import Image from "next/image";

export default function TestimonialCustomer({
  animation,
  image,
  customer,
  location,
}) {
  return (
    <div
      className={`${animation} flex w-52 gap-4 sm:w-80 sm:self-start sm:pl-10`}
    >
      <Image
        src={image}
        sizes="10vw"
        className="h-14 w-14 rounded-full lg:h-16 lg:w-16"
        alt="customer photo"
        placeholder="blur"
      />
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium sm:text-base md:text-lg">
          {customer}
        </p>
        <p className="text-xs sm:text-sm md:text-base">{location}</p>
      </div>
    </div>
  );
}
