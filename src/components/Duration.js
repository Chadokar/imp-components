import React, { useState } from "react";
import { styled } from "styled-components";
import { Calender } from "../icon";

const labels = [
  {
    key: 1,
    label: "1D",
  },
  {
    key: 1,
    label: "1W",
  },
  {
    key: 1,
    label: "1M",
  },
  {
    key: 1,
    label: "3M",
  },
  {
    key: 1,
    label: "6M",
  },
  {
    key: 1,
    label: "9M",
  },
  {
    key: 1,
    label: "1Y",
  },
  {
    key: 1,
    label: "Date Range",
  },
];

const Container = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  width: 9rem;
`;

const Buttonwrpr = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 9px 15px;
  gap: 5px;
  background: #675ef2;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Btntitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  display: flex;
  align-items: center;
  color: #ffffff;
`;

const Popwrpr = styled.div`
  position: absolute;
  bottom: -65px;
  right: 0;
  display: flex;
  padding: 1rem;
  gap: 0.625rem;
  background: #ffffff;
  box-shadow: 0px 8px 8px rgba(153, 153, 153, 0.12);
  border-radius: 10px;
  width: 25.5rem;
`;

const Itemwpr = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 0.5rem;
  min-width: fit-content;
  height: 30px;
  background: rgba(103, 94, 242, 0.2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Labeltxt = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #675ef2;
`;

const Duration = ({ title = "Last 1 Week" }) => {
  const [show, setShow] = useState(false);
  return (
    <Container>
      <Buttonwrpr onClick={() => setShow(!show)}>
        <Calender />
        <Btntitle>{title}</Btntitle>
      </Buttonwrpr>
      {show && (
        <Popwrpr>
          {labels.map((ele, i) => (
            <Itemwpr key={i}>
              <Labeltxt>{ele.label}</Labeltxt>
            </Itemwpr>
          ))}
        </Popwrpr>
      )}
    </Container>
  );
};

export default Duration;
