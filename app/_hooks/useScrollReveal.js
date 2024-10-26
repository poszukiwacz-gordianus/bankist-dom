"use client";

import { useEffect } from "react";

export default function useScrollReveal(
  attributeSelector,
  threshold = 0.15,
  initiallyVisible = false,
  hiddenClass = "",
) {
  useEffect(() => {
    const elements = document.querySelectorAll(`[${attributeSelector}]`);

    const revealElement = (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.remove(hiddenClass);
        observer.unobserve(entry.target);
      });
    };

    const elementsObserver = new IntersectionObserver(revealElement, {
      root: null,
      threshold,
    });

    elements.forEach((element) => {
      elementsObserver.observe(element);

      // Check if the element is currently visible
      const rect = element.getBoundingClientRect();
      let isVisible = initiallyVisible;
      if (initiallyVisible)
        isVisible = rect.top < window.innerHeight - 50 && rect.bottom >= 0;

      // Only add `class` if the section is not currently visible
      if (!isVisible) {
        element.classList.add(hiddenClass);
      }
    });

    return () => elementsObserver.disconnect();
  }, [attributeSelector, threshold, initiallyVisible, hiddenClass]);
}
