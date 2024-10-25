const importAll = (requireContext) => requireContext.keys().map(requireContext);
import {
  LuMonitor,
  LuTrendingUp,
  LuCreditCard,
  LuUpload,
  LuHome,
} from "react-icons/lu";
import { BsPersonX } from "react-icons/bs";

/* HEADER */

export const headerContent = {
  id: "header",
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
  id: "hero",
  header: (
    <>
      When <span className="highlight highlight::after">banking</span>{" "}
      <br className="xl:hidden" /> meets <br className="hidden xl:block" />{" "}
      <span className="highlight highlight::after">minimalist</span>
    </>
  ),
  description: "A simpler banking experience for a simpler life.",
  link: { link: "#features", text: "Learn more ↓" },
  image: heroImage,
  alt: "Collage of three images: a white computer keyboard and mouse on a white surface, a US one-dollar bill, and a green plant.",
};

/* FEATURES*/
const features = importAll(
  require.context("@/public/img/features", false, /\.(png|jpe?g|svg)$/),
);
const featureImage = features.map((img) => img.default);

export const featuresContent = {
  id: "features",
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

export const operationsContent = {
  id: "operations",
  header: "Everything as simple as possible, but no simpler.",
  subHeader: "Operations",
  operations: [
    {
      title: (
        <>
          <span className="hidden sm:inline">Instant </span>Transfers
        </>
      ),
      titleColor: "bg-secondary-500",
      header: "Tranfser money to anyone, instantly! No fees, no BS.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
      icon: (
        <div className="text-secondary-500 flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl">
          <div className="bg-secondary-200 inline-block rounded-full p-3 md:p-4">
            <LuUpload />
          </div>
        </div>
      ),
    },
    {
      title: (
        <>
          <span className="hidden sm:inline">Instant </span>Loans
        </>
      ),
      titleColor: "bg-primary-500",
      header: "Buy a home or make your dreams come true, with instant loans.",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      icon: (
        <div className="text-primary-500 flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl">
          <div className="bg-primary-200 rounded-full p-3 sm:inline-block md:p-4">
            <LuHome />
          </div>
        </div>
      ),
    },
    {
      title: (
        <>
          <span className="hidden sm:inline">Instant </span>Closing
        </>
      ),
      titleColor: "bg-tertiary-600",
      header: "No longer need your account? No problem! Close it instantly.",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo.",
      icon: (
        <div className="text-tertiary-600 flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl">
          <div className="bg-tertiary-200 rounded-full p-3 sm:inline-block md:p-4">
            <BsPersonX />
          </div>
        </div>
      ),
    },
  ],
};

/* Testimonials */

const customers = importAll(
  require.context("@/public/img/testimonials", false, /\.(png|jpe?g|svg)$/),
);
const avatars = customers.map((img) => img.default);

export const testimonialsContent = {
  id: "testimonials",
  header: "Millions of Bankists are already making their lifes simpler.",
  subHeader: "Not sure yet?",
  testimonials: [
    {
      title: "Best financial decision ever!",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quas quisquam non? Quas voluptate nulla minima deleniti optio ullam nesciunt, numquam corporis et asperiores laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus id alias reiciendis, perferendis facere pariatur dolore.",
      customer: "Aarav Lynn",
      location: "San Francisco, USA",
      image: avatars[0],
    },
    {
      title: "I love it!",
      content:
        "Quisquam itaque deserunt ullam, quia ea repellendus provident, ducimus neque ipsam modi voluptatibus doloremque, corrupti laborum. Incidunt numquam perferendis veritatis neque repellendus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt exercitationem deleniti. Odio aliquam culpa.",
      customer: "Miyah Miles",
      location: "London, UK",
      image: avatars[1],
    },
    {
      title: "Finally free from old-school banks",
      content:
        "Debitis, nihil sit minus suscipit magni aperiam vel tenetur incidunt commodi architecto numquam omnis nulla autem, necessitatibus blanditiis modi similique quidem. Odio aliquam culpa dicta beatae quod maiores ipsa minus consequatur error sunt, deleniti saepe aliquid quos inventore sequi.",
      customer: "Francisco Gomes",
      location: "Lisbon, Portugal",
      image: avatars[2],
    },
  ],
};
