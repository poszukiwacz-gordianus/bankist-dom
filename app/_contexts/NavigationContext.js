"use client";

import { createContext, useState, useContext } from "react";
import useSmoothNavigation from "../_hooks/useSmoothNavigation";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(false);
  const [opacityEl, setOpacityEl] = useState("");

  useSmoothNavigation(sticky, setSticky, "hero");

  return (
    <NavigationContext.Provider
      value={{
        sticky,
        setSticky,
        isOpen,
        setIsOpen,
        opacity,
        setOpacity,
        opacityEl,
        setOpacityEl,
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
