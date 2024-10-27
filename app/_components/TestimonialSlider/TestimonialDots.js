export default function TestimonialDots({ length, index, setTestimonial }) {
  return (
    <div className="flex gap-3 md:translate-y-0">
      {Array.from({ length }, (_, i) => (
        <button
          key={index + i}
          role="img"
          id={`dot-${i}`}
          className={`${
            index === i ? "bg-stone-500 hover:cursor-default" : "bg-stone-300"
          } h-2 w-2 cursor-pointer rounded-full hover:bg-stone-500 hover:transition-all hover:duration-300`}
          onClick={() => setTestimonial(i)}
          aria-label={
            index === i
              ? `You are at slide ${index + 1}`
              : `Go to slide ${i + 1}`
          }
        >
          &nbsp;
        </button>
      ))}
    </div>
  );
}
