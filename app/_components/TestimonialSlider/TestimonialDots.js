export default function TestimonialDots({ length, index, setTestimonial }) {
  return (
    <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 translate-y-3 gap-3 md:translate-y-0">
      {Array.from({ length }, (_, i) => (
        <button
          key={index + i}
          className={`${
            index === i ? "bg-stone-500 hover:cursor-default" : "bg-stone-300"
          } h-2 w-2 cursor-pointer rounded-full hover:bg-stone-500 hover:transition-all hover:duration-300`}
          onClick={() => setTestimonial(i)}
          aria-label={`Go to slide ${i + 1}`}
        >
          &nbsp;
        </button>
      ))}
    </div>
  );
}
