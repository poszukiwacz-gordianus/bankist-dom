"use client";

import { useContext, cloneElement, useState, createContext } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import useOutsideClickOrInteraction from "../../_hooks/useOutsideClickOrInteraction";
import useKey from "@/app/_hooks/useKey";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const close = () => {
    setIsVisible(false);
    setTimeout(() => setOpenName(""), 500);
  };

  const open = (name) => {
    setOpenName(name);
    setTimeout(() => setIsVisible(true), 100);
  };

  useKey("keydown", "Escape", close);

  return (
    <ModalContext.Provider value={{ openName, open, close, isVisible }}>
      {children}
    </ModalContext.Provider>
  );
}

function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined)
    throw new Error("Context used outside Context Provider");

  return context;
}

function Open({ children, open: openWindowName }) {
  const { open } = useModal();

  return cloneElement(children, { onClick: () => open(openWindowName) });
}

function Window({ children, name }) {
  const { openName, close, isVisible } = useModal();
  const ref = useOutsideClickOrInteraction(close);

  if (name !== openName) return null;

  // Adjust CSS based on visibility state
  const modalClasses = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 -translate-y-10";

  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm transition-all duration-300 ease-in-out ${modalClasses}`}
    >
      <div
        className={`relative max-w-96 bg-stone-50 px-6 pb-8 pt-16 shadow-md transition-all duration-300 ease-in-out sm:max-w-[400px] md:max-w-[500px] ${modalClasses}`}
        ref={ref}
      >
        <button
          className="absolute right-3 top-1 translate-x-3 rounded-sm bg-none p-2 transition-all duration-200"
          onClick={close}
        >
          <HiXMark className="h-10 w-10 text-gray-500 hover:text-gray-800" />
        </button>
        <div>{cloneElement(children, { close })}</div>
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
