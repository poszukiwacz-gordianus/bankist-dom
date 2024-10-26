"use client";

import { createContext, useState, useContext } from "react";
import useSmoothNavigation from "../_hooks/useSmoothNavigation";
import useStickyNavigation from "../_hooks/useStickyNavigation";
import useScrollReveal from "../_hooks/useScrollReveal";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(false);
  const [opacityEl, setOpacityEl] = useState("");

  useSmoothNavigation();
  useScrollReveal("id", 0.15, false, "section-hidden");
  useStickyNavigation(sticky, setSticky, "hero");

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
        sticky,
        isOpen,
        setIsOpen,
        opacity,
        opacityEl,
        changeOpacity,
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
