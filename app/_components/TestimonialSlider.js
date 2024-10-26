"use client";

import Image from "next/image";
import { testimonialsContent } from "../_content/content";
import { Button, TestimonialDots } from "@/app/_components/Components";
import { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { useInterval } from "usehooks-ts";

export default function TestimonialSlider() {
  const { testimonials } = testimonialsContent;
  const [testimonial, setTestimonial] = useState(testimonials[0]);
  const [page, setPage] = useState(0);
  const { title, content, customer, location, image } = testimonial;
  const length = testimonials.length;
  const [animation, setAnimation] = useState("");
  const [isPlaying, setPlaying] = useState(true);

  useInterval(
    () => {
      const nextPage = (page + 1) % length;
      setTestimonial(testimonials[nextPage]);
      setPage(nextPage);
    },
    isPlaying ? 5000 : null,
  );

  const handleChange = (newPage, dir) => {
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
      setTestimonial(testimonials[newPage]);
      setPage(newPage);

      // Step 4: Reset to normal after short delay
      setTimeout(() => {
        setAnimation(
          "opacity-100 translate-x-0 transition-all duration-500 ease-in",
        );
      }, 125);
    }, duration);
  };

  return (
    <div
      className="relative mt-16"
      onMouseEnter={() => setPlaying(false)}
      onMouseLeave={() => setPlaying(true)}
    >
      <blockquote className="flex flex-col justify-between gap-4 sm:mx-auto sm:max-w-[90%] sm:justify-around sm:gap-4 sm:py-4 md:max-w-[80%] lg:px-10 lg:py-10">
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

        <div
          className={`${animation} flex w-52 items-center gap-4 self-center sm:w-80 sm:self-start sm:pl-10`}
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

        <Button
          className="absolute bottom-4 left-10 sm:bottom-1/2 sm:left-0 lg:left-10"
          onClick={() =>
            handleChange(page === 0 ? length - 1 : page - 1, "left")
          }
          ariaLabel="Go to previous testimonial"
        >
          <HiArrowLeft />
        </Button>
        <Button
          className="absolute bottom-4 right-10 sm:bottom-1/2 sm:right-0 lg:right-10"
          onClick={() => handleChange((page + 1) % length, "right")}
          ariaLabel="Go to next testimonial"
        >
          <HiArrowRight />
        </Button>

        <TestimonialDots
          length={length}
          page={page}
          onPage={(newPage) =>
            handleChange(newPage, newPage > page ? "right" : "left")
          }
        />
      </blockquote>
    </div>
  );
}
