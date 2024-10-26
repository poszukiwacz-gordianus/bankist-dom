"use client";

import { useEffect } from "react";

export default function useKey(keyEvent, key, callback) {
  useEffect(() => {
    const clean = () => document.removeEventListener(keyEvent, keypress);

    const keypress = (e) => {
      console.log(e.key);
      if (e.key === key) callback();
      clean();
    };

    document.addEventListener(keyEvent, keypress);

    return () => clean();
  }, [keyEvent, key, callback]);
}
