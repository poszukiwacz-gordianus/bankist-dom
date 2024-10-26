import { Button, TestimonialDots } from "@/app/_components/Components";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

export default function TestimonialNavigation({
  changeTestimonial,
  nextIndex,
  prevIndex,
  index,
  length,
}) {
  return (
    <>
      <Button
        id="sliderLeftArrow"
        className="absolute hidden sm:bottom-1/2 sm:left-0 sm:block lg:left-10"
        onClick={(e) => {
          e.currentTarget.blur();
          changeTestimonial(prevIndex, "left");
        }}
        ariaLabel="Go to previous testimonial"
        onMouseOver={() => {
          // Set a temporary aria-label or accessible text on mouse hover
          document
            .getElementById(`sliderLeftArrow`)
            .setAttribute("aria-label", `Go to previous testimonial`);
        }}
        onMouseOut={() => {
          // Reset aria-label when not hovering
          document
            .getElementById(`sliderLeftArrow`)
            .removeAttribute("aria-label");
        }}
      >
        <HiArrowLeft />
      </Button>
      <Button
        id="sliderRightArrow"
        className="absolute hidden sm:bottom-1/2 sm:right-0 sm:block lg:right-10"
        onClick={(e) => {
          e.currentTarget.blur();
          changeTestimonial(nextIndex, "right");
        }}
        ariaLabel="Go to next testimonial"
        onMouseOver={() => {
          // Set a temporary aria-label or accessible text on mouse hover
          document
            .getElementById(`sliderRightArrow`)
            .setAttribute("aria-label", `Go to next testimonial`);
        }}
        onMouseOut={() => {
          // Reset aria-label when not hovering
          document
            .getElementById(`sliderRightArrow`)
            .removeAttribute("aria-label");
        }}
      >
        <HiArrowRight />
      </Button>

      <TestimonialDots
        length={length}
        index={index}
        setTestimonial={(newIndex) =>
          changeTestimonial(newIndex, newIndex > index ? "right" : "left")
        }
      />
    </>
  );
}
