import React from "react";
import { styled } from "styled-components";
import { Uparrow } from "../icon";
import Proptypes from "prop-types";

const Compwpr = styled.div``;

const NumberCon = styled.div`
  display: flex;
`;
const Labelwpr = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #585858;
`;

const Numwrp = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
  & span {
    font-size: 14px;
    color: #585858;
    margin-left: 4px;
  }
`;

const Changewpr = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) => props.color};
  & > svg {
    stroke: ${(props) => props.color};
  }
  & span {
    color: ${(props) => props.color};
  }
`;

const SmallComp = ({
  label = "XXXXXXXX",
  num = "1.0",
  symbol = "M",
  change = "32.4",
  isPositive = true,
}) => {
  return (
    <Compwpr>
      <Labelwpr>{label}</Labelwpr>
      <NumberCon>
        <Numwrp>
          {num}
          <span>{symbol}</span>
        </Numwrp>
        <Changewpr
          color={isPositive ? "#50B601" : "#ED3F47"}
          style={{ transform: "rotate(180deg)" }}
        >
          <Uparrow />
          <span>{change}%</span>
        </Changewpr>
      </NumberCon>
    </Compwpr>
  );
};

SmallComp.propTypes = {
  label: Proptypes.string,
  num: Proptypes.string,
  symbol: Proptypes.string,
  change: Proptypes.string,
  isPositive: Proptypes.bool,
};

export default SmallComp;
