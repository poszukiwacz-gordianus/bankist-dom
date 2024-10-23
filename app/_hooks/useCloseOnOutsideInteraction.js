import { useEffect, useRef } from "react";

export default function useCloseOnOutsideInteraction(
  callback,
  options = [{ event: "click", listenCapturing: true }],
) {
  const ref = useRef();

  useEffect(() => {
    function handleEvent(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    }

    options.map((option) =>
      document.addEventListener(
        option.event,
        handleEvent,
        option.listenCapturing,
      ),
    );

    return () =>
      options.map((option) =>
        document.removeEventListener(
          option.event,
          handleEvent,
          option.listenCapturing,
        ),
      );
  }, [callback, ref, options]);

  return ref;
}
