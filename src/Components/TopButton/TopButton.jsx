import React, { useState, useEffect } from "react";
import "./BackToTopButton.css"; // Import your CSS file for styling
import { FaArrowAltCircleUp } from "react-icons/fa";

const BackToTopButton = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to check the scroll position
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Set the visibility based on the scroll position
      setIsVisible(scrollTop > 100); // You can adjust the value based on your preference
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // The empty dependency array ensures that the effect runs only once on mount

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling effect
    });
  };

  return (
    <button
      className={`back-to-top-button ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <FaArrowAltCircleUp
        className={"back-to-top-arrow"}
        id={props.light ? "arrow_light" : null}
      />
    </button>
  );
};

export default BackToTopButton;
