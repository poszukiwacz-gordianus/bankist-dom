"use client";

import Image from "next/image";
import { testimonialsContent } from "../_content/content";
import { Button, TestimonialDots } from "@/app/_components/Components";
import { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

export default function TestimonialSlider() {
  const { testimonials } = testimonialsContent;
  const [testimonial, setTestimonial] = useState(testimonials[0]);
  const [page, setPage] = useState(0);
  const { title, content, customer, location, image } = testimonial;
  const length = testimonials.length;
  const [animation, setAnimation] = useState("");

  const handleChange = (newPage, dir) => {
    const duration = 300;

    // Step 1: Animate old content out
    setAnimation(
      `${dir === "left" ? "-translate-x-[50%]" : "translate-x-[50%]"} duration-[${duration}ms] opacity-0 transition-all ease-out`,
    );

    // Step 2: Wait for the animation to complete, then change content
    setTimeout(() => {
      setTestimonial(testimonials[newPage]);
      setPage(newPage);

      // Step 3: Animate new content in
      setAnimation(
        `${dir === "left" ? "translate-x-[50%]" : "-translate-x-[50%]"} opacity-0`,
      );

      // Step 4: Reset to normal after short delay
      setTimeout(() => {
        setAnimation(
          "opacity-100 translate-x-0 transition-all duration-500 ease-in",
        );
      }, 25);
    }, duration);
  };

  return (
    <div className="relative mt-16">
      <blockquote
        className={`quote-mark flex h-[14.5rem] flex-col justify-between`}
      >
        <h3
          className={`${animation} ml-6 text-sm font-medium sm:text-lg md:text-2xl`}
        >
          {title}
        </h3>
        <p
          className={`${animation} text-xs !leading-loose sm:text-sm md:text-base lg:text-base`}
        >
          {content}
        </p>

        <div
          className={`${animation} flex w-52 items-center gap-4 self-center md:pl-10`}
        >
          <Image
            src={image}
            sizes="100vw"
            className="md:h-18 md:w-18 h-14 w-14 rounded-full sm:h-16 sm:w-16"
            alt="customer photo"
          />
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium sm:text-base md:text-lg">
              {customer}
            </p>
            <p className="text-xs sm:text-sm md:text-base">{location}</p>
          </div>
        </div>

        <Button
          className="absolute bottom-4 left-10"
          onClick={() =>
            handleChange(page === 0 ? length - 1 : page - 1, "left")
          }
        >
          <HiArrowLeft />
        </Button>
        <Button
          className="absolute bottom-4 right-10"
          onClick={() => handleChange((page + 1) % length, "right")}
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
