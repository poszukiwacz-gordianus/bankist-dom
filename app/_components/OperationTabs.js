"use client";

import { useState } from "react";
import { operationsContent } from "../_content/content";

export default function OperationTabs() {
  const { operations } = operationsContent;
  const [operation, setOperation] = useState(operations.at(0));
  const [active, setActive] = useState(0);

  const handleChange = (index) => {
    setOperation(operations[index]);
    setActive(index);
  };

  return (
    <div className="relative mx-auto mt-32 flex flex-col gap-4 bg-white px-6 pb-8 pt-12 sm:grid sm:grid-cols-[0.25fr_1.75fr] sm:px-12 sm:pb-12 sm:pt-16">
      <div className="absolute left-0 top-0 w-full -translate-y-1/2 cursor-pointer">
        <div className="mx-auto flex justify-around sm:justify-center sm:gap-3 md:w-[85%] lg:w-[75%] lg:justify-between">
          {operations.map((operation, i) => {
            const isActive = active === i;
            return (
              <div
                key={operation.header}
                className={`${operation.titleColor} ${isActive ? "-translate-y-1/4" : ""} rounded-full px-3 py-2 text-sm transition-all duration-300 sm:px-4 sm:py-3 md:px-8 md:text-base lg:px-12`}
                onClick={() => handleChange(i)}
              >
                <span className="font-medium">0{i + 1}</span> {operation.title}
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-span-full flex items-center justify-center gap-4 sm:grid sm:grid-cols-[0.25fr_1.75fr]">
        {operation.icon}
        <h2 className="text-sm font-medium sm:text-lg md:text-2xl">
          {operation.header}
        </h2>
      </div>

      <p className="-col-end-1 text-xs !leading-loose sm:text-sm md:text-base lg:text-base">
        {operation.content}
      </p>
    </div>
  );
}
