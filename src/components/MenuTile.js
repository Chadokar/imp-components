import React from "react";
import styled from "styled-components";

const TileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
`;

const Titlewrapper = styled.h4`
  //   font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  text-align: center;
  color: #000000;
  margin: 0;
  padding: 0;
`;

function MenuTile({
  title,
  padding = "0",
  height = "85px",
  width = "150px",
  borderRadius = "10px",
}) {
  return (
    <TileWrapper style={{ padding, height, width, borderRadius }}>
      <Titlewrapper>{title}</Titlewrapper>
    </TileWrapper>
  );
}

export default MenuTile;
