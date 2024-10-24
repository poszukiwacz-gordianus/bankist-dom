import { useEffect } from "react";

const isValid = (value) => {
  if (isNaN(value)) {
    console.warn("Not a number, provide number or string Xpx or X%");
    return false;
  }
  if (value > window.innerHeight) {
    console.warn("Value is greater than window.innerHeight");
    return false;
  }
  return true;
};

export default function useSmoothNavigation(value = 0) {
  let offset;
  let type;

  if (typeof value === "number") offset = value;
  if (typeof value === "string") {
    offset = Number.parseInt(value);
    type = value.includes("px") ? "px" : value.includes("%") ? "%" : undefined;

    if (type === "%") offset = (window.innerHeight * offset) / 100;
  }

  if (typeof window !== "undefined" && !isValid(offset)) return;

  useEffect(() => {
    const allLinks = document.querySelectorAll("a[href]");
    const handleLinkClick = (e) => {
      e.preventDefault();
      const link = e.target.closest("a");

      if (link && link.href) {
        const href = link.href.split("/").at(-1);

        if (href.startsWith("#")) {
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
  }, [value, type]);
}
