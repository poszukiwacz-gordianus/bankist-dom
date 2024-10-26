"use client";
import { useEffect } from "react";

export default function useKey(key, callback) {
  useEffect(() => {
    const keypress = (e) => {
      if (e.key === key) callback();
    };

    document.addEventListener("keydown", keypress);

    return () => document.removeEventListener("keydown", keypress);
  }, [key, callback]);
}
