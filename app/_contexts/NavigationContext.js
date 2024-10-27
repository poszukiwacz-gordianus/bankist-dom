"use client";

import { createContext, useState, useContext, useRef } from "react";
import { useScrollReveal, useSmoothNavigation } from "@/app/_hooks/hooks";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(false);
  const [opacityEl, setOpacityEl] = useState("");
  const ref = useRef();

  useSmoothNavigation();
  useScrollReveal("id", 0.15, false, "section-hidden");

  function changeOpacity(target) {
    if (!target) {
      setOpacity(false);
      setOpacityEl("");
    } else {
      setOpacityEl(target?.split("/").at(-1));
      setOpacity(true);
    }
  }

  return (
    <NavigationContext.Provider
      value={{
        isOpen,
        setIsOpen,
        opacity,
        opacityEl,
        changeOpacity,
        ref,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

function useNavigationContext() {
  const context = useContext(NavigationContext);
  if (context === undefined)
    throw new Error("StickyContext was used outside of NavigationProvider");
  return context;
}

export { NavigationProvider, useNavigationContext };
