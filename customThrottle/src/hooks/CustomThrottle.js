import React, { useEffect, useRef, useState } from "react";

export default function CustomThrottle(heavyCal, delay) {
  const [lastExecuted, setLastExecuted] = useState(0);
  const now = useRef(Date.now());
  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (now - lastExecuted >= delay) {
        heavyCal();
        setLastExecuted(now);
      }
    }, delay);
    return () => clearTimeout(timeOut);
  }, [heavyCal, delay]);
}
