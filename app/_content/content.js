/* HEADER */

export const headerContent = {
  image: {
    logo: "/img/logo.png",
    alt: "four circles that intersect each other in the center. Each circle is black and they are all positioned in a way that forms a cloverleaf shape",
    link: { link: "#", text: "home" },
  },
  navigation: [
    { link: "#features", text: "Features" },
    { link: "#operations", text: "Operations" },
    { link: "#testimonials", text: "Testimonials" },
    { link: "#modal", text: "Open Account" },
  ],
};

/* HERO */

import heroImage from "@/public/img/hero/hero.png";

export const heroContent = {
  header: (
    <>
      When <span className="highlight highlight::after">banking</span>{" "}
      <br className="xl:hidden" /> meets <br className="hidden xl:block" />{" "}
      <span className="highlight highlight::after">minimalist</span>
    </>
  ),
  description: "A simpler banking experience for a simpler life.",
  button: "Learn more ↓",
  image: heroImage,
  alt: "Collage of three images: a white computer keyboard and mouse on a white surface, a US one-dollar bill, and a green plant.",
};
