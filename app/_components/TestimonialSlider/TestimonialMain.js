export default function TestimonialMain({ animation, title, content }) {
  return (
    <div className="xs:min-h-56 xs:px-4 xs:gap-2 flex h-80 flex-col justify-center sm:!min-h-64 sm:gap-6 sm:px-10">
      <div className="relative">
        <h3 className={`${animation} text-xl font-medium sm:ml-0 md:text-2xl`}>
          {title}
        </h3>
        <span
          className={`${animation} xs:inline absolute -left-6 top-4 hidden text-7xl leading-4 text-primary-500 sm:-left-10 sm:top-6 sm:text-[8rem] lg:-left-14 lg:top-8 lg:text-[11rem]`}
        >
          &ldquo;
        </span>
      </div>
      <p
        className={`${animation} text-sm !leading-loose sm:text-base md:text-base lg:text-base`}
      >
        {content}
      </p>
    </div>
  );
}
