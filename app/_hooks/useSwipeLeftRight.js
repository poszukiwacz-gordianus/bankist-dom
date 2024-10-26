"use client";

import { useRef } from "react";

export default function useSwipeLeftRight(callbackLeft, callbackRight) {
  const touchStartRef = useRef(0);
  const touchEndRef = useRef(0);

  const ref = useRef();

  const touchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const touchMove = (e) => {
    touchEndRef.current = e.touches[0].clientX;
  };

  const touchEnd = () => {
    const difference = touchStartRef.current - touchEndRef.current;

    // If the swipe was left
    if (difference > 50) {
      callbackLeft();
    }
    // If the swipe was right
    else if (difference < -50) {
      callbackRight();
    }
  };

  return { ref, touchStart, touchMove, touchEnd };
}
