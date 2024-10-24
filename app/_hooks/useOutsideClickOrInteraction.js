import { useEffect, useRef } from "react";

export default function useOutsideClickOrInteraction(
  callback,
  options = ["click"],
  listenCapturing = false,
) {
  const ref = useRef();

  useEffect(() => {
    function handleEvent(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    }

    options.map((option) =>
      document.addEventListener(option, handleEvent, listenCapturing),
    );

    return () =>
      options.map((option) =>
        document.removeEventListener(option, handleEvent, listenCapturing),
      );
  }, [callback, ref, options]);

  return ref;
}
