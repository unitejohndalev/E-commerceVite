import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

import "../../styles/arrowUp.css"

const ArrowUp = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);


   
  //state for on scroll down hide nav and onscroll up show nav
  const [scrollDirection, setScrollDirection] = useState(null);

  //handle side effect for scroll up and down
  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);
  return (
    <div className={`fixed w-[100%] h-[10vh] ${
          scrollDirection === "down" ? "-bottom-24" : "bottom-0"
        }   z-20 transition-all duration-500 !max-w-[100%]
        !rounded-none`}>
      <FaArrowCircleUp
        className="scrollTop absolute right-5  "
        onClick={scrollTop}
        style={{ height: 40, display: showScroll ? "flex" : "none" }}
      />
    </div>
  );
};

export default ArrowUp;
