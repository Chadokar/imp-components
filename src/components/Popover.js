import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";

const MainWrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const PlusButton = styled.button`
  box-sizing: border-box;
  width: 75px;
  height: 60px;
  background: #ffffff;
  border: 1px solid #c3c7d9;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PopoverWrapper = styled.div`
  position: absolute;
  background: #ffffff;
  //   box-shadow: 0px 5px 10px rgba(108, 73, 172, 0.3);
  border: 1px solid #c3c7d9;
  top: calc(100% + 10px);
  border-radius: 10px;
  right: 00%;
  transform: translate(0, 0);
  display: ${(prop) => (prop.show ? "flex" : "none")};

  &::before {
    content: "";
    position: absolute;
    right: calc(${(props) => props.buttonWidth / 2}px);
    top: 00;
    transform: translate(50%, -55%) rotate(-135deg);
    border-right: 1px solid #c3c7d9;
    border-bottom: 1px solid #c3c7d9;
    width: 10px;
    height: 10px;
    background: #ffffff;
  }
`;

function Popover({ content }) {
  const [show, setShow] = useState(false);
  const plusButtonRef = useRef(null);
  const [width, setWidth] = useState();

  useEffect(() => {
    if (plusButtonRef.current) {
      console.log("PlusButton width:", plusButtonRef.current.offsetWidth);
      setWidth(plusButtonRef.current.offsetWidth);
    }
  }, []);

  return (
    <MainWrapper>
      <PlusButton ref={plusButtonRef} onClick={() => setShow(!show)}>
        Click
      </PlusButton>
      <PopoverWrapper buttonWidth={width} show={show}>
        {content}
      </PopoverWrapper>
    </MainWrapper>
  );
}

export default Popover;
