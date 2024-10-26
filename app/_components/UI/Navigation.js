"use client";

import Link from "next/link";
import { headerContent } from "../../_content/content";
import { useNavigationContext } from "../../_contexts/NavigationContext";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import useOutsideClickOrInteraction from "../../_hooks/useOutsideClickOrInteraction";
import { Modal, OpenAccount } from "@/app/_components/Components";

export default function Navigation() {
  const { isOpen, setIsOpen, opacity, opacityEl, changeOpacity } =
    useNavigationContext();

  const ref = useOutsideClickOrInteraction(() => {
    setIsOpen(false);
    changeOpacity("");
  }, ["scroll"]);

  const { navigation, button } = headerContent;

  return (
    <>
      <nav
        ref={ref}
        className={`${isOpen ? "pointer-events-auto visible z-10 translate-x-0 bg-stone-50 bg-opacity-[99%]" : "invisible translate-x-full opacity-0"} absolute left-0 top-0 flex h-screen w-full items-center justify-center transition-all duration-500 ease-in-out md:visible md:static md:h-auto md:w-auto md:translate-x-0 md:items-start md:justify-start md:opacity-100`}
      >
        <ul className="flex flex-col items-center gap-8 text-stone-800 md:flex-row md:gap-4 lg:gap-8">
          {navigation.map((nav, i) => (
            <li
              key={nav.link}
              className={`${opacity && opacityEl !== nav.link ? "opacity-50" : "opacity-100"} transition-all duration-500`}
            >
              <Link
                href={nav.link}
                className={`text-2xl transition-all duration-300 md:inline-block md:text-lg lg:text-lg`}
                onClick={() => setIsOpen(false)}
                aria-label={`Go to ${nav.text}`}
              >
                {nav.text}
              </Link>
            </li>
          ))}
          <li
            className={`${opacity && opacityEl !== "#modal" ? "opacity-50" : "opacity-100"} transition-all duration-500`}
          >
            <Modal>
              <Modal.Open open="modal">
                <Link href="#modal">
                  <button
                    className="rounded-full bg-primary-500 px-5 py-2 text-2xl transition-all duration-300 hover:bg-primary-600 md:inline-block md:text-lg lg:text-lg"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                    }}
                    aria-label={`Go to ${button}`}
                  >
                    {button}
                  </button>
                </Link>
              </Modal.Open>
              <Modal.Window name="modal">
                <OpenAccount />
              </Modal.Window>
            </Modal>
          </li>
        </ul>
      </nav>
      <button
        className="z-20 block text-4xl md:hidden"
        onClick={() => setIsOpen((b) => !b)}
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <IoCloseOutline /> : <IoMenuOutline />}
      </button>
    </>
  );
}
