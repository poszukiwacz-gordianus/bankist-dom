"use client";

import { useEffect } from "react";

function getScrollbarWidth() {
  // Create a temporary div element
  const scrollDiv = document.createElement("div");

  // Apply styles to ensure it has a scrollbar
  scrollDiv.style.width = "100px";
  scrollDiv.style.height = "100px";
  scrollDiv.style.overflow = "scroll";
  scrollDiv.style.position = "absolute";
  scrollDiv.style.top = "-9999px"; // Hide it off-screen

  // Append the div to the body
  document.body.appendChild(scrollDiv);

  // Measure the scrollbar width
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

  // Remove the temporary div from the DOM
  document.body.removeChild(scrollDiv);

  return scrollbarWidth;
}

export default function useDisableScroll(condition, ref) {
  useEffect(() => {
    // Element which needs to prevent orginall width
    const elementToFixed = ref.current;
    const initialPadding =
      parseFloat(window.getComputedStyle(elementToFixed).paddingRight) || 0;

    const scrollWidth = getScrollbarWidth();

    const applyStyles = (
      htmlOverflow,
      bodyOverflow,
      padding,
      elementPadding,
    ) => {
      document.documentElement.style.overflow = htmlOverflow;
      document.body.style.overflow = bodyOverflow;
      document.body.style.paddingRight = padding;

      if (elementToFixed) {
        elementToFixed.style.paddingRight = elementPadding;
      }
    };
    const resetStyles = () => applyStyles("", "", "0px", "");

    condition
      ? applyStyles(
          "hidden",
          "hidden",
          `${scrollWidth}px`,
          `${scrollWidth + initialPadding}px`,
        )
      : resetStyles();

    return () => resetStyles();
  }, [condition, ref]);
}
