"use client";
import { BiArrowToTop } from 'react-icons/bi';
import React, { useState, useEffect } from "react";
import "./scrollTopModule.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={handleScrollToTop}
          className="scroll-to-top">
          <BiArrowToTop size={24} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
