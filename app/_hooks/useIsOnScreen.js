import { useEffect } from "react";

export default function useIsOnScreen(ref, callback, callback2, options = {}) {
  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) callback();
        else callback2();
      },
      {
        root: null,
        ...options,
      },
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, callback, callback2, options]);
}
