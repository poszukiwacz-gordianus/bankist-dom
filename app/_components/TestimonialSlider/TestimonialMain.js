export default function TestimonialMain({ animation, title, content }) {
  return (
    <>
      <span
        className={`${animation} absolute left-0 top-2 text-7xl leading-4 text-primary-500 sm:left-8 sm:top-10 sm:text-[8rem] md:left-20 lg:left-32 lg:top-16 lg:text-[11rem]`}
      >
        &ldquo;
      </span>
      <h3
        className={`${animation} ml-6 text-sm font-medium sm:ml-0 sm:px-10 sm:text-lg md:text-2xl`}
      >
        {title}
      </h3>
      <p
        className={`${animation} text-xs !leading-loose sm:px-10 sm:text-sm md:text-base lg:text-base`}
      >
        {content}
      </p>
    </>
  );
}
