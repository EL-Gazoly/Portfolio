// hooks/useLoadingAnimation.ts
"use client";

import { useState, useEffect } from "react";

export function useLoadingAnimation(delay = 0) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isLoaded;
}
