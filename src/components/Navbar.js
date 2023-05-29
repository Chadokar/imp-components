import React from "react";
import styled from "styled-components";

const NavWrapper = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  text-align: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 85px;
  padding: 8px 16px;
  box-sizing: border-box;
  justify-content: space-between;
  background: #ffffff;
  font-family: "Inter";
  font-style: normal;
`;

export const NavLeft = styled.div`
  display: flex;
  width: fit-content;
  gap: 8px;
  align-items: center;
`;

const NavRight = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 30px;
`;

function Navbar({ LeftBox, RightBox }) {
  return (
    <NavWrapper>
      <NavLeft>{LeftBox}</NavLeft>
      <NavRight>{RightBox}</NavRight>
    </NavWrapper>
  );
}

export default Navbar;
