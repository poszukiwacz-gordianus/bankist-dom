const importAll = (requireContext) => requireContext.keys().map(requireContext);

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

/* FEATURES*/
const features = importAll(
  require.context("@/public/img/features", false, /\.(png|jpe?g|svg)$/),
);
const featureImage = features.map((img) => img.default);

import { LuMonitor, LuTrendingUp, LuCreditCard } from "react-icons/lu";

export const featuresContent = {
  header: "Everything you need in a modern bank and more.",
  subHeader: "Features",
  stepsContent: [
    {
      header: "100% digital bank",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam debitis ducimus.",
      image: featureImage[0],
      alt: "Computer monitor displaying a banking website interface.",
      icon: <LuMonitor />,
    },
    {
      header: "Watch your money grow",
      description:
        "Nesciunt quos autem dolorum voluptates cum dolores dicta fuga inventore ab? Nulla incidunt eius numquam sequi iste pariatur quibusdam!",
      image: featureImage[1],
      alt: "Growing plant",
      icon: <LuTrendingUp />,
    },
    {
      header: "Free debit card included",
      description:
        "Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim eveniet consequatur odit quam quos possimus assumenda dicta fuga inventore ab.",
      image: featureImage[2],
      alt: "Bank debit card",
      icon: <LuCreditCard />,
    },
  ],
};

/* Operations */
