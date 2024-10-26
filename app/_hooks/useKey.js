"use client";

import { useEffect } from "react";

export default function useKey(keyEvent = "keydown", key, callback) {
  useEffect(() => {
    const clean = () => document.removeEventListener(keyEvent, keypress);

    const keypress = (e) => {
      if (e.key === key) callback();
      clean();
    };

    document.addEventListener(keyEvent, keypress);

    return () => clean();
  }, [keyEvent, key, callback]);
}
