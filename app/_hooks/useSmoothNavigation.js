import { useEffect } from "react";

export default function useSmoothNavigation(value, callback, section) {
  useEffect(() => {
    const allLinks = document.querySelectorAll("a[href]");
    allLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");

        if (href.startsWith("#")) {
          e.preventDefault();
          link.blur(); // Removes the focus from the link, hence removing the box-shadow

          if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });

          if (href !== "#") {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    });
  }, []);

  useEffect(() => {
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
