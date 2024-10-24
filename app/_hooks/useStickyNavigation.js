import { useEffect } from "react";

export default function useStickyNavigation(value, callback, section) {
  return useEffect(() => {
    const handleScroll = () => {
      const sectionHeight = document.getElementById(section).offsetHeight;
      if (window.scrollY > sectionHeight) {
        callback(true);
      } else {
        callback(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [value, callback, section]);
}
