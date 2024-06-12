import React, { useState, useEffect, useRef } from "react";

import html from "../assets/html-5.png";
import css from "../assets/css-3.png";
import js from "../assets/js.png";
import java from "../assets/java.png";
import react from "../assets/react.png";
import node from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";

import tailwind from "../assets/tailwind.png";

const HorizontalScroller = () => {
  const [images, setImages] = useState([
    { src: html },
    { src: css },
    { src: js },
    { src: react },
    { src: tailwind },
    // add more images to the array
  ]);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [bufferSize, setBufferSize] = useState(10); // adjust the buffer size to your liking

  const scrollerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scroller = scrollerRef.current;
      const scrollLeft = scroller.scrollLeft;
      const scrollWidth = scroller.scrollWidth;
      const clientWidth = scroller.clientWidth;

      if (scrollLeft + clientWidth >= scrollWidth - bufferSize) {
        // reached the end of the scroller, add more images
        addMoreImages();
      }
    };

    scrollerRef.current.addEventListener("scroll", handleScroll);
    return () => {
      scrollerRef.current.removeEventListener("scroll", handleScroll);
    };
  }, [bufferSize]);

  const addMoreImages = () => {
    const newImages = [];
    for (let i = 0; i < bufferSize; i++) {
      newImages.push({ src: `image${images.length + i + 1}.jpg` });
    }
    setImages([...images, ...newImages]);
  };

  return (
    <div
      ref={scrollerRef}
      className="infinite-scroller overflow-x-auto overflow-y-hidden whitespace-nowrap"
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          className="w-[150px] h-auto object-cover rounded-md"
        />
      ))}
    </div>
  );
};

export default HorizontalScroller;
