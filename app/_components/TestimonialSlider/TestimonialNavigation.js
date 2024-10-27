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
    <div>
      <Button
        id="sliderLeftArrow"
        role="img"
        className="absolute hidden sm:-left-4 sm:bottom-1/2 sm:block sm:-translate-x-1/2"
        onClick={(e) => {
          e.currentTarget.blur();
          changeTestimonial(prevIndex, "left");
        }}
        ariaLabel="Go to previous testimonial"
      >
        <HiArrowLeft />
      </Button>
      <Button
        id="sliderRightArrow"
        role="img"
        className="absolute hidden sm:bottom-1/2 sm:right-0 sm:block sm:translate-x-1/2"
        onClick={(e) => {
          e.currentTarget.blur();
          changeTestimonial(nextIndex, "right");
        }}
        ariaLabel="Go to next testimonial"
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
    </div>
  );
}
