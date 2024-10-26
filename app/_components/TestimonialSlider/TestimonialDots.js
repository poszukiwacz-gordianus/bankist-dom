export default function TestimonialDots({ length, index, setTestimonial }) {
  return (
    <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 translate-y-3 gap-3 md:translate-y-0">
      {Array.from({ length }, (_, i) => (
        <button
          key={index + i}
          role="button"
          id={`dot-${i}`}
          className={`${
            index === i ? "bg-stone-500 hover:cursor-default" : "bg-stone-300"
          } h-2 w-2 cursor-pointer rounded-full hover:bg-stone-500 hover:transition-all hover:duration-300`}
          onClick={() => setTestimonial(i)}
          onMouseOver={() => {
            // Set a temporary aria-label or accessible text on mouse hover
            document
              .getElementById(`dot-${i}`)
              .setAttribute("aria-label", `Go to slide ${i + 1}`);
          }}
          onMouseOut={() => {
            // Reset aria-label when not hovering
            document.getElementById(`dot-${i}`).removeAttribute("aria-label");
          }}
          aria-label={`Go to slide ${i + 1}`}
        >
          &nbsp;
        </button>
      ))}
    </div>
  );
}
