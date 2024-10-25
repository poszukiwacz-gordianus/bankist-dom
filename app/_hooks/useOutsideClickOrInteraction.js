import { useEffect, useRef } from "react";

export default function useOutsideClickOrInteraction(
  callback,
  options = ["click"],
  listenCapturing = false,
) {
  const ref = useRef();

  useEffect(() => {
    const removeEvent = () =>
      options.forEach((option) =>
        document.removeEventListener(option, handleEvent, listenCapturing),
      );

    function handleEvent(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
        removeEvent(); // Remove event listener after invoking the callback
      }
    }

    options.forEach((option) =>
      document.addEventListener(option, handleEvent, listenCapturing),
    );

    return () => removeEvent(); // Cleanup event listeners on component unmount
  }, [callback, options, listenCapturing]);

  return ref;
}
