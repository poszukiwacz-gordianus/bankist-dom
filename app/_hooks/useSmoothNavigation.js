import { useEffect } from "react";

export default function useSmoothNavigation(offset = 0) {
  useEffect(() => {
    const allLinks = document.querySelectorAll("a[href]");
    const handleLinkClick = (e) => {
      const link = e.target.closest("a");

      if (link && link.href) {
        const href = link.href.split("/").at(-1);

        if (href.startsWith("#")) {
          e.preventDefault();
          e.target.blur(); // Removes the focus from the link, hence removing the box-shadow

          if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });

          if (href !== "#") {
            const sectionEl = document.querySelector(href);
            if (!sectionEl) return;

            const sectionPosition =
              sectionEl.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
              top: sectionPosition - offset,
              behavior: "smooth",
            });
          }
        }
      }
    };

    allLinks.forEach((link) => link.addEventListener("click", handleLinkClick));
    return () =>
      allLinks.forEach((link) =>
        link.removeEventListener("click", handleLinkClick),
      );
  }, [offset]);
}
