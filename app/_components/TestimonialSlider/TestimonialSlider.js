"use client";

import { useRef, useState } from "react";
import { testimonialsContent } from "../../_content/content";
import {
  TestimonialCustomer,
  TestimonialMain,
  TestimonialNavigation,
} from "@/app/_components/Components";
import { useKey, useIsOnScreen, useSwipeLeftRight } from "@/app/_hooks/hooks";
import { useInterval } from "usehooks-ts";

const { testimonials } = testimonialsContent;

export default function TestimonialSlider() {
  const [testimonial, setTestimonial] = useState(testimonials[0]);
  const [index, setIndex] = useState(0);
  const [animation, setAnimation] = useState("");
  const [isPlaying, setPlaying] = useState(false);
  const [isOnMouseEnter, setIsOnMouseEnter] = useState(false);

  const { title, content, customer, location, image } = testimonial;

  const length = testimonials.length;
  const nextIndex = (index + 1) % length;
  const prevIndex = index === 0 ? length - 1 : index - 1;

  useInterval(
    () => {
      setTestimonial(testimonials[nextIndex]);
      setIndex(nextIndex);
    },
    isPlaying ? 5000 : null,
  );

  const changeTestimonial = (newIndex, dir) => {
    const duration = 150;

    // Step 1: Animate old content out
    setAnimation(
      `${dir === "left" ? "-translate-x-[50%]" : "translate-x-[50%]"} opacity-50 duration-[${duration}ms] transition-all ease-in`,
    );

    setTimeout(() => {
      // Step 2: Animate new content in
      setAnimation(
        `${dir === "left" ? "translate-x-[50%]" : "-translate-x-[50%]"} opacity-0`,
      );

      // Step 3: Change content
      setTestimonial(testimonials[newIndex]);
      setIndex(newIndex);

      // Step 4: Reset to normal after short delay
      setTimeout(() => {
        setAnimation(
          "opacity-100 translate-x-0 transition-all duration-500 ease-in",
        );
      }, 125);
    }, duration);
  };

  const handleUserInteraction = (condition) => {
    setPlaying(false);
    setTimeout(() => {
      setPlaying(true);
    }, 5000);
    changeTestimonial(condition);
  };

  useKey("keydown", "ArrowLeft", () =>
    handleUserInteraction(prevIndex, "left"),
  );
  useKey("keydown", "ArrowRight", () =>
    handleUserInteraction(nextIndex, "right"),
  );

  const { ref, touchStart, touchMove, touchEnd } = useSwipeLeftRight(
    () => handleUserInteraction(nextIndex, "left"),
    () => handleUserInteraction(prevIndex, "left"),
  );

  //If slider is visible on screen start playing slides, if slider leaves visible screen stop playing slides
  useIsOnScreen(
    ref,
    () => setPlaying(!isOnMouseEnter),
    () => setPlaying(false),
  );

  return (
    <div
      ref={ref}
      className="relative mt-16"
      onMouseEnter={() => setIsOnMouseEnter(true)}
      onMouseLeave={() => setIsOnMouseEnter(false)}
      // Touch event handlers
      onTouchStart={touchStart}
      onTouchMove={touchMove}
      onTouchEnd={touchEnd}
    >
      <blockquote className="flex flex-col justify-between gap-4 sm:mx-auto sm:max-w-[90%] sm:justify-around sm:gap-4 sm:py-4 md:max-w-[80%] lg:px-10 lg:py-10">
        <TestimonialMain
          animation={animation}
          title={title}
          content={content}
        />

        <TestimonialCustomer
          animation={animation}
          image={image}
          customer={customer}
          location={location}
        />

        <TestimonialNavigation
          changeTestimonial={changeTestimonial}
          nextIndex={nextIndex}
          prevIndex={prevIndex}
          index={index}
          length={length}
        />
      </blockquote>
    </div>
  );
}
