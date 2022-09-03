import { useState, useEffect } from "react";

export function useScroll() {

  const [scrollY, setScrollY] = useState(0);


  const listener = e => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  console.log(scrollY);
  
  return {
    scrollY
  };
}