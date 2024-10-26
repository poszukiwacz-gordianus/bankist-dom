"use client";

import { useEffect } from "react";

export default function useDisableScroll(condition, padding = "17px") {
  useEffect(() => {
    if (condition) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = padding;
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.paddingRight = "0px";
    };
  }, [condition, padding]);
}
