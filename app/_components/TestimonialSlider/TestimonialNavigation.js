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
        className="absolute bottom-4 left-10 sm:bottom-1/2 sm:left-0 lg:left-10"
        onClick={() => changeTestimonial(prevIndex, "left")}
        ariaLabel="Go to previous testimonial"
      >
        <HiArrowLeft />
      </Button>
      <Button
        className="absolute bottom-4 right-10 sm:bottom-1/2 sm:right-0 lg:right-10"
        onClick={() => changeTestimonial(nextIndex, "right")}
        ariaLabel="Go to next testimonial"
      >
        <HiArrowRight />
      </Button>

      <TestimonialDots
        length={length}
        index={index}
        setTestimonial={(newIndex) =>
          changeTestimonial(
            newIndex,
            newIndex > index ? "right" : "left",
          )
        }
      />
    </>
  );
}
