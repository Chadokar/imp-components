import React, { useState } from "react";
import { styled } from "styled-components";

const Boxwraper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  justify-content: space-between;
`;

const BoxContainer = styled.div`
  width: 800px;
  background: #f3f6f7;
  border-radius: 10px;
  padding: 6.35px;
`;

const Slider = styled.div`
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 5px 10px rgba(108, 73, 172, 0.3);
  border-radius: 10px;
  top: 0;
  width: ${(props) => 100 / props.size}%;
  height: 100%;
  z-index: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${(props) => props.position}%);
`;

const ComponentWrapper = styled.div`
  width: 100%;
  z-index: 1;
`;

function Box({ Components }) {
  const size = Components.length;
  const [position, setPosition] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (index) => {
    const newPosition = position + 100 * (index - currentSlide);
    setPosition(newPosition);
    console.log(newPosition);
    setCurrentSlide(index);
  };

  return (
    <BoxContainer>
      <Boxwraper>
        <Slider position={position} size={size}></Slider>
        {Components.map((slide, i) => (
          <ComponentWrapper onClick={() => handleClick(i)} key={i}>
            {slide}
          </ComponentWrapper>
        ))}
        {/* {Components} */}
      </Boxwraper>
    </BoxContainer>
  );
}

export default Box;
