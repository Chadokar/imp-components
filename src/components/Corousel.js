import React, { useRef, useState } from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
`;

const CarouselBox = styled.div`
  display: flex;
  overflow-x: hidden;
  scroll-behavior: smooth;
  gap: 10px;
  width: 100%;
  transition: transform 0.3s ease-in-out;
`;

const CarouselDotbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  gap: 3px;
`;

const Dots = styled.span`
  box-sizing: border-box;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  aspect-ratio: 1/1;
`;

const SlideWrapper = styled.div`
  min-width: 100%;
`;

const Carousel = ({
  slides,
  width = 100,
  dotSize = 8,
  dotBgColor = "#675ef2",
  dotBorder = "1px solid #675ef2",
  borderRadius = 10,
  padding = "24px 24px 10px 24px",
  backgroundColor = "#FFFFFF",
  handleClick = () => {},
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);

  const handleClickdot = (index) => {
    const container = containerRef.current;
    if (index > currentSlide) {
      container.scrollLeft +=
        (index - currentSlide) * (container.clientWidth + 10);
    } else if (index < currentSlide) {
      container.scrollLeft -=
        (currentSlide - index) * (container.clientWidth + 10);
    }
    setCurrentSlide(index);
  };

  return (
    <CarouselContainer
      style={{
        width,
        borderRadius,
        padding,
        background: backgroundColor,
      }}
    >
      <CarouselBox
        onClick={handleClick}
        className="product-carousel"
        ref={containerRef}
      >
        {slides.map((slide, i) => (
          <SlideWrapper key={i}>{slide}</SlideWrapper>
        ))}
      </CarouselBox>
      <CarouselDotbox>
        {slides.map((_, index) => (
          <Dots
            style={{
              width: dotSize,
              border: dotBorder,
              backgroundColor:
                index === currentSlide ? dotBgColor : "transparent",
              opacity: 1,
            }}
            key={index}
            onClick={() => handleClickdot(index)}
          ></Dots>
        ))}
      </CarouselDotbox>
    </CarouselContainer>
  );
};

export default Carousel;
