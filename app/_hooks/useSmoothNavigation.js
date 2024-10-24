import { useEffect } from "react";

export default function useSmoothNavigation() {
  useEffect(() => {
    const allLinks = document.querySelectorAll("a[href]");
    const handleLinkClick = (e) => {
      const href = e.target.closest("a")?.href.split("/").at(-1);

      if (href.startsWith("#")) {
        e.preventDefault();
        e.target.blur(); // Removes the focus from the link, hence removing the box-shadow

        if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });

        if (href !== "#") {
          const sectionEl = document.querySelector(href);
          sectionEl.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    allLinks.forEach((link) => link.addEventListener("click", handleLinkClick));
    return () =>
      allLinks.forEach((link) =>
        link.removeEventListener("click", handleLinkClick),
      );
  }, []);
}
