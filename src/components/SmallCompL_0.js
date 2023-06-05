import React from "react";
import { styled } from "styled-components";
import { Uparrow } from "../icon";

const Compwpr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  gap: 1rem;
`;

const Labelwpr = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #675ef2;
`;

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
`;

const Titlewrpr = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: right;
  color: #000000;
`;

const Deswpr = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #585858;
  & > svg {
    margin: 0 0 -2px 4px;
  }
`;

const SmallCompL_0 = ({
  label = "Articles",
  title = "John Smith",
  des = "125,566 users",
}) => {
  return (
    <Compwpr>
      <Labelwpr>{label}</Labelwpr>
      <MainBox>
        <Titlewrpr>{title}</Titlewrpr>
        <Deswpr>
          {des}
          <Uparrow />
        </Deswpr>
      </MainBox>
    </Compwpr>
  );
};

export default SmallCompL_0;
