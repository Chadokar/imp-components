import React from "react";
import { styled } from "styled-components";
import { Uparrow } from "../icon";
import Proptypes from "prop-types";

const Compwpr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const NumberCon = styled.div`
  display: flex;
  justify-content: end;
`;
const Labelwpr = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: end;
  text-align: right;
  color: #585858;
`;

const Numwrp = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
  & span {
    font-size: 18px;
    color: #999999;
    margin: 0.25rem 0 0 0.25rem;
  }
`;

const Changewpr = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  display: flex;
  align-items: end;
  margin: 0 0 7px 6px;
  color: ${(props) => (props.color ? "#50B601" : "#ED3F47")};
  & > svg {
    stroke: ${(props) => (props.color ? "#50B601" : "#ED3F47")};
    > path {
      fill: ${(props) => (props.color ? "#50B601" : "#ED3F47")};
    }
    transform: rotate(${(props) => (props.color ? "0" : "180deg")});
  }
  & span {
    color: ${(props) => (props.color ? "#50B601" : "#ED3F47")};
    margin: 0 0 -1px 2px;
  }
`;

const SmallCompL_1 = ({
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
        <Changewpr color={isPositive}>
          <Uparrow />
          <span>{change}%</span>
        </Changewpr>
      </NumberCon>
    </Compwpr>
  );
};

SmallCompL_1.propTypes = {
  label: Proptypes.string,
  num: Proptypes.string,
  symbol: Proptypes.string,
  change: Proptypes.string,
  isPositive: Proptypes.bool,
};

export default SmallCompL_1;
